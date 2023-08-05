(function() {
const contentCarousel = window.document.getElementsByClassName('main-sec-one-content')[0];
const carouselPrevious = window.document.getElementsByClassName('main-sec-one-previous')[0];
const carouselNext = window.document.getElementsByClassName('main-sec-one-next')[0];
const elementsCarousel = [
`<div class="carousel-content-all">
    <img class="carousel-img" src="assets/img/carrosselThree.png" alt="Pessoa sorrindo">

    <div class="carousel-content">
        <h1>O aprendizado vem até você</h1>
        <p>A promoção termina hoje. Alcance um mundo de conhecimento — em casa ou na rua. Cursos a partir de R$22,90 cada.</p>
    </div>
</div>`,
`<div class="carousel-content-all">
    <img class="carousel-img" src="assets/img/carrosselOne.jpg" alt="Certificado">

    <div class="carousel-content">
        <h1>Prepare-se para sua certificação de TI</h1>
        <p>Explore um futuro em TI. Comece a estudar para tirar a certificação AWS, CompTIA A+ e muito mais.</p>
    </div>
</div>`, 
`<div class="carousel-content-all">
    <img class="carousel-img" src="assets/img/carrosselTwo.jpg" alt="Boneco subindo degraus">

    <div class="carousel-content">
        <h1>Devagar e sempre</h1>
        <p>Tente estudar por 5 a 10 minutos por dia. Continue seu curso e alcance todo o seu potencial.</p>
    </div>
</div>`];
let intervalNextImageData;

for(let i = 0; i < elementsCarousel.length; i++) {
    contentCarousel.innerHTML += elementsCarousel[i];
}

const carouselContentAll = window.document.getElementsByClassName('carousel-content-all');

carouselPrevious.addEventListener('click', previousElement);
carouselNext.addEventListener('click', nextElement);

function previousElement() {
    contentCarousel.insertBefore(carouselContentAll[carouselContentAll.length -1], carouselContentAll[0]);
    clearInterval(intervalNextImageData);
    intervalNextImage();
}

function nextElement() {
    contentCarousel.appendChild(carouselContentAll[0]);
    clearInterval(intervalNextImageData);
    intervalNextImage();
}

// intervalNextImage();
// function intervalNextImage() {
//     intervalNextImageData = setInterval(() => {
//         nextElement();
//     }, 15000);
// }
})();