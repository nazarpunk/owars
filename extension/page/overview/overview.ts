{
	const get_seconds_from_raw         = (raw: string) => {
		      let rawArr       = raw.split(` `),
		          totalSeconds = 0;

		      for (let z = 0; z < rawArr.length; z++) {
			      const unitTime = rawArr[z].slice(-1),
			            unit     = parseInt(rawArr[z].replace(/(\d+)\w/g, '$1'));

			      if (unitTime === 'd') totalSeconds += unit * 60 * 60 * 24;
			      if (unitTime === 'h') totalSeconds += unit * 60 * 60;
			      if (unitTime === 'm') totalSeconds += unit * 60;
			      if (unitTime === 's') totalSeconds += unit;
		      }

		      return totalSeconds;
	      },
	      date_format                  = (time: Date) => new Date(time.getTime() - time.getTimezoneOffset() * 60000).toISOString().replace('T', ' ').substring(0, 19),
	      getHumanTimestamp            = (timestamp: number) => {
		      const date = new Date(timestamp * 1000);
		      return date_format(new Date(
			      date.getFullYear(),
			      date.getMonth(),
			      date.getDate(),
			      date.getHours(),
			      date.getMinutes(),
			      date.getSeconds()
		      ));
	      }, updatePlaneraryServerTime = () => {

		      const th = document.querySelector<HTMLTableHeaderCellElement>('th[colspan="3"]');
		      if (th === null) return;
		      const serverTime = new Date(th.innerHTML);
		      setInterval(function () {
			      serverTime.setSeconds(serverTime.getSeconds() + 1);
			      th.innerHTML = date_format(serverTime);
		      }, 1000);
	      }, returnFleetTimer          = () => {
		      const table = document.querySelectorAll<HTMLElement>('table[width="530"]')[1];
		      if (!table) return;

		      if (table.querySelectorAll<HTMLElement>('tr').length > 1) {
			      const tr = table.querySelectorAll<HTMLElement>('tr:not(:first-child)');

			      //Перебор строк
			      for (let i = 0; i < tr.length; i++) {
				      // @ts-ignore
				      const $second_cell = tr[i].firstElementChild.nextElementSibling, //Вторая ячейка таблицы (где стрелки возврата)
				            // @ts-ignore
				            thirdCell    = $second_cell.nextElementSibling, //3 ячейка с данными о полете
				            // @ts-ignore
				            fleetCount   = thirdCell.firstElementChild.outerHTML, //Кол-во флота.
				            // @ts-ignore
				            from         = thirdCell.firstElementChild.nextElementSibling.innerHTML; //откуда.
				      // @ts-ignore
				      if (!thirdCell.firstElementChild.nextElementSibling.nextElementSibling) continue;
				      // @ts-ignore
				      const to       = (thirdCell.firstElementChild.nextElementSibling.nextElementSibling.nodeName === 'IMG') //Куда
					      // @ts-ignore
				                       ? thirdCell.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML //Если флот уже возвращается
					      // @ts-ignore
				                       : thirdCell.firstElementChild.nextElementSibling.nextElementSibling.innerHTML, //Если флот ещё не возвращается
				            // @ts-ignore
				            mission  = (thirdCell.lastChild.nodeValue !== null) ? thirdCell.lastChild.nodeValue.split(":")[1] : thirdCell.lastChild.outerHTML, //Миссия
				            // @ts-ignore
				            lastTime = get_seconds_from_raw(tr[i].firstChild!.firstElementChild!.innerHTML); // Оставшееся время

				      for (let x = i + 1; x < tr.length; x++) {
					      // @ts-ignore
					      const nextRow           = tr[x].firstElementChild!.nextElementSibling!.nextElementSibling,
					            // @ts-ignore
					            nextRowFleetCount = nextRow.firstElementChild.outerHTML,
					            // @ts-ignore
					            nextRowFrom       = nextRow.firstElementChild.nextElementSibling.innerHTML,
					            // @ts-ignore
					            nextRowTo         = (nextRow.firstElementChild.nextElementSibling.nextElementSibling.nodeName === 'IMG')
						            // @ts-ignore
					                                ? nextRow.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
						            // @ts-ignore
					                                : nextRow.firstElementChild.nextElementSibling.nextElementSibling.innerHTML,
					            // @ts-ignore
					            nextRowMission    = (nextRow.lastChild.nodeValue != null)
						            // @ts-ignore
					                                ? nextRow.lastChild.nodeValue.split(":")[1]
						            // @ts-ignore
					                                : nextRow.lastChild.outerHTML;

					      if (nextRowFleetCount === fleetCount && nextRowFrom === to && nextRowTo === from && nextRowMission === mission) {
						      // @ts-ignore
						      const nextRowTimestamp = parseInt(tr[x].firstChild.firstElementChild.attributes.alt.value),
						            date             = new Date(getHumanTimestamp(nextRowTimestamp));

						      date.setSeconds(date.getSeconds() - (lastTime * 2));

						      // @ts-ignore
						      if (tr[i].firstChild.nextElementSibling.childElementCount === 1) {
							      // @ts-ignore
							      $second_cell.innerHTML += `<div class="return_time" style="min-width: 75px;">${date_format(date)}</div>`; //время при возврате
						      }

						      break;
					      }
				      }
			      }
			      updateReturnFleetsTime();
		      }

	      }, updateReturnFleetsTime    = () => {
		      const r_fleets = document.getElementsByClassName('return_time');

		      setInterval(() => {
			      for (let i = 0; i < r_fleets.length; i++) {
				      const returnTime = new Date(r_fleets[i].innerHTML);
				      returnTime.setSeconds(returnTime.getSeconds() + 2);
				      r_fleets[i].innerHTML = date_format(returnTime);
			      }
		      }, 1000);
	      };

	updatePlaneraryServerTime();
	returnFleetTimer();

	//<editor-fold desc="check attack">
	document.querySelectorAll<HTMLTableHeaderCellElement>(`th[width='360']`).forEach($th => {
		if (!/с\s+миссией:\s+Атаковать/.test($th.textContent!)) return;
		const $tr = $th.parentElement;
		if (!($tr instanceof HTMLTableRowElement)) return;
		const $a   = $tr.querySelector<HTMLLinkElement>(`:scope > th:nth-child(1) a[id]`)!,
		      ts   = +$a.getAttribute(`alt`)! * 1000,
		      date = new Date(+$a.getAttribute(`alt`)! * 1000);

		console.log(ts, $a.textContent, date.toLocaleDateString(), date.toLocaleTimeString());
	});
	//</editor-fold>
}