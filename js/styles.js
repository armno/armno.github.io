function loadCSS(e,t,n){"use strict";var i=window.document.createElement("link");var o=t||window.document.getElementsByTagName("script")[0];i.rel="stylesheet";i.href=e;i.media="only x";o.parentNode.insertBefore(i,o);setTimeout(function(){i.media=n||"all"})}
loadCSS('http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700|Abril+Fatface');
loadCSS('/css/style.css');