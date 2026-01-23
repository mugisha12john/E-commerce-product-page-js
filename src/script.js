const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("toggle-menu-bar");
const closeBtn = document.getElementById("close-btn");
const cartBtn = document.getElementById("cart-btn");
const cartItems = document.getElementById("cart-items");
const bgcolor = document.querySelectorAll("#bgToggle button");
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
bgcolor.forEach((img, i) => {
  img.addEventListener("click", () => {
    lightbox.classList.toggle("hidden");
    showImageLightBg(i, "desktop");
  });
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

// increment or decrement cart
const minusBtn = document.getElementById("minus-btn");
const result = document.getElementById("result");
const plusBtn = document.getElementById("plus-btn");
const addCart = document.getElementById("add-cart");

let currentCart = 0;
minusBtn.addEventListener("click", () => {
  currentCart -= 1;
  if (currentCart < 0) {
    alert("You can not have negative quantity of an item");
    return;
  }
  result.innerText = currentCart;
});
plusBtn.addEventListener("click", () => {
  currentCart += 1;
  result.innerText = currentCart;
});

// add in cart
const productName = document.getElementById("product-name").textContent;
const productPrice = document.getElementById("product-price").textContent;
const cartTotal = document.getElementById("cart-total");
let cart = [];
function UpdateCartItem() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="bg-white w-[360px] h-80 p-4 rounded-2xl">
        <h1 class="capitalize font-display font-bold text-xl mt-5">cart</h1>
        <h4 class="mt-10 text-center text-gray-500">Your cart is empty!</h4>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = `
    <div class="bg-white w-[360px] p-4 rounded-2xl">
      <h1 class="capitalize font-display font-bold text-xl mt-5">cart</h1>

      ${cart
        .map(
          (item) => `
          <div class="mt-10 flex justify-between items-center gap-5">
            <img
              src="images/image-product-1-thumbnail.jpg"
              class="size-14"
              alt=""
            />

            <div>
              <h1 class="font-display text-xl capitalize text-gray-500">
                ${item.product}
              </h1>

              <p class="text-gray-500 text-xl lg:text-sm font-display">
                $${item.price} x ${item.times}
                <b class="text-black font-bold ml-4">$${(item.price * item.times).toFixed(2)}</b>
              </p>
            </div>
            <button id="delete-cart">
            <img
              src="images/icon-delete.svg"
              class="size-6 lg:size-4 hover:cursor-pointer"
              alt=""
            />
            </button>
          </div>
        `,
        )
        .join("")}

      <button
        class="bg-amber-600 p-2 w-full text-xl lg:text-sm font-semibold capitalize font-display mt-10 rounded-xl"
      >
        checkout
      </button>
    </div>
  `;
}

UpdateCartItem();
addCart.addEventListener("click", () => {
  let product = productName.trim();
  let total = Number(result.textContent.trim()) || 0;

  let price = Number(productPrice.trim().slice(1));
  let existingProduct = cart.find((item) => item.product === product);
  if (total == 0) {
    alert("You can not add zero item ");
    return;
  }
  if (existingProduct) {
    cartTotal.classList.remove("hidden");
    cartTotal.innerText = total;
    existingProduct.times = total;
    UpdateCartItem();
  } else {
    cartTotal.classList.remove("hidden");
    cartTotal.innerText = total;
    cart.push({ product, times: total, price });
    UpdateCartItem();
  }
});

const ligthPrev = document.getElementById("light-prev");
const lightNext = document.getElementById("light-next");
const lightBg = document.getElementById("light-bg");
function showImageLightBg(index, screen) {
  lightBg.setAttribute("src", image[index][screen]);
}
ligthPrev.addEventListener("click", () => {
  mobilePrev();
  showImageLightBg(currentIndex, "desktop");
});
lightNext.addEventListener("click", () => {
  mobileNext();
  showImageLightBg(currentIndex, "desktop");
});

const activeLightbox = document.querySelectorAll(".ligthbox-change-bg");
activeLightbox.forEach((element) => {
  element.addEventListener("click", () => {
    showImageLightBg(element.classList[1] - 1, "desktop");
  });
});

