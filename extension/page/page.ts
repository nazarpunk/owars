{
	const js = (path: string) => {
		const $js = document.createElement(`script`);
		$js.type  = `text/javascript`;
		$js.src   = `chrome-extension://${document.head.dataset.extensionId}${path}.js`;
		document.head.appendChild($js);
	}
	
	const param  = new URLSearchParams(window.location.search),
	      mode   = param.get('mode'),
	      option = param.get('option');
	
	if (mode !== null) js(`/page/mode/${mode}/${mode}`);
	if (option !== null) js(`/page/option/${option}/${option}`);
	
	console.log(window.location.href);
}