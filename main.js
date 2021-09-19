for(var i=0; i<document.images.length; i++) {
	document.images[i].setAttribute("style", `height:${document.images[i].height}px; width:${document.images[i].width}px; object-fit:cover; content:url(${"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2SihDg2em30I0fS8lZ1jsQHaE8%26pid%3DApi&f=1"});`);
	document.images[i].src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2SihDg2em30I0fS8lZ1jsQHaE8%26pid%3DApi&f=1";
}
