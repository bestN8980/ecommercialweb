const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
