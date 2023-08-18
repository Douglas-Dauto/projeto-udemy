import {coursesArray} from './main-sec-two-courses.js';

(function() {
const elements = window.document.querySelectorAll('.container-header__sec-one-ul li');
const containerHidden = document.createElement('div');
const textContentOld = [], control = [];
let mouseOut = true;

for(let i = 2; i < elements.length; i++) {
    control.push(true);

    elements[i].addEventListener('mouseenter', () => {
        if(control[i - 2]) {
            textContentOld[i] = elements[i].textContent;
            containerHidden.setAttribute('class', 'container-header__container-hidden');
            containerHidden.innerHTML = `<p>${i === 2?'Sua equipe pode ter acesso a mais de 22.000 cursos de destaque da Udemy a qualquer hora, em qualquer lugar.':i === 3?'Transforme o que você sabe em oportunidade e alcance milhões de alunos do mundo todo.':''}</p><a href="#">${i === 2?'Testar Udemy Business':i === 3?'Saiba mais':'Acessar meu aprendizado'}</a>`;
            elements[i].appendChild(containerHidden);

            containerHidden.addEventListener('mouseenter', () => {
                mouseOut = false;
            });

            setInterval(() => {
                if(mouseOut === false) {
                    containerHiddenMoveOut();
                }
            }, 100);

            function containerHiddenMoveOut() {
                containerHidden.removeEventListener('mouseout', containerHiddenCallbackOne);
                containerHidden.addEventListener('mouseout', containerHiddenCallbackOne);

                function containerHiddenCallbackOne() {
                    containerHidden.addEventListener('mouseout', containerHiddenCallback);

                    function containerHiddenCallback() {
                        elements[i].innerHTML = textContentOld[i];
                        control[i - 2] = true;
                        mouseOut = true;
                    }

                    setTimeout(() => {
                        containerHidden.removeEventListener('mouseout', containerHiddenCallback);
                        mouseOut = false;
                    }, 1000)
                }
            }
        }

        control[i - 2] = false;
    });

    elements[i].addEventListener('mouseout', () => {
        setTimeout(() => {
            if(mouseOut) {
                elements[i].innerHTML = textContentOld[i];
                control[i - 2] = true;
            }
        }, 1000);
    });
}

const containerHeader = window.document.getElementsByClassName('container-header')[0];
const elementList = window.document.createElement('div');
const elementSearch = window.document.createElement('img');
const imgLogo = window.document.querySelectorAll('.container-header > img')[0];
const containerIcons = window.document.querySelector('.container-header__sec-two > div');
const imgCart = window.document.querySelector('.container-header__sec-two > div img:nth-child(2)');
let controlMenu = true;

setInterval(() => {
    if(window.innerWidth <= 840 && controlMenu) {
        elementList.innerHTML = `<img src="assets/img/icon/list.svg" alt="Menu">`;
        containerHeader.appendChild(elementList);
        containerHeader.insertBefore(elementList, imgLogo);
        elementSearch.setAttribute('src', 'assets/img/icon/search.svg');
        elementSearch.setAttribute('alt', 'Pesquisa');
        containerIcons.appendChild(elementSearch);
        containerIcons.insertBefore(elementSearch, imgCart);
        controlMenu = !controlMenu;
    }

    if(window.innerWidth > 840 && !controlMenu) {
        containerHeader.removeChild(elementList);
        containerIcons.removeChild(elementSearch);
        controlMenu = !controlMenu;
    }
}, 10);

const courses = coursesArray;
const coursesIndex = [];
let controlMenuCourse = true;

document.addEventListener('DOMContentLoaded', () => {
    const svgHeader = window.document.getElementsByClassName('container-header-icon');
    const containerHeader = window.document.querySelectorAll('.container-header__sec-two .container-header-sec-two__content-one div');
    let contentIcon = window.document.createElement('div');

    contentIcon.setAttribute('class', 'container-content-icon');

    for(let i = 0; i < svgHeader.length; i++) {
        const containerList = window.document.getElementsByClassName('container-header__sec-one-ul')[0];
        const secOneCarousel = window.document.getElementsByClassName('main-sec-one-carousel')[0];
        const sectionMain = window.document.getElementsByClassName('section-main-courses')[0];
        const elementIcon = window.document.querySelectorAll('.container-header-sec-two__content-one div iframe');
        const containerHeaderTwo = window.document.getElementsByClassName('container-header-two')[0];
        const containerHeaderUser = window.document.getElementsByClassName('container-header__user')[0];

        containerList.addEventListener('mouseenter', () => removeElement());
        secOneCarousel.addEventListener('mouseenter', () => removeElement());
        sectionMain.addEventListener('mouseenter', () => removeElement());
        containerHeaderTwo.addEventListener('mouseenter', () => removeElement());
        containerHeaderUser.addEventListener('mouseenter', () => removeElement());

        for(let i = 0; i < elementIcon.length; i++) {
            switch(i) {
                case 0:
                    elementIcon[i].addEventListener('mouseenter', () => removeElement(false));
                    break;
                default:
                    elementIcon[i].addEventListener('mouseenter', () => removeElement());
            }
            
        }

        function removeElement(value = true) {
            const svgContent = svgHeader[i].contentDocument;
            const element = svgContent.querySelector('.bi');
            element.setAttribute('fill', 'black');
            containerHeader[i].removeChild(contentIcon);

            if(value) {
                controlMenuCourse = !controlMenuCourse;
            }
        }

        svgHeader[i].addEventListener('mouseenter', () => {
            const svgContent = svgHeader[i].contentDocument;
            const element = svgContent.querySelector('.bi');
            element.setAttribute('fill', '#5624D0');
            element.setAttribute('style', 'cursor: pointer;');

            switch(i) {
                case 0:
                    if(controlMenuCourse) {
                    
                        contentIcon.innerHTML = '';

                        let courseIndex = Math.floor((Math.random() * (courses.length)));

                        for(let i = 0; i < courses.length -1; i++) {
                            while(coursesIndex.indexOf(courseIndex) >= 0) {
                                courseIndex = Math.floor((Math.random() * (courses.length)));
                            }

                            contentIcon.innerHTML += `<div class="container-content-icon__content">
                                                        <div>
                                                            <img src="${courses[courseIndex].image}" alt="">
                                                            <div>
                                                                <h4>${courses[courseIndex].title}</h4>
                                                                <p>${courses[courseIndex].createdBy}</p>
                                                                <p class="content__price">R$${courses[courseIndex].valueMoney}</p>
                                                            </div>
                                                        </div>
                                                        <button>Adicionar ao carrinho</button>
                                                </div>`;

                            coursesIndex[i] = courseIndex;
                        }

                        controlMenuCourse = !controlMenuCourse;
                    } else {
                        contentIcon.innerHTML = '';
                        
                        for(let i = 0; i < courses.length -1; i++) {
                            contentIcon.innerHTML += `<div class="container-content-icon__content">
                                                        <div>
                                                            <img src="${courses[coursesIndex[i]].image}" alt="">
                                                            <div>
                                                                <h4>${courses[coursesIndex[i]].title}</h4>
                                                                <p>${courses[coursesIndex[i]].createdBy}</p>
                                                                <p class="content__price">R$${courses[coursesIndex[i]].valueMoney}</p>
                                                            </div>
                                                        </div>
                                                        <button>Adicionar ao carrinho</button>
                                                </div>`;
                        }
                    }
                    break;
                case 1:
                    contentIcon.innerHTML = `<h3>Seu carrinho está vazio.</h3>
                                            <button>Continuar comprando</button>`;
                    break;
                case 2:
                    contentIcon.innerHTML = `<h3>Notificações</h3>
                                            <button>Configurações</button>
                                            <p>Sem notificações</p>`;
                    break;
            }

            containerHeader[i].appendChild(contentIcon);
        });

        // svgHeader[i].addEventListener('mouseout', () => {
        //     const svgContent = svgHeader[i].contentDocument;
        //     const element = svgContent.querySelector('.bi');
        //     element.setAttribute('fill', 'black');
        // });
    }
});
})();