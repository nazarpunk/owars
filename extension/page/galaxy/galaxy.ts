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
		const $td = $tr.children;

		const $z = $td[0].querySelector(`a`);
		if (!$z) return;

		const planet_space: string[] = [];
		$td[3].querySelectorAll(`img`).forEach($img => planet_space.push($img.alt));

		let obj = {
			x           : x,
			y           : y,
			z           : $z.textContent,
			planet_name : $td[2].textContent!.replace(`*`, ``),
			planet_space: planet_space.join(`, `),
			player      : $td[4].textContent!,
			aliance     : $td[5].textContent!
		};

		data.push(obj);
	});


	fetch(`http://gorsaldo.online/owars/save.php`, {
		method: `post`,
		body  : JSON.stringify(data)
	})
		.then(r => r.json())
		.then(data => {
			console.log(data);
		})

	console.log(data);
})();

