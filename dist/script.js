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
          <div onclick="viewProduct('${item.name}')" data-product="${item.name}" class="product bg-white p-4 shadow-md relative hover:bg-black hover:bg-opacity-50 transition duration-300 rounded-lg group">
            <div class="text-center relative">
              <img src="${item.src}" alt="favorite-images" class="w-full h-auto" />
              <button onclick="addToCart('${item.name}')" class="button-purchase bg-orange-500 hover:bg-orange-700 text-white w-32 h-10 rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" image="${item.src}" name="${item.name}" price="${item.price}">Mua hàng</button>
            </div>
            <div class="text-center">${item.name}</div>
            <div class="text-orange-500 text-center">${item.price}đ</div>
          </div>
  `;
  renderFavorite.innerHTML += html;
});

document.querySelectorAll(".product").forEach((item) => {
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

const searchBar = document.querySelector("#search");
const searchGlass = document.querySelector("#glass");

searchGlass.addEventListener("click", () => {
  searchBar.classList.toggle("hidden");
});

function searchProduct() {
  let key = document.getElementById("search").value.trim().toLowerCase();

  if (key !== "") {
    const filteredItems = favoriteItems.filter((item) =>
      item.name.toLowerCase().includes(key)
    );

    localStorage.setItem("searchResults", JSON.stringify(filteredItems));

    window.location.href = "search.html";
  }
}

document.getElementById("search").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchProduct();
  }
});
