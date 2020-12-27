{
	const js = (path: string) => {
		const $js = document.createElement(`script`);
		$js.src   = `chrome-extension://${chrome.runtime.id}/${path}`;
		$js.async = false;
		document.head.appendChild($js);
	}
	window.addEventListener('DOMContentLoaded', () => {
		document.head.setAttribute(`data-extension-id`, chrome.runtime.id);
		js(`page/page.js`);
	})
}