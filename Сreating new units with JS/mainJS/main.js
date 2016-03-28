var container = document.querySelector("#container");

var fldWidth = document.querySelector("#width");
var fldHeight = document.querySelector("#height");
var fldTop = document.querySelector("#top");
var fldLeft = document.querySelector("#left")


function addNewBlock() {
	var w = parseInt(fldWidth.value);
	var h = parseInt(fldHeight.value);
	var t = parseInt(fldTop.value);
	var l = parseInt(fldLeft.value);
	console.log("width,heigh", w,h,l,t);

	var blc = document.createElement("div");
	blc.style.left = l + "px";
	blc.style.top = t+ "px";

	blc.style.width = w+"px";
	blc.style.height = h+"px";

	blc.className = "block";

    container.appendChild(blc);
  


} 
