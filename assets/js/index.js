"use strict";

// const h1 = document.getElementById('heading');

// const h1 = document.querySelector('#heading');

// const list = [...document.getElementsByTagName('li')];

// const im = document.querySelector('article+article>img');
// const navi = document.querySelector('nav>ul');
// const text = document.querySelectorAll('main>article>p')

const imagesDB = [
  "https://friendofthesea.org/public/news/blue-ocean-28668-2560x1600.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg",
  "https://compass-ssl.xboxlive.com/assets/fd/df/fddfac17-875c-4910-ab1f-3f18dd9962b3.jpg?n=Parallax_Sections_Mobile_01.jpg",
];
const slider = new Slider(imagesDB);

const image = document.querySelector(".slide>img");
const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container>button"
);

function updateView() {
  image.setAttribute("src", slider.currentSlide);
}
updateView();

const btnSliderHandler = (direction = 'next') => () => {
slider.currentIndex = slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
updateView();
}

image.addEventListener("wheel", btnSliderHandler('wheel'));
nextBtn.addEventListener("click",btnSliderHandler('next'));

prevBtn.addEventListener("click", btnSliderHandler('prev'));

