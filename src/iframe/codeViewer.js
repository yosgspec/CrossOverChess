{
	const $ = document.createElement("textarea");
	$.style.width="100%";
	$.style.fontSize="14px";
	$.style.color="#0000FF";
	$.style.backgroundColor="#DDFFFF";
	$.wrap="off";
	$.readonly="true";
	$.textContent=document.body.innerHTML.split(/\r|\n|\r\n/).slice(0,-1).join("\n");

	const main = document.querySelector("main");
	main.style.display = "flex";
	const sub = main.firstChild;
	sub.style.width = "50svw";
	sub.style.height = "94svh";
	const canvas = sub.querySelector("#shogiCross");
	canvas.style.maxWidth = "50svw";
	main.appendChild($);
}
