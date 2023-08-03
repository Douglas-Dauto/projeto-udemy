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
courses.push(new Course('assets/img/courses/Curso-Design-Gráfico-COMPLETO-10-Cursos-do-Zero-ao-Avançado.jpg', 'Curso Design Gráfico COMPLETO 10 Cursos do Zero ao Avançado', 'André Fontenelle', '4,6', '39.154', '169,90', 'Mais vendidos'));

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
let valueCarouselElement = [], containerCourseCarousel;

for(let i = 0; i < sections.length; i++) {
    valueCarouselElement.push(0);

    coursesCarouselNext[i].addEventListener('click', () => {
        if(i === 0) {
            containerCourseCarousel = window.document.getElementsByClassName('container-course')[0];
        } else if(i === 1) {
            containerCourseCarousel = window.document.getElementsByClassName('container-course')[6];
        }

        valueCarouselElement[i] += 95;
        containerCourseCarousel.style.marginLeft = `-${valueCarouselElement[i]}vw`;
    });
    
    coursesCarouselPrevious[i].addEventListener('click', () => {
        if(i === 0) {
            containerCourseCarousel = window.document.getElementsByClassName('container-course')[0];
        } else if(i === 1) {
            containerCourseCarousel = window.document.getElementsByClassName('container-course')[6];
        }

        valueCarouselElement[i] -= 95;
    
        if(valueCarouselElement[i] < 0) {
            valueCarouselElement[i] = 0;
        }
    
        containerCourseCarousel.style.marginLeft = `-${valueCarouselElement[i]}vw`;
    });
}
})();