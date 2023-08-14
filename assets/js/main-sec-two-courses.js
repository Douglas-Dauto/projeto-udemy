(function() {
const mainCourses = window.document.getElementsByClassName('main-sec-two-courses')[0];
const courses = [], sections = [];
let amountMaxContainerCourse = 15, idCourse = 1;
class Course {
    constructor(image, title, createdBy, starNote, popularity, valueMoney, classification) {
        Object.defineProperties(this, {
            id: {
                enumerable: true,
                configurable: false,
                value: idCourse++ * 1000,
            },
            
            image: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return image;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    image = value;
                }
            },

            title: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return title;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    title = value;
                }
            },

            createdBy: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return createdBy;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    createdBy = value;
                }
            },

            starNote: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return starNote;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    starNote = value;
                }
            },

            popularity: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return popularity;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    popularity = value;
                }
            },

            valueMoney: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return valueMoney;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    valueMoney = value;
                }
            },

            classification: {
                enumerable: true,
                configurable: false,

                get: function() {
                    return classification;
                },

                set: function(value) {
                    if(typeof value !== 'string') return;
                    classification = value;
                }
            },
        });

        Course.prototype.createCourse = function() {
            const containerCourse = window.document.createElement('div');
            containerCourse.setAttribute('class', 'container-course');
            containerCourse.innerHTML = `
            <img src="${this.image}" alt="">
            <h3>${this.title}</h3>
            <p>${this.createdBy}</p>
        
            <div>
                <p>${this.starNote}</p>
                <p>(${this.popularity})</p>
            </div>
        
            <p>R$ ${this.valueMoney}</p>`;
        
            if(this.classification === 'Classificação mais alta') {
                containerCourse.innerHTML += `<p class="classification--highest-rating">${this.classification}</p>`;
            } else if(this.classification === 'Mais vendidos') {
                containerCourse.innerHTML += `<p class="classification--best-sellers">${this.classification}</p>`;
            } else {
                containerCourse.innerHTML += `<p class="classification--none"></p>`;
            }
        
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
courses.push(new Course('assets/img/courses/JavaScript-do-básico-ao-avançado-c-Node.js e projetos.jpg', 'JavaScript do básico ao avançado (c/ Node.js e projetos)', 'Matheus Battisti', '4,7', '3.639', '189,90', 'Classificação mais alta'));
courses.push(new Course('assets/img/courses/Aprenda-JAVASCRIPT-em-7-dias+Projetos-Reais-2023.jpg', 'Aprenda JAVASCRIPT em 7 dias + Projetos Reais (2023)', 'Andre Lacono', '4,8', '1.308', '179,90'));
courses.push(new Course('assets/img/courses/Curso-Web-Moderno-Completo-com-JavaScript-2022+Projetos.jpg', 'Curso Web Moderno Completo com JavaScript 2022 + Projetos', 'Leonardo Moura', '4,7', '49.385', '239,90'));
courses.push(new Course('assets/img/courses/Curso-de-Javascript+Typescript+NodeJs-Programador-JS.jpg', 'Curso de Javascript + Typescript + NodeJs - Programador JS', 'Dener Troquatte', '4,9', '88', '79,90', 'Classificação mais alta'));
courses.push(new Course('assets/img/courses/JavaScript-Curso-COMPLETO-com-6-Projetos-REAIS.jpg', 'JavaScript - Curso COMPLETO com 6 Projetos REAIS', 'Hcode Treinamentos', '4,6', '10.289', '179,90'));
courses.push(new Course('assets/img/courses/Java-2022-COMPLETO-Do-Zero-ao-Profissional+Projetos.jpg', 'Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!', 'Leonardo Moura', '4,7', '20.107', '209,90'));
courses.push(new Course('assets/img/courses/Aprenda-JAVA-em-7-dias+Projetos-Reais-2023.jpg', 'Aprenda JAVA em 7 dias + Projetos Reais (2023)', 'Andre Lacono', '4,8', '338', '124,90'));
courses.push(new Course('assets/img/courses/Programação-em-Java-do- básico-ao-avançado.jpg', 'Programação em Java do básico ao avançado', 'Geek University', '4,5', '2.700', '179,90'));
courses.push(new Course('assets/img/courses/Git-e-Github-Essencial-para-o-Desenvolvedor.jpg', 'Git e Github Essencial para o Desenvolvedor', 'Geek University', '4,8', '1.985', '179,90'));
courses.push(new Course('assets/img/courses/Dominando-Git-e-GitHub-Do-iniciante-ao-expert.jpg', 'Dominando Git e GitHub - Do iniciante ao expert', 'João Rubens Marchete Filho', '4,6', '1.523', '134,90'));
courses.push(new Course('assets/img/courses/Curso-React+Redux-Fundamentos-e-2-Apps-do-Absoluto-ZERO.jpg', 'Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!', 'Leonardo Moura', '4,8', '11.786', '179,90', 'Classificação mais alta'));
courses.push(new Course('assets/img/courses/Next.js-e-React-Curso-Completo-Aprenda-com-Projetos.jpg', 'Next.js e React - Curso Completo - Aprenda com Projetos', 'Leonardo Moura', '4,7', '1.885', '179,90'));
courses.push(new Course('assets/img/courses/Bancos-de-Dados-SQL-e-NoSQL-do-básico-ao-avançado.jpg', 'Bancos de Dados SQL e NoSQL do básico ao avançado', 'Geek University', '4,7', '2.811', '179,90', 'Classificação mais alta'));
courses.push(new Course('assets/img/courses/Bancos-de-dados-relacionais-SQL-do zero ao avançado.jpg', 'Bancos de dados relacionais - SQL (do zero ao avançado)', 'Cezar Augusto Crummenauer', '4,8', '52', '159,90'));
courses.push(new Course('assets/img/courses/Banco-de-Dados-Da-modelagem-à-SQL-com-PostgreSQL.jpg', 'Banco de Dados: Da modelagem à SQL com PostgreSQL', 'Tadeu Pereira', '4,9', '118', '94,90', 'Classificação mais alta'));
class Section {
    constructor(id, title, key) {
        Object.defineProperty(this, 'id', {
            enumerable: true,
            value: id,
            writable: false,
            configurable: false,
        });

        Object.defineProperty(this, 'title', {
            enumerable: true,
            configurable: false,

            get: function() {
                return title;
            },

            set: function(value) {
                if(typeof value !== 'string') return;
                title = value;
            }
        });

        Object.defineProperty(this, 'key', {
            enumerable: true,
            configurable: false,

            get: function() {
                return key;
            },

            set: function(value) {
                if(typeof value !== 'string') return;
                key = value;
            }
        });

        Object.defineProperty(this, 'addCourses', {
            enumerable: true,
            value: function() {
                const containerCourses = window.document.getElementsByClassName('container-courses');
                const coursesIndex = [];
    
                if(this.key === undefined) {
                    let courseIndex = Math.floor((Math.random() * (courses.length)));
    
                    for(let i = 0; i < courses.length; i++) {
                        while(coursesIndex.indexOf(courseIndex) >= 0) {
                            courseIndex = Math.floor((Math.random() * (courses.length)));
                        }
    
                        if(i < amountMaxContainerCourse) {
                            containerCourses[id].appendChild(courses[courseIndex].createCourse());
                            coursesIndex[i] = courseIndex;
                        }
                    }
                } else {
                    let count = 0;
    
                    for(let i = 0; i < courses.length; i++) {
                        if(courses[i].title.toLowerCase().includes(this.key.toLowerCase()) && count < amountMaxContainerCourse) {
                            containerCourses[id].appendChild(courses[i].createCourse());
                            count++;
                        }
                    }
                }
            },
            writable: false,
            configurable: false
        });

        Section.prototype.addSection = function() {
            const section = window.document.createElement('section');
            section.setAttribute('class', `section-main-courses`);
            section.innerHTML += `
            <h2>${this.title}</h2>

            <div class="container-courses-carousel">
                <div class="main-sec-two-next"></div>
                <div class="container-courses"></div>
                <div class="main-sec-two-previous"></div>
            </div>`;
            mainCourses.appendChild(section);
        }
    }
}

sections.push(new Section(0, 'Recomendados para você'));
sections.push(new Section(1, 'Principais cursos em destaque'));
sections.push(new Section(2, 'Principais cursos de java', 'java '));
sections.push(new Section(3, 'Principais cursos de javascript', 'javascript'));

for(let i in sections) {
    sections[i].addSection();
    sections[i].addCourses();
}

const coursesCarouselNext = window.document.getElementsByClassName('main-sec-two-next');
const coursesCarouselPrevious = window.document.getElementsByClassName('main-sec-two-previous');
let valueCarouselElement = [], containerCourseCarousel, numberPrimaryElements = 1, widthContainerCourse = Number(window.document.getElementsByClassName('container-courses')[0].getBoundingClientRect().width.toString()), numberInnerWidth = window.innerWidth;
let valueContentCourse = 0, control = false;

setInterval(() => {
    for(let i = 0; i < sections.length; i++) {
        if(window.innerWidth !== numberInnerWidth && window.document.querySelectorAll('.section-main-courses .container-courses')[i].childElementCount >= 5) {
            widthContainerCourse = Number(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width.toString());
        }
    }

    if(window.innerWidth !== numberInnerWidth) {
        for(let i = 0; i < sections.length; i++) {
            valueCarouselElement[i] = 0;
            window.document.getElementsByClassName('container-course--primary')[i].style.marginLeft = `-${valueCarouselElement[i]}px`;

            setTimeout(() => {
                updateNavigation(i);
            }, 1000);
        }

        numberInnerWidth = window.innerWidth;
    }
}, 100);

for(let i = 0; i < sections.length; i++) {
    window.document.getElementsByClassName('container-course')[numberPrimaryElements -1].setAttribute('class', 'container-course container-course--primary');

    updateNavigation(i);
    function updateNavigation(i) {
        if(window.document.getElementsByClassName('container-course container-course--primary')[i].getBoundingClientRect().right -20 > window.screenLeft) {
            coursesCarouselPrevious[i].setAttribute('class', 'main-sec-two-previous main-sec-two-previous--hidden');
        } else {
            coursesCarouselPrevious[i].setAttribute('class', 'main-sec-two-previous');
        }
        
        valueContentCourse = 0;

        for(let j = 0; j <= i; j++) {
            valueContentCourse += Number(window.document.getElementsByClassName('container-courses')[j].childElementCount.toString());

            if(j === i) {
                valueContentCourse -= 1;
            }
        }

        window.document.getElementsByClassName('container-course')[valueContentCourse].setAttribute('class', 'container-course container-course--end');

        if(window.document.querySelectorAll('.section-main-courses .container-courses')[i].childElementCount <= 5 && window.innerWidth >= 1360 || control === true) {
            coursesCarouselNext[i].setAttribute('class', 'main-sec-two-next main-sec-two-next--hidden');
            control = false;
        } else {
            coursesCarouselNext[i].setAttribute('class', 'main-sec-two-next');
        }
    }

    valueCarouselElement.push(0);

    coursesCarouselNext[i].addEventListener('click', executeCoursesCarouselNext);

    function executeCoursesCarouselNext() {
        selectContainerCourseCarousel();

        if(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 500 || window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width === 420) {
            valueCarouselElement[i] += window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 20.1;
        } else {
            valueCarouselElement[i] += window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 15.9;
        }
        
        containerCourseCarousel.style.marginLeft = `-${valueCarouselElement[i]}px`;

        setTimeout(() => {
            updateNavigation(i);
        }, 900);

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
            valueCarouselElement[i] -= window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 20;
        } else {
            valueCarouselElement[i] -= window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width + 15.8;
        }

        if(valueCarouselElement[i] < 0) {
            valueCarouselElement[i] = 0;
        }

        containerCourseCarousel.style.marginLeft = `-${valueCarouselElement[i]}px`

        setTimeout(() => {
            updateNavigation(i);
        }, 900);

        coursesCarouselPrevious[i].removeEventListener('click', executeCoursesCarouselPrevious);
        
        setTimeout(() => {
            coursesCarouselPrevious[i].addEventListener('click', executeCoursesCarouselPrevious);
        }, 1000);
    }
    
    function selectContainerCourseCarousel() {
        containerCourseCarousel = window.document.getElementsByClassName('container-course--primary')[i];
    }

    numberPrimaryElements += window.document.querySelectorAll('.section-main-courses .container-courses')[i].childElementCount;
}

setInterval(() => {
    const containerCourses = window.document.getElementsByClassName('container-courses');
    const containerCourseCarousel = window.document.getElementsByClassName('container-course--primary');

    for(let i = 0; i < containerCourses.length; i++) {
        if(window.innerWidth >= 1359) {
            if(Number(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width.toString()) < Number(widthContainerCourse) && window.document.querySelectorAll('.section-main-courses .container-courses')[i].childElementCount > 5) {
                configContainerCarousel(i);
            }
        } else {
            if(Number(window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width.toString()) < Number(widthContainerCourse)) {
                configContainerCarousel(i);
            }
        }
    }

    function configContainerCarousel(i) {
        control = true;
        containerCourseCarousel[i].setAttribute('class', 'container-course container-course--primary container-course-primary--transition-none');
        valueCarouselElement[i] -= Number(widthContainerCourse) - window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width;
        containerCourseCarousel[i].style.marginLeft = `-${valueCarouselElement[i]}px`;
        containerCourseCarousel[i].setAttribute('class', 'container-course container-course--primary');
    }
}, 5);
})();