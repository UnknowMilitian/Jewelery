// Splide
let splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  gap: "5rem",
  perMove: 1,
  loop: true,
  arrows: false,
  pagination: false,
  autoplay: true,

  breakpoints: {
    1000: {
      perPage: 3,
      gap: "4rem",
    },

    800: {
      perPage: 2,
    },
  },
});

splide.mount();
// /Splide
