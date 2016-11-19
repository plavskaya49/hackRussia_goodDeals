(function (window, document) {
	var scripts = document.getElementsByTagName('script'),
		len = scripts.length,
		re = /pixel\.js/,
		src, scriptSrc;

	while (len--) {
		src = scripts[len].src;
		if (src && src.match(re)) {
			scriptSrc = src;
			break;
		}
	}
	var params = {};
	var tmp;
	var getParams = scriptSrc.replace(/[^\?]+\?/, '').split('&');
	for(var i=0; i < getParams.length; i++) {
		tmp = getParams[i].split('=');
		params[tmp[0]] = tmp[1];
	}
	var iframe = document.createElement('iframe'),
		img = document.createElement("img"),
		httpReferer = window.encodeURIComponent(window.location.href);
	var pixelId = params['pixel'];
	var id = httpReferer;
	if ('id' in params) {
		id = params['id'];
	}
	iframe.width = "0";
	iframe.height = "0";
	iframe.frameBorder = "0";
	iframe.style.position = "absolute";
	iframe.style.left = "-9999px";
	iframe.onload = function () {
		img.src = "//x01.aidata.io/0.gif?pid=" + pixelId + "&id=" + id;
		iframe.contentDocument.body.appendChild(img);
	};
	(function addFrame() {
		document.body ? document.body.appendChild(iframe) : setTimeout(addFrame,10);
	})();
})(window, window.document);