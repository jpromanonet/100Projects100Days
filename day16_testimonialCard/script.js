const authorsEl = document.querySelectorAll(".author");
const container = document.querySelector(".testimonials-container");
const nameEl = document.querySelector(".name");
const textEl = document.querySelector(".text");

const testimonials = [
  {
    text: "This is a test!",
    name: "Arthur Birnbaum",
    color: "rgba(235, 59, 90,1.0)"
  },
  {
    text: "This is a test!",
    name: "Phoebe Kotliar",
    color: "rgba(250, 130, 49,1.0)"
  },
  {
    text: "This is a test!",
    name: "Louisa P. Huard",
    color: "rgba(75, 123, 236,1.0)"
  },
  {
    text: "This is a test!",
    name: "Cristina Aurmoogum",
    color: "rgba(165, 94, 234,1.0)"
  },
  {
    text: "This is a test!",
    name: "J. Kent Pepper",
    color: "rgba(32, 191, 107,1.0)"
  }
];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
  author.addEventListener("click", e => {
    addTestimonial(idx);
    author.classList.add("selected");
  });
});

function addTestimonial(idx) {
  const testimonial = testimonials[idx];

  nameEl.innerHTML = testimonial.name;
  textEl.innerHTML = testimonial.text;
  container.style.background = testimonial.color;
  container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(
    0,
    testimonial.color.length - 4
  )}0.9)`;

  authorsEl.forEach(author => {
    author.classList.remove("selected");
  });
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
