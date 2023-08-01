(function() {
const contentCarousel = window.document.getElementsByClassName('main-sec-one-content')[0];
const carouselPrevious = window.document.getElementsByClassName('main-sec-one-previous')[0];
const carouselNext = window.document.getElementsByClassName('main-sec-one-next')[0];
const elementsCarousel = ['<img class="carousel-img" src="assets/img/carrosselOne.jpg" alt="Certificado">', '<img class="carousel-img" src="assets/img/carrosselTwo.jpg" alt="Boneco subindo degraus">', '<img class="carousel-img" src="assets/img/carrosselThree.png" alt="Pessoa sorrindo">'];
let intervalNextImageData;

for(let i = 0; i < elementsCarousel.length; i++) {
    contentCarousel.innerHTML += elementsCarousel[i];
}

const carouselImg = window.document.getElementsByClassName('carousel-img');

carouselPrevious.addEventListener('click', previousElement);
carouselNext.addEventListener('click', nextElement);

function previousElement() {
    contentCarousel.insertBefore(carouselImg[carouselImg.length -1], carouselImg[0]);
    clearInterval(intervalNextImageData);
    intervalNextImage();
}

function nextElement() {
    contentCarousel.appendChild(carouselImg[0]);
    clearInterval(intervalNextImageData);
    intervalNextImage();
}

intervalNextImage();
function intervalNextImage() {
    intervalNextImageData = setInterval(() => {
        nextElement();
    }, 15000);
}
})();