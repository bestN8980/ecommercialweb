const signUp = document.querySelector("#sign-up");
signUp.addEventListener("click", () => {
  alert("BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG");
});

const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
