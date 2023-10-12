const contactMenu = document.querySelector('.header__wrapper__collapse__menu')

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


const contact = document.getElementById('contact')

contact.addEventListener('click', (e) => {

  if(contactMenu.classList.contains('.header__wrapper__collapse__menu__show')){
    contactMenu.classList.remove('.header__wrapper__collapse__menu__show')
  } else {
    contactMenu.classList.toggle('header__wrapper__collapse__menu__show')
  }



})