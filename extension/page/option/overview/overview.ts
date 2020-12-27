{
	const alarmSound                   = new Audio('https://q4dizzy.ru/alarm.wav'),
	      planetaryUrl                 = `/?option=overview`,
	      get_page                     = (url: string, callback: any) => {
		      const request = new XMLHttpRequest();
		      request.open(`get`, url, true);
		      request.responseType = `document`;
		      request.send(null);
		      request.onload = () => {
			      if (request.readyState === 4) {
				      if (request.status === 200) callback(request);
				      else console.error(request.statusText);
			      }
		      };
	      }, getSecondsFromRaw         = (raw: string) => {
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
	      }, formatDate                = (time: Date) => {
		      return new Date(time.getTime() - time.getTimezoneOffset() * 60000).toISOString().replace('T', ' ').substring(0, 19);
	      }, getHumanTimestamp         = (timestamp: number) => {
		      const date = new Date(timestamp * 1000);
		      return formatDate(new Date(
			      date.getFullYear(),
			      date.getMonth(),
			      date.getDate(),
			      date.getHours(),
			      date.getMinutes(),
			      date.getSeconds()
		      ));
	      }, checkAttack               = () => {
		      get_page(planetaryUrl, (data: XMLHttpRequest) => {
			      const row = data.response.querySelectorAll("tr[style]");

			      for (let i = 0; i < row.length; i++) {
				      if (row[i].style.color === 'rgb(255,73,74)') {
					      alarmSound.play();
					      return;
				      }
			      }
		      });
	      }, updatePlaneraryServerTime = () => {
		      const th = document.querySelector<HTMLTableHeaderCellElement>('th[colspan="3"]');
		      if (th === null) return;
		      const serverTime = new Date(th.innerHTML);
		      setInterval(function () {
			      serverTime.setSeconds(serverTime.getSeconds() + 1);
			      th.innerHTML = formatDate(serverTime);
		      }, 1000);
	      }, returnFleetTimer          = () => {
		      //Обращаемся к второй таблице (флоты)
		      const table = document.querySelectorAll<HTMLElement>('table[width="530"]')[1];


		      if (table.querySelectorAll<HTMLElement>('tr').length > 1) {
			      const tr = table.querySelectorAll<HTMLElement>('tr:not(:first-child)');

			      //Перебор строк
			      for (let i = 0; i < tr.length; i++) {
				      // @ts-ignore
				      const secondCell = tr[i].firstElementChild.nextElementSibling, //Вторая ячейка таблицы (где стрелки возврата)
				            // @ts-ignore
				            thirdCell  = secondCell.nextElementSibling, //3 ячейка с данными о полете
				            // @ts-ignore
				            fleetCount = thirdCell.firstElementChild.outerHTML, //Кол-во флота.
				            // @ts-ignore
				            from       = thirdCell.firstElementChild.nextElementSibling.innerHTML, //откуда.
				            // @ts-ignore
				            to         = (thirdCell.firstElementChild.nextElementSibling.nextElementSibling.nodeName === 'IMG') //Куда
					            // @ts-ignore
				                         ? thirdCell.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML //Если флот уже возвращается
					            // @ts-ignore
				                         : thirdCell.firstElementChild.nextElementSibling.nextElementSibling.innerHTML, //Если флот ещё не возвращается
				            // @ts-ignore
				            mission    = (thirdCell.lastChild.nodeValue !== null) ? thirdCell.lastChild.nodeValue.split(":")[1] : thirdCell.lastChild.outerHTML, //Миссия
				            // @ts-ignore
				            lastTime   = getSecondsFromRaw(tr[i].firstChild!.firstElementChild!.innerHTML); // Оставшееся время

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
						      const nextRowTimestamp = parseInt(tr[x].firstChild.firstElementChild.attributes.alt.value);
						      const date = new Date(getHumanTimestamp(nextRowTimestamp));

						      date.setSeconds(date.getSeconds() - (lastTime * 2));

						      // @ts-ignore
						      if (tr[i].firstChild.nextElementSibling.childElementCount === 1) {
							      // @ts-ignore
							      secondCell.innerHTML += '<div class="return_time" style="min-width: 75px;">' + formatDate(date) + '</div>'; //время при возврате
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
				      r_fleets[i].innerHTML = formatDate(returnTime);
			      }
		      }, 1000);
	      };

	updatePlaneraryServerTime();
	returnFleetTimer();

	checkAttack();
	setInterval(checkAttack, 3000000);
}