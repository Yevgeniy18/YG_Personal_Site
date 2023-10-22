const contactMenu = document.querySelector(".header__wrapper__collapse__menu");
const arrow = document.querySelector(".btn").lastChild;
const bodyEl = document.getElementsByTagName("body")[0]
let index = 0;
let toggled = false;
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",

  // effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        }
    },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 2,

  // effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
        slidesPerView: 1,
        spaceBetweenSlides: 10
    },
    // when window width is <= 999px
    999: {
        slidesPerView: 2,
        spaceBetweenSlides: 10
    }
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



// Message on load 


window.addEventListener('load', () => {

  let popupElement = document.createElement('div')
  popupElement.classList.add('popup__wrapper')
  let messageContainer = document.createElement('div')
  messageContainer.classList.add('popup__wrapper__container')
  popupElement.appendChild(messageContainer)

  let messageTxt = document.createElement('div')
  messageTxt.classList.add('popup__wrapper__container__txt')
  messageTxt.textContent = "My site is still being completed! Meanwhile, have a look around :)"
  messageContainer.appendChild(messageTxt)


  let btn = document.createElement('button')
  btn.textContent = "Got it!"

  messageContainer.appendChild(btn)
  setTimeout(() => {
    bodyEl.appendChild(popupElement)
  }, 5000)
})

let btnPopup = document.querySelector('.popup__wrapper__container')




function waitForElementToExist(selector){
  return new Promise(resolve => {
    if(document.querySelector(selector)){
      return resolve (document.querySelector(selector))
    }


    const observer = new MutationObserver(mutations => {

      if(document.querySelector(selector)){
        observer.disconnect()
        resolve(document.querySelector(selector))
      }
    })

    observer.observe(document.body, {
      childList:true,
      subtree:true
    })
  })

}


 waitForElementToExist(".popup__wrapper__container > button").then((elt) =>{

elt.addEventListener('click', () => {

  document.querySelector(".popup__wrapper").style.display="none"
})
})