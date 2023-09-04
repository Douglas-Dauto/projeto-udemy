import {coursesArray} from './main-sec-two-courses.js';
export const containerHeaderIcon = window.document.querySelectorAll('.container-header__sec-two .container-header-sec-two__content-one div');
export let contentIcon = window.document.createElement('div');
export const svgHeader = window.document.getElementsByClassName('container-header-icon');
export const elements = window.document.querySelectorAll('.container-header__sec-one-ul li');
export const containerHidden = document.createElement('div');

(function() {
const textContentOld = [];
const containerList = window.document.getElementsByClassName('container-header__sec-one-ul')[0];
const secOneCarousel = window.document.getElementsByClassName('main-sec-one-carousel')[0];
const sectionMain = window.document.getElementsByClassName('section-main-courses')[0];
const elementIcon = window.document.querySelectorAll('.container-header-sec-two__content-one div iframe');
const containerHeaderTwo = window.document.getElementsByClassName('container-header-two')[0];
const containerHeaderUser = window.document.getElementsByClassName('container-header__user')[0];
const containerHeaderSecTwo = window.document.getElementsByClassName('container-header__sec-two')[0];
const headerLogo = window.document.querySelector('.container-header img');
let controlAppendChild = false;

headerLogo.addEventListener('click', () => {
    document.location.reload();
});

for(let i = 2; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', () => {
        textContentOld[i] = elements[i].textContent;
        containerHidden.setAttribute('class', 'container-header__container-hidden');
        containerHidden.innerHTML = `<p>${i === 2?'Sua equipe pode ter acesso a mais de 22.000 cursos de destaque da Udemy a qualquer hora, em qualquer lugar.':i === 3?'Transforme o que você sabe em oportunidade e alcance milhões de alunos do mundo todo.':''}</p><a href="#">${i === 2?'Testar Udemy Business':i === 3?'Saiba mais':'Acessar meu aprendizado'}</a>`;
        elements[i].appendChild(containerHidden);
        controlAppendChild = !controlAppendChild;
    });

    elements[i].addEventListener('mouseout', () => {
        containerList.addEventListener('mouseenter', () => removeContainerHidden(i));
        secOneCarousel.addEventListener('mouseenter', () => removeContainerHidden(i));
        sectionMain.addEventListener('mouseenter', () => removeContainerHidden(i));
        containerHeaderTwo.addEventListener('mouseenter', () => removeContainerHidden(i));
        containerHeaderUser.addEventListener('mouseenter', () => removeContainerHidden(i));
        containerHeaderSecTwo.addEventListener('mouseenter', () => removeContainerHidden(i));
        elements[1].addEventListener('mouseenter', () => removeContainerHidden(i));
    });
}

function removeContainerHidden(i) {
    if(controlAppendChild && elements[i].contains(containerHidden)) {
        elements[i].removeChild(containerHidden);
        controlAppendChild = !controlAppendChild;
    }
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

    if(window.innerWidth > 840 && controlMenu === false && containerHeader.contains(elementList) && containerIcons.contains(elementSearch)) {
        containerHeader.removeChild(elementList);
        containerIcons.removeChild(elementSearch);
        controlMenu = !controlMenu;
    }
}, 10);

const courses = coursesArray;
const coursesIndex = [], addCourseCart = [], addCourseIdCart = [];
let indexCart = 0;

document.addEventListener('DOMContentLoaded', () => {
    const containerIconCart = window.document.querySelectorAll('.container-header-sec-two__cart')[0];
    let controlAppendChild = false;

    contentIcon.setAttribute('class', 'container-content-icon');

    for(let i = 0; i < svgHeader.length; i++) {
        containerList.addEventListener('mouseenter', () => removeElement());
        secOneCarousel.addEventListener('mouseenter', () => removeElement());
        sectionMain.addEventListener('mouseenter', () => removeElement());
        containerHeaderTwo.addEventListener('mouseenter', () => removeElement());
        containerHeaderUser.addEventListener('mouseenter', () => removeElement());

        for(let i = 0; i < elementIcon.length; i++) {
            elementIcon[i].addEventListener('mouseenter', () => removeElement());
        }

        function removeElement() {
            if(controlAppendChild && containerHeaderIcon[i].contains(contentIcon)) {
                const svgContent = svgHeader[i].contentDocument;
                const element = svgContent.querySelector('.bi');
                element.setAttribute('fill', 'black');
                containerHeaderIcon[i].removeChild(contentIcon);
                controlAppendChild = !controlAppendChild;
            }
        }

        svgHeader[i].addEventListener('mouseenter', () => {
            const svgContent = svgHeader[i].contentDocument;
            const element = svgContent.querySelector('.bi');
            element.setAttribute('fill', '#5624D0');
            element.setAttribute('style', 'cursor: pointer;');

            switch(i) {
                case 0:
                    contentIcon.setAttribute('class', 'container-content-icon');
                    contentIcon.innerHTML = '';

                    let courseIndex = Math.floor((Math.random() * (courses.length)));
                    const textButton = [];

                    for(let i = 0; i < courses.length -1; i++) {
                        while(coursesIndex.indexOf(courseIndex) >= 0) {
                            courseIndex = Math.floor((Math.random() * (courses.length)));
                        }

                        if(addCourseIdCart.indexOf(courses[courseIndex].id) >= 0) {
                            textButton[i] = 'Adicionado!';
                        } else {
                            textButton[i] = 'Adicionar ao carrinho';
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
                                                    <button class="container-content-icon__button">${textButton[i]}</button>
                                            </div>`;

                        coursesIndex[i] = courseIndex;
                    }

                    setTimeout(() => {
                        for(let j = 0; j < window.document.getElementsByClassName('container-content-icon__button').length; j++) {
                            window.document.getElementsByClassName('container-content-icon__button')[j].addEventListener('click', () => {
                                if(textButton[j] === 'Adicionar ao carrinho') {
                                    textButton[j] = 'Adicionado!';
                                    window.document.getElementsByClassName('container-content-icon__button')[j].innerText = textButton[j];
                                    addCourseCart[indexCart] = coursesIndex[j];
                                    addCourseIdCart[indexCart] = courses[coursesIndex[j]].id;
                                    containerIconCart.innerHTML = `<div class="container-header-icon__num">${addCourseCart.length}</div>`;
                                    indexCart++;
                                }
                            });
                        }
                    }, 100);
                    break;
                case 1:
                    contentIcon.setAttribute('class', 'container-content-icon container-content-icon-min');

                    returnMenuCart();
                    function returnMenuCart() {
                        if(addCourseCart.length > 0) {
                            contentIcon.innerHTML = '';
    
                            for(let i = 0; i < addCourseCart.length; i++) {
                                contentIcon.innerHTML += `<div class="container-content-icon__content">
                                                            <div>
                                                                <img src="${courses[addCourseCart[i]].image}" alt="">
                                                                <div>
                                                                    <h4>${courses[addCourseCart[i]].title}</h4>
                                                                    <p>${courses[addCourseCart[i]].createdBy}</p>
                                                                    <p class="content__price">R$${courses[addCourseCart[i]].valueMoney}</p>
                                                                </div>
                                                            </div>
                                                            <button class="container-content-icon__button-cart">Remover do carrinho</button>
                                                        </div>`;
                            }
                            
                            setTimeout(() => {
                                for(let j = 0; j < window.document.getElementsByClassName('container-content-icon__button-cart').length; j++) {
                                    window.document.getElementsByClassName('container-content-icon__button-cart')[j].addEventListener('click', () => {
                                        window.document.getElementsByClassName('container-content-icon__button-cart')[j].innerText = 'Removido!';
                                        indexCart--;
                                        addCourseCart.splice(j, 1);
                                        addCourseIdCart.splice(j, 1);
                                        containerIconCart.innerHTML = `<div class="container-header-icon__num">${addCourseCart.length}</div>`;

                                        if(addCourseCart.length <= 0) {
                                            window.document.getElementsByClassName('container-header-icon__num')[0].setAttribute('class', 'container-header-icon__num container-header-icon__num--none');
                                        }

                                        setTimeout(() => {
                                            returnMenuCart();
                                        }, 500);
                                    });
                                }
                            }, 200);
                        } else {
                            contentIcon.innerHTML = `<div class="container-content-icon__content-cart">
                                                        <h3>Seu carrinho está vazio.</h3>
                                                        <button>Continuar comprando</button>
                                                    </div>`;
                        }
                    }
                    break;
                case 2:
                    contentIcon.setAttribute('class', 'container-content-icon container-content-icon-min');
                    contentIcon.innerHTML = `<div class="container-content-icon__content-notification">
                                                <div>
                                                    <h3>Notificações</h3>
                                                    <button>Configurações</button>
                                                </div>
                                                <p>Sem notificações.</p>
                                            </div>`;
                    break;
            }

            containerHeaderIcon[i].appendChild(contentIcon);
            controlAppendChild = !controlAppendChild;
        });
    }
});
})();