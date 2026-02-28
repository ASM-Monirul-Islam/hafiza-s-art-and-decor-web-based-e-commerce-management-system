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
  const ctg = document.querySelector("#shop_category").value;
  const product = document.querySelectorAll(".product");

  product.forEach((prod) => {
    if (ctg == "all") {
      prod.style.display = "block";
    } else {
      if (ctg == prod.dataset.category) {
        prod.style.display = "block";
      } else {
        prod.style.display = "none";
      }
    }
  });
}
