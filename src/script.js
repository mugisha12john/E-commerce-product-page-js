const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("toggle-menu-bar");
const closeBtn = document.getElementById("close-btn");
const cartBtn = document.getElementById("cart-btn");
const cartItems = document.getElementById("cart-items");
const bgcolor = document.getElementById("bgToggle");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("close-lightbox");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  document.body.style.overflow = "visible";
});
cartBtn.addEventListener("click", () => {
  cartItems.classList.toggle("hidden");
});

bgcolor.addEventListener("click", () => {
  lightbox.classList.toggle("hidden");
});
closeLightbox.addEventListener("click", () => {
  lightbox.classList.toggle("hidden");
});
