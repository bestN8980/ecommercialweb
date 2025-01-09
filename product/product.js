const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

window.addEventListener("beforeunload", () => {
  if (sessionStorage.getItem("isLeaving") !== "true") {
    localStorage.removeItem("view");
    sessionStorage.setItem("isLeaving", "true");
  }
});

const container = document.getElementById("container");

container.innerHTML += `
`;
