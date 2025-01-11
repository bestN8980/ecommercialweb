let cart = JSON.parse(localStorage.getItem("cart")) || [];
let divCart1 = document.querySelector(".cart");
let divCart2 = document.querySelector(".cart-in-small-screen");

const renderCart1 = () => {
  let cartContent = `
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
        <img src="${item.src}" alt="product" />
      </div>
      <div>${item.name}</div>
      <div>${item.price}</div>
      <div>${item.quantity}</div>
      <div>${item.price * item.quantity}đ</div>
      <button class="delete bg-[orange] border-none" data-index="${index}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    cartContent += renderItem;
  });

  divCart1.innerHTML = cartContent;
};

const renderCart2 = () => {
  let cartContent = "";

  cart.forEach((item, index) => {
    let renderItem = `
    <div class="flex items-center justify-around">
      <div class="w-14 h-14">
        <img src="${item.src}" alt="product" />
      </div>
      <div class="text-left">
      <div class="font-bold text-[20px]">${item.name}</div>
      <div>Đơn giá: ${item.price}</div>
      <div>Số lượng: ${item.quantity}</div>
      <div>Tổng tiền: ${item.price * item.quantity}đ</div>
      </div>
      <button class="delete" data-index="${index}">
        Xoá
      </button>
    </div>
    <hr>
    `;
    cartContent += renderItem;
  });

  divCart2.innerHTML = cartContent;
};

renderCart1();
renderCart2();

divCart1.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    const index = parseInt(
      e.target.closest(".delete").getAttribute("data-index")
    );
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart1();
    renderCart2();
  }
});

divCart2.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    const index = parseInt(
      e.target.closest(".delete").getAttribute("data-index")
    );
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart1();
    renderCart2();
  }
});

const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
