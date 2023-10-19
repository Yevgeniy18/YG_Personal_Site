const contactMenu = document.querySelector(".header__wrapper__collapse__menu");
const arrow = document.querySelector(".btn").lastChild;

console.log(arrow);
let index = 0;
let toggled = false;
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,

  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 3,

  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-2 .swiper-button-next",
    prevEl: ".swiper-2 .swiper-button-prev",
  },
});

const contact = document.getElementById("contact");

contact.addEventListener("click", (e) => {
  if (index % 2 === 0) {
    toggled = true;
    index++;
  } else {
    toggled = false;
    index++;
  }

  if (
    contactMenu.classList.contains(".header__wrapper__collapse__menu__show")
  ) {
    contactMenu.classList.remove(".header__wrapper__collapse__menu__show");
  } else {
    contactMenu.classList.toggle("header__wrapper__collapse__menu__show");
    if (contactMenu.classList.contains("header__wrapper__collapse__menu")) {
      contactMenu.style.opacity = 1;
    }
  }

  arrow.style.transform = toggled ? "rotate(0deg)" : "rotate(-90deg)";
});

// Closing menu outside

document.addEventListener("click", (e) => {
  if (!e.target.parentElement.classList.contains("btn")) {
    let menuEl = document.querySelector(".header__wrapper__collapse__menu");

    if (menuEl.classList.contains("header__wrapper__collapse__menu__show")) {
      menuEl.classList.remove("header__wrapper__collapse__menu__show");
      arrow.style.transform = "rotate(-90deg)";
    }
  }
});
