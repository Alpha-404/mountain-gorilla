var allImages = document.images;
var numImages = 0
for(var i=0; i<allImages.length; i++) {
	replaceImage(allImages[i]);
}
function replaceImage(image){
	image.setAttribute("style", `height:${image.height}px; width:${image.width}px; object-fit:cover; content:url(${"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2SihDg2em30I0fS8lZ1jsQHaE8%26pid%3DApi&f=1"});`);
	image.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2SihDg2em30I0fS8lZ1jsQHaE8%26pid%3DApi&f=1";
}
