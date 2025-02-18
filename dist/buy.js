let itemInBuyPage = document.querySelector("#item");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach((item, index) => {
  let renderItem = `
              <div class="flex items-center justify-between gap-4">
                <div class="text-sm font-normal text-gray-500">${
                  item.name
                }</div>
                <div class="text-sm font-medium">${
                  item.price * item.quantity
                }VNĐ</div>
              </div>
`;
  itemInBuyPage.innerHTML += renderItem;
});

let total = document.querySelector("#total");
sum = 0;
cart.forEach((item, index) => {
  sum += item.price * item.quantity;
});

total.innerHTML = sum + "VNĐ";
