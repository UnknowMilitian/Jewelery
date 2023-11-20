// Navbar
let mobileNavbar = document.querySelector(".mobile-navbar");
const toggleMobileNavbar = () => mobileNavbar.classList.toggle("show");
const closeMobileNavbar = () => mobileNavbar.classList.remove("show");

document.querySelector(".bar").addEventListener("click", toggleMobileNavbar);
document.querySelectorAll(".navbar-mobile-link").forEach((element) => {
  element.addEventListener("click", closeMobileNavbar);
});

window.addEventListener("click", (event) => {
  if (!event.target.closest("nav")) {
    mobileNavbar.classList.remove("show");
  }
});
// /Navbar

// Splide
const splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  gap: "5rem",
  perMove: 1,
  loop: true,
  arrows: false,
  pagination: false,
  autoplay: true,
  breakpoints: {
    1000: { perPage: 3, gap: "4rem" },
    800: { perPage: 2 },
  },
});
splide.mount();
// /Splide

// IntersectionObserver
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
// /IntersectionObserver

// Filer
document.querySelectorAll(".product").forEach((product) => {
  const prices = product.querySelectorAll(".price:not(.default)");
  const buttons = product.querySelectorAll(".filter-btn:not(.default)");
  const defaultPrice = product.querySelector(".price.default");

  defaultPrice.classList.add("active");
  prices.forEach((price) => (price.style.display = "none"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const size = button.getAttribute("data-size");
      const priceToShow = product.querySelector(`.price[data-size="${size}"]`);

      defaultPrice.classList.remove("active");
      defaultPrice.style.display = "none";
      prices.forEach((price) => (price.style.display = "none"));

      buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
      priceToShow && (priceToShow.style.display = "block");
    });
  });
});
// /Filer
