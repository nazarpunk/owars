(() => {
	const $table = document.querySelector(`table[width='570']`);
	if (!$table) return;

	const $head = $table.querySelector(`td.c[colspan='7']`);
	if (!$head) return;

	const match = $head.textContent!.match(/(\d+):(\d+)/);
	if (!match || match.length !== 3) return;

	const [, x, y]   = match,
	      data: {}[] = [];


	$table.querySelectorAll<HTMLTableRowElement>(`tr`).forEach($tr => {
		if ($tr.children.length !== 7) return;
		const $td = $tr.children as HTMLCollectionOf<HTMLTableRowElement>;

		const $z = $td[0].querySelector(`a`);
		if (!$z) return;

		const planet_space: string[] = [];
		let titanium = 0,
		    silicon  = 0
		$td[3].querySelectorAll(`img`).forEach($img => {
			const alt = $img.alt.trim();
			planet_space.push(alt);
			if (alt === `Поле обломков`) {
				const str  = $img.parentElement!.getAttribute(`onmouseover`) || ``,
				      rExp = /^.+Титан:<\/th><th>(.*)<\/th><\/tr><tr><th>Кремний:<\/th><th>(.*)<\/th><\/tr><tr>.+$/gms;

				titanium = Number(str.replace(rExp, '$1').replace(/\./, ''));
				silicon = Number(str.replace(rExp, '$2').replace(/\./, ''));
			}
		});

		let obj = {
			x           : x,
			y           : y,
			z           : $z.textContent,
			planet_name : $td[2].textContent!.replace(`*`, ``),
			planet_space: planet_space.join(`, `),
			titanium    : titanium,
			silicon     : silicon,
			player      : $td[4].textContent!,
			aliance     : $td[5].textContent!
		};

		data.push(obj);
	});

	const $galaxy = document.querySelector<HTMLInputElement>(`[name=galaxy]`),
	      $system = document.querySelector<HTMLInputElement>(`[name=system]`),
	      $next   = document.querySelector(`[name=systemRight]`);
	if ($galaxy && $system && $next && sessionStorage.getItem(`galaxy-grab`) === null) {
		const $button = document.createElement(`button`);
		$button.type = `button`;
		$button.innerHTML = `grab`;
		$next.insertAdjacentElement(`afterend`, $button);
		$button.addEventListener(`click`, e => {
			e.preventDefault();
			e.stopImmediatePropagation();
			sessionStorage.setItem(`galaxy-grab`, `0`);
			location.reload();
		})
	}

	fetch(`http://gorsaldo.online/owars/save.php`, {
		method: `post`,
		body  : JSON.stringify(data)
	})
		.then(r => r.json())
		.then(data => {
			const time = sessionStorage.getItem(`galaxy-grab`);
			if (time && $galaxy && $system && $next) {
				if (!data.hasOwnProperty(`success`)){
					alert(`Парсинг обломился`);
					return;
				}

				if (+time > 70) {
					sessionStorage.setItem(`galaxy-grab`, `0`);
					setTimeout(()=>{
						location.reload();
					}, 30000);
					return;
				}
				sessionStorage.setItem(`galaxy-grab`, (parseInt(time) + 1).toString());

				let g = +$galaxy.value,
					s = +$system.value + 1;

				if (s > 499) {
					s = 1;
					g+= 1;
				}
				if (g > 15){
					sessionStorage.removeItem(`galaxy-grab`);
					return;
				}

				$galaxy.value = g.toString();
				$system.value = s.toString();
				$next.dispatchEvent(new Event(`click`));
			}

		})
})();

