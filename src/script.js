const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("toggle-menu-bar");
const closeBtn = document.getElementById("close-btn");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  document.body.style.overflow = "visible";
});
