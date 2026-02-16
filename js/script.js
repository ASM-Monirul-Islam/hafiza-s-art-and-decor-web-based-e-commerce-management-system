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


// hero image

// const images = [
//     "../assets/hero1.png",
//     "../assets/hero2.png"
// ];

// const hero = document.getElementById("hero_img");

// let index = 0;

// setInterval(() => {
//     index = (index + 1) % images.length;
//     hero.style.backgroundImage = `url(${images[index]})`;
// }, 2000);
