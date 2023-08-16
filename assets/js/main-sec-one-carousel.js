(function() {
const contentCarousel = window.document.getElementsByClassName('main-sec-one-content')[0];
const carouselPrevious = window.document.getElementsByClassName('main-sec-one-previous')[0];
const carouselNext = window.document.getElementsByClassName('main-sec-one-next')[0];
const elementsCarousel = [
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
</div>`,
`<div class="carousel-content-all">
    <img class="carousel-img" src="assets/img/carrosselThree.png" alt="Pessoa sorrindo">

    <div class="carousel-content">
        <h1>O aprendizado vem até você</h1>
        <p>A promoção termina hoje. Alcance um mundo de conhecimento — em casa ou na rua. Cursos a partir de R$22,90 cada.</p>
    </div>
</div>`];
let intervalNextImageData;

for(let i = 0; i < elementsCarousel.length; i++) {
    contentCarousel.innerHTML += elementsCarousel[i];
}

const carouselContentAll = window.document.getElementsByClassName('carousel-content-all');
let currentIndex = 0;

carouselPrevious.addEventListener('click', previousElement);
carouselNext.addEventListener('click', nextElement);

function previousElement(value) {
    if(value !== -1) {
        contentCarousel.setAttribute('class', 'main-sec-one-content main-sec-one-content-remove-transition');
        contentCarousel.insertBefore(carouselContentAll[carouselContentAll.length -1], carouselContentAll[0]);
        nextElement(-1);
    }

    if(value !== -1) {
        setTimeout(() => {
            contentCarousel.setAttribute('class', 'main-sec-one-content');

            setTimeout(() => {
                previous();
            }, 10);
        }, 10);
    }

    if(value === -1) {
        previous();
    }

    function previous() {
        currentIndex = (currentIndex - 1 + carouselContentAll.length) % carouselContentAll.length;
        showSlide(currentIndex);
        clearInterval(intervalNextImageData);
        intervalNextImage();
    }

    carouselPrevious.removeEventListener('click', previousElement);

    setTimeout(() => {
        carouselPrevious.addEventListener('click', previousElement);
    }, 1000);
}

function nextElement(value) {
    currentIndex = (currentIndex + 1) % carouselContentAll.length;
    showSlide(currentIndex);
    clearInterval(intervalNextImageData);
    intervalNextImage();

    carouselNext.removeEventListener('click', nextElement);

    setTimeout(() => {
        if(value !== -1) {
            contentCarousel.setAttribute('class', 'main-sec-one-content main-sec-one-content-remove-transition');
            contentCarousel.appendChild(carouselContentAll[0]);
            previousElement(-1);
        }
        
        carouselNext.addEventListener('click', nextElement);

        setTimeout(() => {
            contentCarousel.setAttribute('class', 'main-sec-one-content');
        }, 5);
    }, 1000);
}

function showSlide(index) {
    contentCarousel.style.transform = `translateX(-${index * 100}%)`;
}

intervalNextImage();
function intervalNextImage() {
    intervalNextImageData = setInterval(() => {
        nextElement();
    }, 15000);
}
})();