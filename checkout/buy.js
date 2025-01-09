let cart = JSON.parse(localStorage.getItem("cart")) || [];
let divCart = document.querySelector(".cart");

const renderCart = () => {
  divCart.innerHTML = `
    <div>Ảnh</div>
    <div>Tên sản phẩm</div>
    <div>Đơn giá</div>
    <div>Số lượng</div>
    <div>Thành tiền</div>
    <div>Xoá</div>
  `;

  cart.forEach((item, index) => {
    let renderItem = `
      <div class="w-14 h-16">
        <img src="${item.scr}" alt="product" />
      </div>
      <div>${item.name}</div>
      <div>${item.price}</div>
      <div>${item.quantity}</div>
      <div>${item.price * item.quantity}đ</div>
      <button class="delete bg-[orange] border-none" data-index="${index}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    divCart.innerHTML += renderItem;
  });
};

renderCart();

divCart.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    const index = e.target.closest(".delete").getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
