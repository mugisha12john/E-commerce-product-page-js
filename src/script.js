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

// images
const image = [
  {
    id: 0,
    desktop: "images/image-product-1.jpg",
    mobile: "images/image-product-1-thumbnail.jpg",
  },
  {
    id: 1,
    desktop: "images/image-product-2.jpg",
    mobile: "images/image-product-2-thumbnail.jpg",
  },
  {
    id: 2,
    desktop: "images/image-product-3.jpg",
    mobile: "images/image-product-3-thumbnail.jpg",
  },
  {
    id: 3,
    desktop: "images/image-product-4.jpg",
    mobile: "images/image-product-4-thumbnail.jpg",
  },
];

let currentIndex = 0;
const mobileNextBtn = document.getElementById("mobile-next-btn");
const mobilePrevBtn = document.getElementById("mobile-prev-btn");
const heroSection = document.getElementById("hero-section");
function mobileNext() {
  currentIndex = (currentIndex + 1) % image.length;
}
function mobilePrev() {
  currentIndex = (currentIndex - 1) % image.length;
  if (currentIndex < 0) {
    return 0;
  } else {
    currentIndex;
  }
}
function showImage(index, screen) {
  heroSection.setAttribute("src", image[index][screen]);
}
mobileNextBtn.addEventListener("click", () => {
  mobileNext();
  showImage(currentIndex, "desktop");
});
mobilePrevBtn.addEventListener("click", () => {
  mobilePrev();
  showImage(currentIndex, "desktop");
});
