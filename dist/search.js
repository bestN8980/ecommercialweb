let searchResults = document.querySelector(".render-favorite");
let storedItems = JSON.parse(localStorage.getItem("searchResults")) || [];
let frame = document.querySelector("#frame");

if (storedItems.length > 0) {
  frame.innerHTML += `<h1 class="text-[30px] font-bold">Có ${storedItems.length} sản phẩm phù hợp</h1>`;

  storedItems.forEach((item) => {
    let productHTML = `
          <div onclick="viewProduct('${item.name}')" data-product="${item.name}" class="product bg-white p-4 shadow-md relative hover:bg-black hover:bg-opacity-50 transition duration-300 rounded-lg group">
            <div class="text-center relative">
              <img src="${item.src}" alt="favorite-images" class="w-full h-auto" />
              <button onclick="addToCart('${item.name}')" class="button-purchase bg-orange-500 hover:bg-orange-700 text-white w-32 h-10 rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" image="${item.src}" name="${item.name}" price="${item.price}">Mua hàng</button>
            </div>
            <div class="text-center">${item.name}</div>
            <div class="text-orange-500 text-center">${item.price}đ</div>
          </div>
  `;
    searchResults.innerHTML += productHTML;
  });
} else {
  searchResults.innerHTML = `<p class="text-center text-gray-500">Không tìm thấy sản phẩm nào phug hợp</p>`;
}

window.addEventListener("popstate", function () {
  localStorage.removeItem("searchResults");
});

const bar = document.querySelector(".menu");
const menu = document.querySelector(".render-menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
