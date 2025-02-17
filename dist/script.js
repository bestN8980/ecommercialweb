const favoriteItems = [
  {
    src: "./images/53-min.webp",
    name: "Rượu Remy Martin CLUB",
    price: 1230000,
    infor: `Dung Tích: 750ml Xuất Sứ: Pháp Với những mùi vị, hương thơm hiếm có như mùi hoa iris, mùi thủy tiên, candies fruit (mùi kẹo), Passion fruit (mùi trái lạc tiên), vị trầm, vị mật ong và nhiều mùi vị khác, rượu...`,
  },

  {
    src: "./images/3.webp",
    name: "Rượu Luxury Altair Red",
    price: 2338000,
    infor:
      "Hãng sản xuất: Sand Pedro & Dassault. Xuất xứ: Thung lũng Alto Cachapoal, Chile. Thành phần: 65% Cabernet sauvignon, 22% Syrah, 7% Carmenere, 5% Cabernet Franc, 1% Petit Verdot Nồng độ: 14.7% Ngâm ủ/Oak aging: ngâm 16 tháng trong thùng Pháp mới nguyên 100% Rượu Luxury...",
  },

  {
    src: "./images/31.webp",
    name: "Rượu JOHNNIE WALKER BLUE",
    price: 729000,
    infor:
      "JOHNNIE WALKER BLUE LABEL  - QUÝ HIẾM TẠO NÊN BLUE TINH TÚY Hương Vị Hiếm Có Bậc Nhất Không phải ngẫu nhiên mà Johnnie Walker Blue Label được coi là một trong những dòng whisky pha trộn được đánh giá cao...",
  },

  {
    src: "./images/19.webp",
    name: "Rượu California Muscat",
    price: 2000000,
    infor:
      "Bên trong chai, bạn sẽ tìm thấy một số tốt nhất của California - cho dù đó là một màu trắng, hoặc màu đỏ, cung cấp cho bạn cơ hội để chia sẻ với bạn bè và gia đình lịch...",
  },
];

const renderFavorite = document.querySelector(".render-favorite");

favoriteItems.forEach((item) => {
  const html = `
          <div onclick="viewProduct('${item.name}')" data-product="${item.name}" class="product items bg-white p-4 hover:shadow-2xl">
            <div class="text-center">
              <img src="${item.src}" alt="favorite-images" class="w-full h-auto" />
              <button onclick="addToCart('${item.name}')" class="button-purchase bg-[orange] text-white w-32 h-10 rounded-md items-center hover:opacity-50 hidden absolute l-[50%] translate-x-[-50%] z-10" image="${item.src}" name="${item.name}" price="${item.price}">Mua hàng</button>
            </div>
            <div class="text-center">${item.name}</div>
            <div class="text-orange-500 text-center">${item.price}đ</div>
          </div>
  `;
  renderFavorite.innerHTML += html;
});

document.querySelectorAll(".items").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    let buyButton = item.querySelector(".button-purchase");
    buyButton.classList.remove("hidden");
    item.classList.add("bg-black");
    item.classList.add("bg-opacity-50");
    item.classList.add("transition");
    item.classList.add("duration-300");
  });

  item.addEventListener("mouseleave", () => {
    let buyButton = item.querySelector(".button-purchase");
    buyButton.classList.add("hidden");
    item.classList.remove("bg-black");
    item.classList.remove("bg-opacity-50");
    item.classList.remove("transition");
    item.classList.remove("duration-300");
  });

  item.addEventListener("click", (e) => {
    const productName = item.getAttribute("data-product");
    viewProduct(productName);
  });

  const buyButton = item.querySelector(".button-purchase");
  buyButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const productName = buyButton.getAttribute("data-name");
    addToCart(productName);
  });
});

const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function addToCart(productName) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = favoriteItems.find((item) => item.name === productName);
  if (product) {
    const check = cart.find((item) => item.name === product.name);
    if (check) {
      check.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  }
}

function viewProduct(productName) {
  const productSave = favoriteItems.find((item) => item.name === productName);
  if (productSave) {
    const viewedProducts = JSON.parse(localStorage.getItem("view")) || [];
    viewedProducts.push(productSave);
    localStorage.setItem("view", JSON.stringify(viewedProducts));
  }
  window.location = "./product.html";
}

console.log(localStorage.getItem("view"));
