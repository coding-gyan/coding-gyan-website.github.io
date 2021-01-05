const btn = document.querySelector(".fas");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
