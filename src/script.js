const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("toggle-menu-bar");
const closeBtn = document.getElementById("close-btn");
const cartBtn = document.getElementById("cart-btn");
const cartItems = document.getElementById("cart-items");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  document.body.style.overflow = "visible";
});
cartBtn.addEventListener("click", () => {
  if (cartItems.classList.toggle("hidden")) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
});
