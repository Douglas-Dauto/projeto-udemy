(function() {
const mainCourses = window.document.getElementsByClassName('main-sec-two-courses')[0];
const courses = [];
const sections = [];

class Course {
    constructor(image, name, createdBy, starNote, popularity, valueMoney, classification) {
        this.image = image;
        this.name = name;
        this.createdBy = createdBy;
        this.starNote = starNote;
        this.popularity = popularity;
        this.valueMoney = valueMoney;
        this.classification = classification;

        this.createCourse = function() {
            const containerCourse = window.document.createElement('div');
            containerCourse.setAttribute('class', 'container-course');
            containerCourse.innerHTML = `
            <img src="${this.image}" alt="">
            <h3>${this.name}</h3>
            <p>${this.createdBy}</p>

            <div>
                <p>${this.starNote}</p>
                <p>(${this.popularity})</p>
            </div>

            <p>R$ ${this.valueMoney}</p>
            <p class="classification--best-sellers">${this.classification}</p>`;

            return containerCourse;
        }
    }
}

courses.push(new Course('assets/img/courses/curso-de-JavaScript-e-TypeScript-do-básico-ao-avançado.jpg', 'Curso de JavaScript e TypeScript do básico ao avançado', 'Luiz Otávio Miranda, Tales Calogi Malaquias', '4,8', '19.175', '199,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/C-Sharp-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg', 'C# COMPLETO Programação Orientada a Objetos + Projetos', 'Nelio Alves', '4,8', '25.932', '189,90', 'Classificação mais alta'));
courses.push(new Course('assets/img/courses/Java-COMPLETO-2023-Programação-Orientada-a-Objetos-Projetos.jpg', 'Java COMPLETO 2023 Programação Orientada a Objetos +Projetos', 'Nelio Alves', '4,8', '44.719', '169,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/O-curso-completo-de-Banco-de-Dados-e-SQL-sem mistérios.jpg', 'O curso completo de Banco de Dados e SQL, sem mistérios!', 'Felipe Mafra', '4,7', '37.665', '179,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Curso-Design-Gráfico-COMPLETO-10-Cursos-do-Zero-ao-Avançado.jpg', 'Curso Design Gráfico COMPLETO 10 Cursos do Zero ao Avançado', 'André Fontenelle', '4,6', '39.154', '169,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Pixel-Art-do-zero-ao-avançado.jpg', 'Pixel Art do zero ao avançado', 'Jeferson Dias', '4,6', '589', '169,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Modelagem-de-Dados-UML-(Análise&Projeto Orientado a Objetos).jpg', 'Modelagem de Dados UML (Análise&Projeto Orientado a Objetos)', 'Nelio Alves', '4,8', '2.845', '169,90', 'Classificação mais alta'));
courses.push(new Course('assets/img/courses/Criação-de-Apps-Android-iOS-Web-com-Flutter.jpg', 'Criação de Apps Android/iOS/Web com Flutter', 'Daniel Ciolfi, Ewerton Dutra', '4,6', '15.808', '189,90'));
courses.push(new Course('assets/img/courses/Power-BI-Completo-Do-Básico-ao-Avançado.jpg', 'Power BI Completo - Do Básico ao Avançado', 'João Paulo de Lira', '4,7', '64.650', '199,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Curso-de-React.Js-e-Next.Js-Intermediário e Avançado.jpg', 'Curso de React.Js e Next.Js (Intermediário e Avançado)', 'Luiz Otávio Miranda', '4,7', '3.627', '169,90'));
courses.push(new Course('assets/img/courses/Angular-The-Complete-Guide-2023 Edition.jpg', 'Angular - The Complete Guide (2023 Edition)', 'Maximilian Schwarzmuller', '4,6', '188.665', '169,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Bootstrap-5-Curso-Completo-e-Direto-ao-Ponto.jpg', 'Bootstrap 5: Curso Completo e Direto ao Ponto', 'Diego Mariano', '4,0', '1.179', '179,90'));
courses.push(new Course('assets/img/courses/Understanding-TypeScript.jpg', 'Understanding TypeScript', 'Maximilian Schwarzmuller', '4,6', '44.269', '199,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Learn-to-Code-with-Ruby.jpg', 'Learn to Code with Ruby', 'Boris Paskhaver', '4,7', '5.568', '179,90', 'Mais vendidos'));
courses.push(new Course('assets/img/courses/Git-Completo-Do-Básico-ao-Avançado.jpg', 'Git Completo: Do Básico ao Avançado', 'Gabriel Ferrari', '4,8', '4.173', '199,90', 'Classificação mais alta'));

class Section {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        this.addSection = function() {
            const section = window.document.createElement('section');
            section.setAttribute('class', `section-main-courses`);
            section.innerHTML += `
            <h2>${this.name}</h2>

            <div class="container-courses-carousel">
                <div class="main-sec-two-next"></div>
                <div class="container-courses"></div>
                <div class="main-sec-two-previous"></div>
            </div>`;
            mainCourses.appendChild(section);
        }

        this.addCourses = function() {
            const containerCourses = window.document.getElementsByClassName('container-courses');

            for(let i in courses) {
                containerCourses[id].appendChild(courses[i].createCourse());
            }
        }
    }
}

sections.push(new Section(0, 'Recomendados para você'));
sections.push(new Section(1, 'Principais cursos em português'));

for(let i in sections) {
    sections[i].addSection();
    sections[i].addCourses();
}

const coursesCarouselNext = window.document.getElementsByClassName('main-sec-two-next');
const coursesCarouselPrevious = window.document.getElementsByClassName('main-sec-two-previous');
let valueCarouselElement = [], containerCourseCarousel, amountContainerCourse = 15;

for(let i = 0; i < sections.length; i++) {
    updateNavigation(i);
    function updateNavigation(i) {
        if(i === 0?window.document.getElementsByClassName('container-course')[i].getBoundingClientRect().left > window.screenLeft:window.document.getElementsByClassName('container-course')[i * amountContainerCourse].getBoundingClientRect().left > window.screenLeft) {
            coursesCarouselPrevious[i].setAttribute('class', 'main-sec-two-previous main-sec-two-previous--hidden');
        } else {
            coursesCarouselPrevious[i].setAttribute('class', 'main-sec-two-previous');
        }

        if(i === 0?window.document.getElementsByClassName('container-course')[amountContainerCourse -1].getBoundingClientRect().right < window.innerWidth:window.document.getElementsByClassName('container-course')[(i + 1) * amountContainerCourse -1].getBoundingClientRect().right < window.innerWidth) {
            coursesCarouselNext[i].setAttribute('class', 'main-sec-two-next main-sec-two-next--hidden');
        } else {
            coursesCarouselNext[i].setAttribute('class', 'main-sec-two-next');
        }
    }

    valueCarouselElement.push(0);

    coursesCarouselNext[i].addEventListener('click', executeCoursesCarouselNext);

    function executeCoursesCarouselNext() {
        selectContainerCourseCarousel();

        if(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 1020 && window.document.getElementsByClassName('container-course')[(i + 1) * amountContainerCourse -4].getBoundingClientRect().right < window.innerWidth) {
            valueCarouselElement[i] += 780;
        } else if(window.document.getElementsByClassName('container-course')[(i + 1) * amountContainerCourse -2].getBoundingClientRect().right < window.innerWidth) {
            if(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 420) {
                valueCarouselElement[i] += 237;
            } else {
                valueCarouselElement[i] += 275;
            }
        } else {
            if(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 500 || window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 420) {
                valueCarouselElement[i] += window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 17;
            } else {
                valueCarouselElement[i] += window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 15.8;
            }
        }

        containerCourseCarousel.style.marginLeft = `-${valueCarouselElement[i]}px`;

        setTimeout(() => {
            updateNavigation(i);
        }, 800);

        coursesCarouselNext[i].removeEventListener('click', executeCoursesCarouselNext);
        
        setTimeout(() => {
            coursesCarouselNext[i].addEventListener('click', executeCoursesCarouselNext);
        }, 1000);
    }
    
    coursesCarouselPrevious[i].addEventListener('click', executeCoursesCarouselPrevious);

    function executeCoursesCarouselPrevious() {
        selectContainerCourseCarousel();
        
        if(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 500) {
            valueCarouselElement[i] -= window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 20;
        } else if(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 420) {
            valueCarouselElement[i] -= window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 21.4;
        } else {
            valueCarouselElement[i] -= window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 15.8;
        }

        if(valueCarouselElement[i] < 0) {
            valueCarouselElement[i] = 0;
        }

        containerCourseCarousel.style.marginLeft = `-${valueCarouselElement[i]}px`

        setTimeout(() => {
            updateNavigation(i);
        }, 800);

        coursesCarouselPrevious[i].removeEventListener('click', executeCoursesCarouselPrevious);
        
        setTimeout(() => {
            coursesCarouselPrevious[i].addEventListener('click', executeCoursesCarouselPrevious);
        }, 1000);
    }

    function selectContainerCourseCarousel() {
        i === 0?containerCourseCarousel = window.document.getElementsByClassName('container-course')[i]:containerCourseCarousel = window.document.getElementsByClassName('container-course')[i * amountContainerCourse];
    }
}
})();