// navbar scripts starts here

const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

document.addEventListener("click", (e) => {
  if (
    navbar.classList.contains("active") &&
    !bar.contains(e.target) &&
    !close.contains(e.target)
  ) {
    navbar.classList.remove("active");
  }
});

// Shop section

function filterProduct() {
	const product_category = document.querySelector("#category").value;
	const products = document.querySelectorAll(".product");

	products.forEach(product => {
		if(product_category=="all") {
			product.style.display = "block";
		}else {
			if(product.dataset.category==product_category) {
				product.style.display = "block";
			}else {
				product.style.display="none";
			}
		}
	})
}