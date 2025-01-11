const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const container = document.getElementById("container");
const view = JSON.parse(localStorage.getItem("view"));

if (view && view.length > 0) {
  const product = view[view.length - 1];
  container.innerHTML += `
    <div class="w-auto">
      <img src="${product.src}" alt="${product.name}" />
    </div>
    <div>
      <hr />
      <div class="text-[30px] font-bold">${product.name}</div>
      <hr />
      <div class="text-[20px]">${product.price}đ</div>
      <hr />
      <p class="text-justify">Mô tả: ${product.infor}</p>
    </div>
  `;
}
