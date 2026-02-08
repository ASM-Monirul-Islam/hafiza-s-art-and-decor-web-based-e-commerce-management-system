// navbar scripts starts here

const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");


if(bar) {
	bar.addEventListener("click", ()=>{
		navbar.classList.add("active");
	})
}

if(close) {
	close.addEventListener("click", ()=>{
		navbar.classList.remove("active");
	});
}

document.addEventListener("click", (e)=>{
	if(
		navbar.classList.contains("active") &&
		!bar.contains(e.target) &&
		!close.contains(e.target)
	) {
		navbar.classList.remove("active");
	}
});