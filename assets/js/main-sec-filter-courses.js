import {coursesArray} from './main-sec-two-courses.js';
import {containerSelectionMouseOff} from './container-header-two-container-selection.js';

(function() {
    const inputSearch = window.document.getElementsByClassName('container-header__input-search')[0];
    const buttonSearch = window.document.querySelector('.container-header__container-input iframe');
    const sectionFilter = window.document.getElementsByClassName('main-sec-filter-courses')[0];
    const main = window.document.getElementsByTagName('main')[0];
    const courses = coursesArray;
    let countResult = 0;

    setInterval(() => {
        fillButtonSearch();
    }, 0);
    
    function fillButtonSearch() {
        const elementPath = buttonSearch.contentDocument.querySelector('.bi path');
        const elementSvg = buttonSearch.contentDocument.querySelector('.bi-search--cursor');
    
        if(inputSearch.value === '') {
            elementPath.setAttribute('fill', '#7c7c7c');
            elementSvg.setAttribute('style', 'cursor: no-drop;');
            elementSvg.removeEventListener('click', injectSection);
        } else {
            elementPath.setAttribute('fill', '#1C1D1F');
            elementSvg.setAttribute('style', 'cursor: pointer;');
            elementSvg.addEventListener('click', injectSection);
        }
    }

    inputSearch.addEventListener('keypress', (e) => {
        if(e.keyCode === 13 && inputSearch.value !== '') {
            injectSection();
        }
    });
    
    function injectSection() {
        countResult = 0;

        for(let i in courses) {
            if(courses[i].title.toLowerCase().includes(String(inputSearch.value.toLowerCase()))) {
                countResult++;
            }
        }

        main.innerHTML = '';
        main.innerHTML = `<section class="main-sec-filter-courses">
        <h1>${countResult} resultados para “${inputSearch.value}”</h1>
    
        <div class="main-sec-filter-courses__buttons">
            <div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                  </svg>Filtro
                </button>
            
                <div>
                    <select>
                        <option value="">Mais relevantes</option>
                        <option value="">Mais vendidos</option>
                        <option value="">Classificação mais alta</option>
                    </select>
                </div>
            </div>
    
            <p>${countResult} resultados</p>
        </div>
    
        <div class="main-sec-filter-courses__courses-and-filter">
            <div>
                <div>
                    <h4>Classificalções</h4>
    
                    <div>
                        <div>
                            <input type="radio" name="classification" id="four-five">
                            <label for="four-five">4,5 e Acima</label>
                        </div>
    
                        <div>
                            <input type="radio" name="classification" id="four-zero">
                            <label for="four-zero">4,0 e Acima</label>
                        </div>
    
                        <div>
                            <input type="radio" name="classification" id="three-five">
                            <label for="three-five">3,5 e Acima</label>
                        </div>
    
                        <div>
                            <input type="radio" name="classification" id="three-zero">
                            <label for="three-zero">3,0 e Acima</label>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="container-courses-filter"></div>
        </div>
    </section>`;

    const containerCoursesFilter = window.document.getElementsByClassName('container-courses-filter')[0];
    window.document.getElementsByClassName('main-sec-filter-courses')[0].addEventListener('mouseenter', containerSelectionMouseOff);

    for(let i in courses) {
        if(courses[i].title.toLowerCase().includes(String(inputSearch.value.toLowerCase()))) {
            let textClassificationClass;

            if(courses[i].classification === 'Mais vendidos') {
                textClassificationClass = 'classification--best-sellers';
            } else if (courses[i].classification === 'Classificação mais alta') {
                textClassificationClass = 'classification--highest-rating';
            } else {
                textClassificationClass = 'classification--none';
            }

            containerCoursesFilter.innerHTML += `<div>
                                                    <div>
                                                        <img src="${courses[i].image}" alt="">

                                                        <div>
                                                            <h3>${courses[i].title}</h3>
                                                            <p>${courses[i].createdBy}</p>

                                                            <div>
                                                                <p>${courses[i].starNote}</p>
                                                                <p>(${courses[i].popularity})</p>
                                                            </div>

                                                            <p class="${textClassificationClass}">${courses[i].classification}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p>R$${courses[i].valueMoney}</p>
                                                    </div>
                                                </div>`;
        }
    }

    const buttonFilter = window.document.querySelector('.main-sec-filter-courses__buttons button');
    const containerFilter = window.document.querySelector('.main-sec-filter-courses__courses-and-filter > div:nth-child(1)');
    let controlFilter = JSON.parse(localStorage.getItem('controlFilter'));
    
    moveContainerFilter(false);
    
    buttonFilter.addEventListener('click', moveContainerFilter);
    
    function moveContainerFilter(value = true) {
        if(value) {
            controlFilter = !controlFilter;
            JSON.stringify(controlFilter);
            localStorage.setItem('controlFilter', controlFilter);
        }
    
        if(controlFilter) {
            containerFilter.setAttribute('class', value === false?'courses-and-filter--hidden-transition-none':'courses-and-filter--hidden');
        } else {
            containerFilter.removeAttribute('class', value === false?'courses-and-filter--hidden-transition-none':'courses-and-filter--hidden');
        }
    }
    }
})();