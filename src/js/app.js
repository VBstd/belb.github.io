// const burger = document.querySelector('.burger')
// burger.addEventListener('click',()=>{
//     burger.classList.toggle('active')
// });

const burgerBtn = document.getElementById('burgerBtn')
const burgerMenu = document.getElementById('burgerMenu')
const linksParent = document.querySelector('.header__burger')

const burgerOpen = () => {
    burgerBtn.classList.toggle('active')
    burgerMenu.classList.toggle('active__menu')
}

const burgerClose = () => {
    burgerBtn.classList.remove('active')
    burgerMenu.classList.remove('active__menu')
}

burgerBtn.addEventListener('click', burgerOpen)

linksParent.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'A') {
        burgerClose()
    }

})

linksParent.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'BUTTON') {
        burgerClose()
    }

})

const swiper = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
  });
