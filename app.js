// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const submitBtn = document.getElementById("form-submit-btn");
const contactForm = document.getElementById("contact-form");

// show nav
navBtn.addEventListener("click", () => {
  console.log("Hello world");
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
