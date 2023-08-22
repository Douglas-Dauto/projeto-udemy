const inputSearch = window.document.getElementsByClassName('container-header__input-search')[0];
const buttonSearch = window.document.querySelector('.container-header__container-input iframe');
const sectionFilter = window.document.getElementsByClassName('main-sec-filter-courses')[0];
const main = window.document.getElementsByTagName('main')[0];

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

function injectSection() {
    main.innerHTML = '';
    main.innerHTML = `<section class="main-sec-filter-courses"></section>`;
}