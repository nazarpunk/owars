{
	const js     = (path: string) => {
		      const $js = document.createElement(`script`);
		      $js.type = `text/javascript`;
		      $js.src = `chrome-extension://${document.head.dataset.extensionId}${path}.js`;
		      document.head.appendChild($js);
	      },
	      param  = new URLSearchParams(window.location.search),
	      page   = param.get('mode') || param.get('option') || null;

	if (page !== null) js(`/page/${page}/${page}`);

	console.log(window.location.href);
}