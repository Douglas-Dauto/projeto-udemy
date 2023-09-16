/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/container-header-container-hidden.js":
/*!************************************************************!*\
  !*** ./src/assets/js/container-header-container-hidden.js ***!
  \************************************************************/
/*! exports provided: containerHeaderIcon, contentIcon, svgHeader, elements, containerHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerHeaderIcon", function() { return containerHeaderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentIcon", function() { return contentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgHeader", function() { return svgHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerHidden", function() { return containerHidden; });
/* harmony import */ var _main_sec_two_courses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-sec-two-courses.js */ "./src/assets/js/main-sec-two-courses.js");

var containerHeaderIcon = window.document.querySelectorAll('.container-header__sec-two .container-header-sec-two__content-one > div');
var contentIcon = window.document.createElement('div');
var svgHeader = window.document.getElementsByClassName('container-header-icon');
var elements = window.document.querySelectorAll('.container-header__sec-one-ul li');
var containerHidden = document.createElement('div');
(function () {
  var textContentOld = [];
  var containerList = window.document.getElementsByClassName('container-header__sec-one-ul')[0];
  var secOneCarousel = window.document.getElementsByClassName('main-sec-one-carousel')[0];
  var sectionMain = window.document.getElementsByClassName('section-main-courses')[0];
  var elementIcon = window.document.querySelectorAll('.container-header-sec-two__content-one div iframe');
  var containerHeaderTwo = window.document.getElementsByClassName('container-header-two')[0];
  var containerHeaderUser = window.document.getElementsByClassName('container-header__user')[0];
  var containerHeaderSecTwo = window.document.getElementsByClassName('container-header__sec-two')[0];
  var headerLogo = window.document.querySelector('.container-header img');
  var controlAppendChild = false;
  headerLogo.addEventListener('click', function () {
    document.location.reload();
  });
  var _loop = function _loop(i) {
    elements[i].addEventListener('mouseenter', function () {
      textContentOld[i] = elements[i].textContent;
      containerHidden.setAttribute('class', 'container-header__container-hidden');
      containerHidden.innerHTML = "<p>".concat(i === 2 ? 'Sua equipe pode ter acesso a mais de 22.000 cursos de destaque da Udemy a qualquer hora, em qualquer lugar.' : i === 3 ? 'Transforme o que você sabe em oportunidade e alcance milhões de alunos do mundo todo.' : '', "</p><a href=\"#\">").concat(i === 2 ? 'Testar Udemy Business' : i === 3 ? 'Saiba mais' : 'Acessar meu aprendizado', "</a>");
      elements[i].appendChild(containerHidden);
      controlAppendChild = !controlAppendChild;
    });
    elements[i].addEventListener('mouseout', function () {
      containerList.addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
      secOneCarousel.addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
      sectionMain.addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
      containerHeaderTwo.addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
      containerHeaderUser.addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
      containerHeaderSecTwo.addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
      elements[1].addEventListener('mouseenter', function () {
        return removeContainerHidden(i);
      });
    });
  };
  for (var i = 2; i < elements.length; i++) {
    _loop(i);
  }
  function removeContainerHidden(i) {
    if (controlAppendChild && elements[i].contains(containerHidden)) {
      elements[i].removeChild(containerHidden);
      controlAppendChild = !controlAppendChild;
    }
  }
  var containerHeader = window.document.getElementsByClassName('container-header')[0];
  var elementList = window.document.createElement('div');
  var elementSearch = window.document.createElement('img');
  var imgLogo = window.document.querySelectorAll('.container-header > img')[0];
  var containerIcons = window.document.querySelector('.container-header__sec-two > div');
  var imgCart = window.document.querySelector('.container-header__sec-two > div img:nth-child(2)');
  var controlMenu = true;
  setInterval(function () {
    if (window.innerWidth <= 840 && controlMenu) {
      elementList.innerHTML = "<img src=\"src/assets/img/icon/list.svg\" alt=\"Menu\">";
      containerHeader.appendChild(elementList);
      containerHeader.insertBefore(elementList, imgLogo);
      elementSearch.setAttribute('src', 'src/assets/img/icon/search.svg');
      elementSearch.setAttribute('alt', 'Pesquisa');
      containerIcons.appendChild(elementSearch);
      containerIcons.insertBefore(elementSearch, imgCart);
      controlMenu = !controlMenu;
    }
    if (window.innerWidth > 840 && controlMenu === false && containerHeader.contains(elementList) && containerIcons.contains(elementSearch)) {
      containerHeader.removeChild(elementList);
      containerIcons.removeChild(elementSearch);
      controlMenu = !controlMenu;
    }
  }, 10);
  var courses = _main_sec_two_courses_js__WEBPACK_IMPORTED_MODULE_0__["coursesArray"];
  var coursesIndex = [],
    addCourseCart = [],
    addCourseIdCart = [];
  var indexCart = 0;
  document.addEventListener('DOMContentLoaded', function () {
    var containerIconCart = window.document.querySelectorAll('.container-header-sec-two__cart')[0];
    var controlAppendChild = false;
    contentIcon.setAttribute('class', 'container-content-icon');
    var _loop2 = function _loop2(_i) {
      containerList.addEventListener('mouseenter', function () {
        return removeElement();
      });
      secOneCarousel.addEventListener('mouseenter', function () {
        return removeElement();
      });
      sectionMain.addEventListener('mouseenter', function () {
        return removeElement();
      });
      containerHeaderTwo.addEventListener('mouseenter', function () {
        return removeElement();
      });
      containerHeaderUser.addEventListener('mouseenter', function () {
        return removeElement();
      });
      for (var _i2 = 0; _i2 < elementIcon.length; _i2++) {
        elementIcon[_i2].addEventListener('mouseenter', function () {
          return removeElement();
        });
      }
      function removeElement() {
        if (controlAppendChild && containerHeaderIcon[_i].contains(contentIcon)) {
          var svgContent = svgHeader[_i].contentDocument;
          var element = svgContent.querySelector('.bi');
          element.setAttribute('fill', 'black');
          containerHeaderIcon[_i].removeChild(contentIcon);
          controlAppendChild = !controlAppendChild;
        }
      }
      svgHeader[_i].addEventListener('mouseenter', function () {
        var svgContent = svgHeader[_i].contentDocument;
        var element = svgContent.querySelector('.bi');
        element.setAttribute('fill', '#5624D0');
        element.setAttribute('style', 'cursor: pointer;');
        switch (_i) {
          case 0:
            contentIcon.setAttribute('class', 'container-content-icon');
            contentIcon.innerHTML = '';
            var courseIndex = Math.floor(Math.random() * courses.length);
            var textButton = [];
            for (var _i3 = 0; _i3 < courses.length - 1; _i3++) {
              while (coursesIndex.indexOf(courseIndex) >= 0) {
                courseIndex = Math.floor(Math.random() * courses.length);
              }
              if (addCourseIdCart.indexOf(courses[courseIndex].id) >= 0) {
                textButton[_i3] = 'Adicionado!';
              } else {
                textButton[_i3] = 'Adicionar ao carrinho';
              }
              contentIcon.innerHTML += "<div class=\"container-content-icon__content\">\n                                                    <div>\n                                                        <img src=\"".concat(courses[courseIndex].image, "\" alt=\"\">\n                                                        <div>\n                                                            <h4>").concat(courses[courseIndex].title, "</h4>\n                                                            <p>").concat(courses[courseIndex].createdBy, "</p>\n                                                            <p class=\"content__price\">R$").concat(courses[courseIndex].valueMoney, "</p>\n                                                        </div>\n                                                    </div>\n                                                    <button class=\"container-content-icon__button\">").concat(textButton[_i3], "</button>\n                                            </div>");
              coursesIndex[_i3] = courseIndex;
            }
            setTimeout(function () {
              var _loop3 = function _loop3(j) {
                window.document.getElementsByClassName('container-content-icon__button')[j].addEventListener('click', function () {
                  if (textButton[j] === 'Adicionar ao carrinho') {
                    textButton[j] = 'Adicionado!';
                    window.document.getElementsByClassName('container-content-icon__button')[j].innerText = textButton[j];
                    addCourseCart[indexCart] = coursesIndex[j];
                    addCourseIdCart[indexCart] = courses[coursesIndex[j]].id;
                    containerIconCart.innerHTML = "<div class=\"container-header-icon__num\">".concat(addCourseCart.length, "</div>");
                    indexCart++;
                  }
                });
              };
              for (var j = 0; j < window.document.getElementsByClassName('container-content-icon__button').length; j++) {
                _loop3(j);
              }
            }, 100);
            break;
          case 1:
            contentIcon.setAttribute('class', 'container-content-icon container-content-icon-min');
            returnMenuCart();
            function returnMenuCart() {
              if (addCourseCart.length > 0) {
                contentIcon.innerHTML = '';
                for (var _i4 = 0; _i4 < addCourseCart.length; _i4++) {
                  contentIcon.innerHTML += "<div class=\"container-content-icon__content\">\n                                                            <div>\n                                                                <img src=\"".concat(courses[addCourseCart[_i4]].image, "\" alt=\"\">\n                                                                <div>\n                                                                    <h4>").concat(courses[addCourseCart[_i4]].title, "</h4>\n                                                                    <p>").concat(courses[addCourseCart[_i4]].createdBy, "</p>\n                                                                    <p class=\"content__price\">R$").concat(courses[addCourseCart[_i4]].valueMoney, "</p>\n                                                                </div>\n                                                            </div>\n                                                            <button class=\"container-content-icon__button-cart\">Remover do carrinho</button>\n                                                        </div>");
                }
                setTimeout(function () {
                  var _loop4 = function _loop4(j) {
                    window.document.getElementsByClassName('container-content-icon__button-cart')[j].addEventListener('click', function () {
                      window.document.getElementsByClassName('container-content-icon__button-cart')[j].innerText = 'Removido!';
                      indexCart--;
                      addCourseCart.splice(j, 1);
                      addCourseIdCart.splice(j, 1);
                      containerIconCart.innerHTML = "<div class=\"container-header-icon__num\">".concat(addCourseCart.length, "</div>");
                      if (addCourseCart.length <= 0) {
                        window.document.getElementsByClassName('container-header-icon__num')[0].setAttribute('class', 'container-header-icon__num container-header-icon__num--none');
                      }
                      setTimeout(function () {
                        returnMenuCart();
                      }, 500);
                    });
                  };
                  for (var j = 0; j < window.document.getElementsByClassName('container-content-icon__button-cart').length; j++) {
                    _loop4(j);
                  }
                }, 200);
              } else {
                contentIcon.innerHTML = "<div class=\"container-content-icon__content-cart\">\n                                                        <h3>Seu carrinho est\xE1 vazio.</h3>\n                                                        <button>Continuar comprando</button>\n                                                    </div>";
              }
            };
            break;
          case 2:
            contentIcon.setAttribute('class', 'container-content-icon container-content-icon-min');
            contentIcon.innerHTML = "<div class=\"container-content-icon__content-notification\">\n                                                <div>\n                                                    <h3>Notifica\xE7\xF5es</h3>\n                                                    <button>Configura\xE7\xF5es</button>\n                                                </div>\n                                                <p>Sem notifica\xE7\xF5es.</p>\n                                            </div>";
            break;
        }
        containerHeaderIcon[_i].appendChild(contentIcon);
        controlAppendChild = !controlAppendChild;
      });
    };
    for (var _i = 0; _i < svgHeader.length; _i++) {
      _loop2(_i);
    }
  });
})();

/***/ }),

/***/ "./src/assets/js/container-header-two-container-selection.js":
/*!*******************************************************************!*\
  !*** ./src/assets/js/container-header-two-container-selection.js ***!
  \*******************************************************************/
/*! exports provided: containerSelection, containerTriangle, containerHeaderTwo, controlAppendChildContainerTwo, containerSelectionMouseOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerSelection", function() { return containerSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerTriangle", function() { return containerTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerHeaderTwo", function() { return containerHeaderTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlAppendChildContainerTwo", function() { return controlAppendChildContainerTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerSelectionMouseOff", function() { return containerSelectionMouseOff; });
var containerSelection = window.document.createElement('div');
var containerTriangle = window.document.createElement('div');
var containerHeaderTwo = window.document.getElementsByClassName('container-header-two')[0];
var controlAppendChildContainerTwo = false;
(function () {
  var elements = window.document.querySelectorAll('.container-header-two > ul li');
  var containerHeader = window.document.getElementsByClassName('container-header')[0];
  var _loop = function _loop(i) {
    elements[i].addEventListener('mouseenter', function () {
      containerSelection.setAttribute('class', 'container-header-two__container-selection');
      containerSelection.innerHTML = "<ul>\n        ".concat(i === 0 ? "<li class=\"li-developer\">Desenvolvimento Web</li>\n        <li class=\"li-developer\">Desenvolvimento m\xF3vel</li>\n        <li class=\"li-developer\">Linguagens de programa\xE7\xE3o</li>\n        <li class=\"li-developer\">Desenvolvimento de games</li>\n        <li class=\"li-developer\">Design e desenvolvimento de banco de dados</li>\n        <li class=\"li-developer\">Teste de software</li>" : i === 1 ? "\n        <li>Empreendedorismo</li>\n        <li>Comunica\xE7\xE3o</li>\n        <li>Administra\xE7\xE3o</li>\n        <li>Vendas</li>\n        <li>Estrat\xE9gia de neg\xF3cios</li>" : i === 2 ? "\n        <li>Contabilidade e escritura\xE7\xE3o cont\xE1bil</li>\n        <li>Criptomoeda e blockchain</li>\n        <li>Finan\xE7as</li>\n        <li>Modelagem e an\xE1lise financeira</li>\n        <li>Investimentos e trading</li>" : i === 3 ? "\n        <li>Certifica\xE7\xF5es de TI</li>\n        <li>Rede e seguran\xE7a</li>\n        <li>Hardware</li>\n        <li>Sistemas operacionais e servidores</li>\n        <li>Mais op\xE7\xF5es em TI e software</li>" : i === 4 ? "\n        <li>Microsoft</li>\n        <li>Apple</li>\n        <li>Google</li>\n        <li>SAP</li>\n        <li>Oracle</li>\n        <li>Mais op\xE7\xF5es em produtividade no escrit\xF3rio</li>" : i === 5 ? "\n        <li>Transforma\xE7\xE3o pessoal</li>\n        <li>Produtividade pessoal</li>\n        <li>Lideran\xE7a</li>\n        <li>Desenvolvimento de carreira</li>\n        <li>Maternidade/paternidade e relacionamentos</li>" : i === 6 ? "\n        <li>Web design</li>\n        <li>Design gr\xE1fico e ilustra\xE7\xE3o</li>\n        <li>Ferramentas de design</li>\n        <li>Design de experi\xEAncia do usu\xE1rio</li>\n        <li>Design de games</li>\n        <li>3D e anima\xE7\xE3o</li>" : i === 7 ? "\n        <li>Marketing digital</li>\n        <li>Otimiza\xE7\xE3o de mecanismos de busca (SEO)</li>\n        <li>Marketing de redes sociais</li>\n        <li>Brading</li>\n        <li>Fundamentos de marketing</li>\n        <li>An\xE1lise de marketing e automa\xE7\xE3o</li>" : i === 8 ? "\n        <li>Fitness</li>\n        <li>Sa\xFAde geral</li>\n        <li>Esportes</li>\n        <li>Nutri\xE7\xE3o e dieta</li>\n        <li>Ioga</li>\n        <li>Sa\xFAde geral</li>" : "\n        <li>Instrumentos</li>\n        <li>Produ\xE7\xE3o musical</li>\n        <li>Fundamentos da m\xFAsica</li>\n        <li>Canto</li>\n        <li>T\xE9cnicas de m\xFAsica</li>\n        <li>Software de m\xFAsica</li>", "\n    </ul>");
      containerHeaderTwo.appendChild(containerSelection);
      containerTriangle.setAttribute('class', 'triangle');
      elements[i].appendChild(containerTriangle);
      controlAppendChildContainerTwo = true;
    });
    containerHeader.addEventListener('mouseenter', containerSelectionMouseOff);
    window.document.getElementsByClassName('main-sec-one-carousel')[0].addEventListener('mouseenter', containerSelectionMouseOff);
  };
  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }
})();
function containerSelectionMouseOff() {
  if (controlAppendChildContainerTwo) {
    containerHeaderTwo.removeChild(containerSelection);
    containerTriangle.removeAttribute('class', 'triangle');
    controlAppendChildContainerTwo = false;
  }
}

/***/ }),

/***/ "./src/assets/js/main-sec-filter-courses.js":
/*!**************************************************!*\
  !*** ./src/assets/js/main-sec-filter-courses.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_sec_two_courses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-sec-two-courses.js */ "./src/assets/js/main-sec-two-courses.js");
/* harmony import */ var _container_header_two_container_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-header-two-container-selection.js */ "./src/assets/js/container-header-two-container-selection.js");
/* harmony import */ var _container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container-header-container-hidden.js */ "./src/assets/js/container-header-container-hidden.js");



(function () {
  var inputSearch = window.document.getElementsByClassName('container-header__input-search')[0];
  var buttonSearch = window.document.querySelector('.container-header__container-input iframe');
  var sectionFilter = window.document.getElementsByClassName('main-sec-filter-courses')[0];
  var main = window.document.getElementsByTagName('main')[0];
  var courses = _main_sec_two_courses_js__WEBPACK_IMPORTED_MODULE_0__["coursesArray"];
  var countResult = 0,
    textInputSearchValuePrevious = '';
  setInterval(function () {
    fillButtonSearch();
  }, 0);
  function fillButtonSearch() {
    var elementPath = buttonSearch.contentDocument.querySelector('.bi path');
    var elementSvg = buttonSearch.contentDocument.querySelector('.bi-search--cursor');
    if (inputSearch.value === '') {
      elementPath.setAttribute('fill', '#7c7c7c');
      elementSvg.setAttribute('style', 'cursor: no-drop;');
      elementSvg.removeEventListener('click', injectSection);
    } else {
      elementPath.setAttribute('fill', '#1C1D1F');
      elementSvg.setAttribute('style', 'cursor: pointer;');
      elementSvg.addEventListener('click', injectSection);
    }
  }
  inputSearch.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      injectSection();
    }
  });
  var textInputSearch = '',
    controlFilterClassification = true,
    intervalFilterSelect,
    intervalInputFilter;
  function injectSection() {
    var selectOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String(JSON.parse(localStorage.getItem('valueOption'))) | 1;
    var controlSelectOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var valueSelectOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';
    var buttonRemoveFilter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var controlLocalStoageInputRadioClassification = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var valueCountCourses = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    if (controlSelectOption === false) {
      var _valueOption = '1';
      JSON.stringify(_valueOption);
      localStorage.setItem('valueOption', _valueOption);
      textInputSearch = inputSearch.value;
    }
    if (textInputSearch !== '' && textInputSearch !== textInputSearchValuePrevious || controlSelectOption) {
      countResult = 0;
      if (!controlLocalStoageInputRadioClassification || valueCountCourses === null) {
        for (var i in courses) {
          if (courses[i].title.toLowerCase().includes(String(textInputSearch.toLowerCase()))) {
            countResult++;
          }
        }
      } else {
        for (var _i in courses) {
          if (courses[_i].title.toLowerCase().includes(String(textInputSearch.toLowerCase())) && String(courses[_i].starNote) >= valueCountCourses) {
            countResult++;
          }
        }
      }
      clearInterval(intervalFilterSelect);
      clearInterval(intervalInputFilter);
      main.innerHTML = '';
      main.innerHTML = '<img src="src/assets/img/icon/arrow-clockwise.svg" class="load-arrow" alt="Load">';
      setTimeout(function () {
        main.innerHTML = '';
        main.innerHTML = "<section class=\"main-sec-filter-courses\">\n                    <h1>".concat(countResult, " resultados para \u201C").concat(textInputSearch, "\u201D</h1>\n                \n                    <div class=\"main-sec-filter-courses__buttons\">\n                        <div>\n                            <button id=\"button-close-open-filter\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-filter\" viewBox=\"0 0 16 16\">\n                                <path d=\"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z\"/>\n                            </svg>Filtro\n                            </button>\n                        \n                            <div>\n                                <select name=\"lista\" id=\"main-sec-filter-courses-button-select\">\n                                    <option value=\"1\">Mais relevantes</option>\n                                    <option value=\"2\">Mais vendidos</option>\n                                    <option value=\"3\">Classifica\xE7\xE3o mais alta</option>\n                                </select>\n                            </div>\n                        </div>\n                \n                        <p>").concat(countResult, " resultados</p>\n                    </div>\n                \n                    <div class=\"main-sec-filter-courses__courses-and-filter\">\n                        <div>\n                            <div>\n                                <h4>Classifica\xE7\xF5es</h4>\n                \n                                <div class=\"courses-and-filter-container\">\n                                    <div>\n                                        <input type=\"radio\" name=\"classification\" class=\"courses-and-filter-input\" id=\"four-five\">\n                                        <label for=\"four-five\">4,5 e Acima</label>\n                                    </div>\n                \n                                    <div>\n                                        <input type=\"radio\" name=\"classification\" class=\"courses-and-filter-input\" id=\"four-zero\">\n                                        <label for=\"four-zero\">4,0 e Acima</label>\n                                    </div>\n                \n                                    <div>\n                                        <input type=\"radio\" name=\"classification\" class=\"courses-and-filter-input\" id=\"three-five\">\n                                        <label for=\"three-five\">3,5 e Acima</label>\n                                    </div>\n                \n                                    <div>\n                                        <input type=\"radio\" name=\"classification\" class=\"courses-and-filter-input\" id=\"three-zero\">\n                                        <label for=\"three-zero\">3,0 e Acima</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                \n                        <div class=\"container-courses-filter\"></div>\n                    </div>\n                </section>");
        initSetIntervalFilterCourses();
        var inputFilterClassification = window.document.getElementsByClassName('courses-and-filter-input');
        if (controlLocalStoageInputRadioClassification) {
          inputFilterClassification[JSON.parse(localStorage.getItem('inputRadioClassification'))].checked = true;
        }
        if (buttonRemoveFilter === 1) {
          var elementRemoveFilter = window.document.createElement('button');
          var containerButtonsFilter = window.document.querySelector('.main-sec-filter-courses__buttons > div');
          elementRemoveFilter.setAttribute('id', 'button-clear-filter');
          elementRemoveFilter.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\">\n                                                        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\n                                                    </svg>Limpar filtro";
          containerButtonsFilter.appendChild(elementRemoveFilter);
          var _buttonRemoveFilter = window.document.getElementById('button-clear-filter');
          _buttonRemoveFilter.addEventListener('click', function () {
            for (var _i2 = 0; _i2 < inputFilterClassification.length; _i2++) {
              inputFilterClassification[_i2].checked = false;
            }
            setTimeout(function () {
              injectSection(undefined, true, '1', 0);
            }, 400);
          });
        }
        var containerCoursesFilter = window.document.getElementsByClassName('container-courses-filter')[0];
        window.document.getElementsByClassName('main-sec-filter-courses')[0].addEventListener('mouseenter', function () {
          Object(_container_header_two_container_selection_js__WEBPACK_IMPORTED_MODULE_1__["containerSelectionMouseOff"])();
          var _loop = function _loop(_i3) {
            setTimeout(function () {
              if (_container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["containerHeaderIcon"][_i3].contains(_container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["contentIcon"])) {
                var svgContent = _container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["svgHeader"][_i3].contentDocument;
                var element = svgContent.querySelector('.bi');
                element.setAttribute('fill', 'black');
                _container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["containerHeaderIcon"][_i3].removeChild(_container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["contentIcon"]);
              }
            }, 1);
          };
          for (var _i3 = 0; _i3 < _container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["containerHeaderIcon"].length; _i3++) {
            _loop(_i3);
          }
          var _loop2 = function _loop2(_i4) {
            setTimeout(function () {
              if (_container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["elements"][_i4].contains(_container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["containerHidden"])) {
                _container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["elements"][_i4].removeChild(_container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["containerHidden"]);
              }
            }, 1);
          };
          for (var _i4 = 2; _i4 < _container_header_container_hidden_js__WEBPACK_IMPORTED_MODULE_2__["elements"].length; _i4++) {
            _loop2(_i4);
          }
        });
        var arrayCourse = [];
        var _loop3 = function _loop3(_i5) {
          if (courses[_i5].title.toLowerCase().includes(String(textInputSearch.toLowerCase()))) {
            var generateCourse = function generateCourse() {
              return "<div>\n                                        <div>\n                                            <img src=\"".concat(courses[_i5].image, "\" alt=\"\">\n\n                                            <div>\n                                                <h3>").concat(courses[_i5].title, "</h3>\n                                                <p>").concat(courses[_i5].createdBy, "</p>\n\n                                                <div>\n                                                    <p>").concat(courses[_i5].starNote, "</p>\n                                                    <p>(").concat(courses[_i5].popularity, ")</p>\n                                                </div>\n\n                                                <p class=\"").concat(textClassificationClass, "\">").concat(courses[_i5].classification, "</p>\n                                            </div>\n                                        </div>\n\n                                        <div>\n                                            <p>R$").concat(courses[_i5].valueMoney, "</p>\n                                        </div>\n                                    </div>");
            };
            var textClassificationClass;
            if (courses[_i5].classification === 'Mais vendidos') {
              textClassificationClass = 'classification--best-sellers';
            } else if (courses[_i5].classification === 'Classificação mais alta') {
              textClassificationClass = 'classification--highest-rating';
            } else {
              textClassificationClass = 'classification--none';
            }
            arrayCourse.push({
              container: generateCourse(),
              classification: courses[_i5].classification,
              starNote: courses[_i5].starNote
            });
          }
        };
        for (var _i5 in courses) {
          _loop3(_i5);
        }
        if (controlLocalStoageInputRadioClassification) {
          var _inputFilterClassification = window.document.getElementsByClassName('courses-and-filter-input');
          for (var _i6 = 0; _i6 < _inputFilterClassification.length; _i6++) {
            if (_inputFilterClassification[_i6].checked === true) {
              var textLabel = window.document.querySelectorAll('.courses-and-filter-container label')[_i6].textContent.slice(0, 3);
              for (var j = 0; j < arrayCourse.length - 1; j++) {
                while (Number(arrayCourse[j].starNote.replace(',', '.')) < Number(textLabel.replace(',', '.'))) {
                  arrayCourse.splice(j, 1);
                  if (j === arrayCourse.length - 1) {
                    if (Number(arrayCourse[j].starNote.replace(',', '.')) < Number(textLabel.replace(',', '.'))) {
                      arrayCourse.splice(j, 1);
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        var amountArrayCourse = arrayCourse.length;
        var _loop4 = function _loop4(_i7) {
          if (selectOption === '2') {
            filterClassificationCourse('Mais vendidos');
          } else if (selectOption === '3') {
            filterClassificationCourse('Classificação mais alta');
          }
          function filterClassificationCourse(classification) {
            while (arrayCourse[0].classification !== classification) {
              arrayCourse.push(arrayCourse[0]);
              arrayCourse.shift();
              var countClassification = 0;
              for (var _i8 in arrayCourse) {
                if (arrayCourse[_i8].classification === classification) {
                  countClassification++;
                }
              }
              if (countClassification === 0) {
                break;
              }
            }
            setTimeout(function () {
              for (var _j = 0; _j < amountArrayCourse; _j++) {
                if (arrayCourse[_j].classification === classification && arrayCourse[_j].classification !== arrayCourse[_j + 1].classification) {
                  arrayCourse.push(arrayCourse[_j + 1]);
                  arrayCourse.splice(_j + 1, 1);
                }
              }
            }, 10);
          }
          setTimeout(function () {
            innerCourse();
          }, 50);
          function innerCourse() {
            containerCoursesFilter.innerHTML += String(arrayCourse[_i7].container);
          }
        };
        for (var _i7 in courses) {
          _loop4(_i7);
        }
        var buttonFilter = window.document.querySelector('#button-close-open-filter');
        var containerFilter = window.document.querySelector('.main-sec-filter-courses__courses-and-filter > div:nth-child(1)');
        var controlFilter = JSON.parse(localStorage.getItem('controlFilter'));
        moveContainerFilter(false);
        buttonFilter.addEventListener('click', moveContainerFilter);
        function moveContainerFilter() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          if (value) {
            controlFilter = !controlFilter;
            JSON.stringify(controlFilter);
            localStorage.setItem('controlFilter', controlFilter);
          }
          if (controlFilter) {
            containerFilter.setAttribute('class', value === false ? 'courses-and-filter--hidden-transition-none' : 'courses-and-filter--hidden');
          } else {
            containerFilter.removeAttribute('class', value === false ? 'courses-and-filter--hidden-transition-none' : 'courses-and-filter--hidden');
          }
        }
      }, 2000);
      textInputSearchValuePrevious = textInputSearch;
      controlFilterClassification = true;
    }
  }
  var valueOption = '1',
    controlFilterSelect = true;
  function initSetIntervalFilterCourses() {
    intervalFilterSelect = setInterval(function () {
      if (window.document.querySelector('main > section').classList.contains('main-sec-filter-courses') && String(window.document.getElementById('main-sec-filter-courses-button-select').value) !== valueOption) {
        var mainFilterButtonSelect = window.document.getElementById('main-sec-filter-courses-button-select');
        if (controlFilterSelect) {
          controlFilterSelect = false;
          if (mainFilterButtonSelect.value === '1') {
            mainFilterButtonSelect.value = String(JSON.parse(localStorage.getItem('valueOption')));
          }
        }
        setTimeout(function () {
          if (String(mainFilterButtonSelect.value) !== valueOption) {
            valueOption = String(mainFilterButtonSelect.value);
            var inputFilterClassification = window.document.getElementsByClassName('courses-and-filter-input');
            var count = 0;
            for (var i = 0; i < inputFilterClassification.length; i++) {
              if (inputFilterClassification[i].checked) {
                count++;
              }
            }
            if (count > 0) {
              setTimeout(function () {
                injectSection(String(mainFilterButtonSelect.value), true, String(valueOption), 1, true);
              }, 10);
            } else {
              setTimeout(function () {
                injectSection(String(mainFilterButtonSelect.value), true, String(valueOption), undefined, false);
              }, 10);
            }
            JSON.stringify(valueOption);
            localStorage.setItem('valueOption', valueOption);
            controlFilterSelect = true;
          }
        }, 100);
      }
    }, 0);
    intervalInputFilter = setInterval(function () {
      var inputFilterClassification = window.document.getElementsByClassName('courses-and-filter-input');
      var containerFilterClassification = window.document.getElementsByClassName('courses-and-filter-container')[0];
      var containerButtonsFilter = window.document.querySelector('.main-sec-filter-courses__buttons > div');
      if (window.document.querySelector('main > section').classList.contains('main-sec-filter-courses') && controlFilterClassification) {
        var checkInputClassification = function checkInputClassification() {
          var count = 0,
            valueCountCourses = 0;
          for (var i = 0; i < inputFilterClassification.length; i++) {
            if (inputFilterClassification[i].checked) {
              count++;
              valueCountCourses = i;
              localStorage.setItem('inputRadioClassification', JSON.stringify(i));
            }
          }
          if (count > 0) {
            setTimeout(function () {
              injectSection(undefined, true, '1', 1, true, String(window.document.querySelectorAll('.courses-and-filter-container label')[valueCountCourses].textContent.slice(0, 3)));
            }, 400);
          }
        };
        containerFilterClassification.addEventListener('click', checkInputClassification);
        controlFilterClassification = false;
      }
    }, 0);
  }
})();

/***/ }),

/***/ "./src/assets/js/main-sec-one-carousel.js":
/*!************************************************!*\
  !*** ./src/assets/js/main-sec-one-carousel.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var contentCarousel = window.document.getElementsByClassName('main-sec-one-content')[0];
  var carouselPrevious = window.document.getElementsByClassName('main-sec-one-previous')[0];
  var carouselNext = window.document.getElementsByClassName('main-sec-one-next')[0];
  var elementsCarousel = ["<div class=\"carousel-content-all\">\n    <img class=\"carousel-img\" src=\"src/assets/img/carrosselOne.jpg\" alt=\"Certificado\">\n\n    <div class=\"carousel-content\">\n        <h1>Prepare-se para sua certifica\xE7\xE3o de TI</h1>\n        <p>Explore um futuro em TI. Comece a estudar para tirar a certifica\xE7\xE3o AWS, CompTIA A+ e muito mais.</p>\n    </div>\n</div>", "<div class=\"carousel-content-all\">\n    <img class=\"carousel-img\" src=\"src/assets/img/carrosselTwo.jpg\" alt=\"Boneco subindo degraus\">\n\n    <div class=\"carousel-content\">\n        <h1>Devagar e sempre</h1>\n        <p>Tente estudar por 5 a 10 minutos por dia. Continue seu curso e alcance todo o seu potencial.</p>\n    </div>\n</div>", "<div class=\"carousel-content-all\">\n    <img class=\"carousel-img\" src=\"src/assets/img/carrosselThree.png\" alt=\"Pessoa sorrindo\">\n\n    <div class=\"carousel-content\">\n        <h1>O aprendizado vem at\xE9 voc\xEA</h1>\n        <p>A promo\xE7\xE3o termina hoje. Alcance um mundo de conhecimento \u2014 em casa ou na rua. Cursos a partir de R$22,90 cada.</p>\n    </div>\n</div>"];
  var intervalNextImageData;
  for (var i = 0; i < elementsCarousel.length; i++) {
    contentCarousel.innerHTML += elementsCarousel[i];
  }
  var carouselContentAll = window.document.getElementsByClassName('carousel-content-all');
  var currentIndex = 0;
  carouselPrevious.addEventListener('click', previousElement);
  carouselNext.addEventListener('click', nextElement);
  function previousElement(value) {
    if (value !== -1) {
      contentCarousel.setAttribute('class', 'main-sec-one-content main-sec-one-content-remove-transition');
      contentCarousel.insertBefore(carouselContentAll[carouselContentAll.length - 1], carouselContentAll[0]);
      nextElement(-1);
    }
    if (value !== -1) {
      setTimeout(function () {
        contentCarousel.setAttribute('class', 'main-sec-one-content');
        setTimeout(function () {
          previous();
        }, 10);
      }, 10);
    }
    if (value === -1) {
      previous();
    }
    function previous() {
      currentIndex = (currentIndex - 1 + carouselContentAll.length) % carouselContentAll.length;
      showSlide(currentIndex);
      clearInterval(intervalNextImageData);
      intervalNextImage();
    }
    carouselPrevious.removeEventListener('click', previousElement);
    setTimeout(function () {
      carouselPrevious.addEventListener('click', previousElement);
    }, 1000);
  }
  function nextElement(value) {
    currentIndex = (currentIndex + 1) % carouselContentAll.length;
    showSlide(currentIndex);
    clearInterval(intervalNextImageData);
    intervalNextImage();
    carouselNext.removeEventListener('click', nextElement);
    setTimeout(function () {
      if (value !== -1) {
        contentCarousel.setAttribute('class', 'main-sec-one-content main-sec-one-content-remove-transition');
        contentCarousel.appendChild(carouselContentAll[0]);
        previousElement(-1);
      }
      carouselNext.addEventListener('click', nextElement);
      setTimeout(function () {
        contentCarousel.setAttribute('class', 'main-sec-one-content');
      }, 5);
    }, 1000);
  }
  function showSlide(index) {
    contentCarousel.style.transform = "translateX(-".concat(index * 100, "%)");
  }
  intervalNextImage();
  function intervalNextImage() {
    intervalNextImageData = setInterval(function () {
      if (!window.document.getElementsByTagName('section')[0].classList.contains('main-sec-filter-courses')) {
        nextElement();
      }
    }, 15000);
  }
})();

/***/ }),

/***/ "./src/assets/js/main-sec-two-courses.js":
/*!***********************************************!*\
  !*** ./src/assets/js/main-sec-two-courses.js ***!
  \***********************************************/
/*! exports provided: coursesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coursesArray", function() { return coursesArray; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var coursesArray;
(function () {
  var mainCourses = window.document.getElementsByClassName('main-sec-two-courses')[0];
  var sections = [],
    courses = [];
  var amountMaxContainerCourse = 15,
    idCourse = 1;
  var Course = /*#__PURE__*/_createClass(function Course(image, title, createdBy, starNote, popularity, valueMoney, classification) {
    _classCallCheck(this, Course);
    Object.defineProperties(this, {
      id: {
        enumerable: true,
        configurable: false,
        value: idCourse++ * 1000
      },
      image: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return image;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          image = value;
        }
      },
      title: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return title;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          title = value;
        }
      },
      createdBy: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return createdBy;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          createdBy = value;
        }
      },
      starNote: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return starNote;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          starNote = value;
        }
      },
      popularity: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return popularity;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          popularity = value;
        }
      },
      valueMoney: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return valueMoney;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          valueMoney = value;
        }
      },
      classification: {
        enumerable: true,
        configurable: false,
        get: function get() {
          return classification;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          classification = value;
        }
      }
    });
    Course.prototype.createCourse = function () {
      var containerCourse = window.document.createElement('div');
      containerCourse.setAttribute('class', 'container-course');
      containerCourse.innerHTML = "\n            <img src=\"".concat(this.image, "\" alt=\"\">\n            <h3>").concat(this.title, "</h3>\n            <p>").concat(this.createdBy, "</p>\n        \n            <div>\n                <p>").concat(this.starNote, "</p>\n                <p>(").concat(this.popularity, ")</p>\n            </div>\n        \n            <p>R$ ").concat(this.valueMoney, "</p>");
      if (this.classification === 'Classificação mais alta') {
        containerCourse.innerHTML += "<p class=\"classification--highest-rating\">".concat(this.classification, "</p>");
      } else if (this.classification === 'Mais vendidos') {
        containerCourse.innerHTML += "<p class=\"classification--best-sellers\">".concat(this.classification, "</p>");
      } else {
        containerCourse.innerHTML += "<p class=\"classification--none\"></p>";
      }
      return containerCourse;
    };
  });
  courses.push(new Course('src/assets/img/courses/curso-de-JavaScript-e-TypeScript-do-básico-ao-avançado.jpg', 'Curso de JavaScript e TypeScript do básico ao avançado', 'Luiz Otávio Miranda, Tales Calogi Malaquias', '4,8', '19.175', '199,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/C-Sharp-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg', 'C# COMPLETO Programação Orientada a Objetos + Projetos', 'Nelio Alves', '4,8', '25.932', '189,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/Java-COMPLETO-2023-Programação-Orientada-a-Objetos-Projetos.jpg', 'Java COMPLETO 2023 Programação Orientada a Objetos +Projetos', 'Nelio Alves', '4,8', '44.719', '169,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/O-curso-completo-de-Banco-de-Dados-e-SQL-sem mistérios.jpg', 'O curso completo de Banco de Dados e SQL, sem mistérios!', 'Felipe Mafra', '4,7', '37.665', '179,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Curso-Design-Gráfico-COMPLETO-10-Cursos-do-Zero-ao-Avançado.jpg', 'Curso Design Gráfico COMPLETO 10 Cursos do Zero ao Avançado', 'André Fontenelle', '3,6', '39.154', '169,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Pixel-Art-do-zero-ao-avançado.jpg', 'Pixel Art do zero ao avançado', 'Jeferson Dias', '4,6', '589', '169,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Modelagem-de-Dados-UML-(Análise&Projeto Orientado a Objetos).jpg', 'Modelagem de Dados UML (Análise&Projeto Orientado a Objetos)', 'Nelio Alves', '2,8', '2.845', '169,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/Criação-de-Apps-Android-iOS-Web-com-Flutter.jpg', 'Criação de Apps Android/iOS/Web com Flutter', 'Daniel Ciolfi, Ewerton Dutra', '3,6', '15.808', '189,90'));
  courses.push(new Course('src/assets/img/courses/Power-BI-Completo-Do-Básico-ao-Avançado.jpg', 'Power BI Completo - Do Básico ao Avançado', 'João Paulo de Lira', '3,7', '64.650', '199,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Curso-de-React.Js-e-Next.Js-Intermediário e Avançado.jpg', 'Curso de React.Js e Next.Js (Intermediário e Avançado)', 'Luiz Otávio Miranda', '4,7', '3.627', '169,90'));
  courses.push(new Course('src/assets/img/courses/Angular-The-Complete-Guide-2023 Edition.jpg', 'Angular - The Complete Guide (2023 Edition)', 'Maximilian Schwarzmuller', '4,6', '188.665', '169,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Bootstrap-5-Curso-Completo-e-Direto-ao-Ponto.jpg', 'Bootstrap 5: Curso Completo e Direto ao Ponto', 'Diego Mariano', '2,0', '1.179', '179,90'));
  courses.push(new Course('src/assets/img/courses/Understanding-TypeScript.jpg', 'Understanding TypeScript', 'Maximilian Schwarzmuller', '4,6', '44.269', '199,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Learn-to-Code-with-Ruby.jpg', 'Learn to Code with Ruby', 'Boris Paskhaver', '4,7', '5.568', '179,90', 'Mais vendidos'));
  courses.push(new Course('src/assets/img/courses/Git-Completo-Do-Básico-ao-Avançado.jpg', 'Git Completo: Do Básico ao Avançado', 'Gabriel Ferrari', '4,8', '4.173', '199,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/JavaScript-do-básico-ao-avançado-c-Node.js e projetos.jpg', 'JavaScript do básico ao avançado (c/ Node.js e projetos)', 'Matheus Battisti', '3,7', '3.639', '189,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/Aprenda-JAVASCRIPT-em-7-dias+Projetos-Reais-2023.jpg', 'Aprenda JAVASCRIPT em 7 dias + Projetos Reais (2023)', 'Andre Lacono', '4,8', '1.308', '179,90'));
  courses.push(new Course('src/assets/img/courses/Curso-Web-Moderno-Completo-com-JavaScript-2022+Projetos.jpg', 'Curso Web Moderno Completo com JavaScript 2022 + Projetos', 'Leonardo Moura', '2,7', '49.385', '239,90'));
  courses.push(new Course('src/assets/img/courses/Curso-de-Javascript+Typescript+NodeJs-Programador-JS.jpg', 'Curso de Javascript + Typescript + NodeJs - Programador JS', 'Dener Troquatte', '2,9', '88', '79,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/JavaScript-Curso-COMPLETO-com-6-Projetos-REAIS.jpg', 'JavaScript - Curso COMPLETO com 6 Projetos REAIS', 'Hcode Treinamentos', '4,6', '10.289', '179,90'));
  courses.push(new Course('src/assets/img/courses/Java-2022-COMPLETO-Do-Zero-ao-Profissional+Projetos.jpg', 'Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!', 'Leonardo Moura', '4,7', '20.107', '209,90'));
  courses.push(new Course('src/assets/img/courses/Aprenda-JAVA-em-7-dias+Projetos-Reais-2023.jpg', 'Aprenda JAVA em 7 dias + Projetos Reais (2023)', 'Andre Lacono', '4,8', '338', '124,90'));
  courses.push(new Course('src/assets/img/courses/Programação-em-Java-do- básico-ao-avançado.jpg', 'Programação em Java do básico ao avançado', 'Geek University', '4,5', '2.700', '179,90'));
  courses.push(new Course('src/assets/img/courses/Git-e-Github-Essencial-para-o-Desenvolvedor.jpg', 'Git e Github Essencial para o Desenvolvedor', 'Geek University', '4,8', '1.985', '179,90'));
  courses.push(new Course('src/assets/img/courses/Dominando-Git-e-GitHub-Do-iniciante-ao-expert.jpg', 'Dominando Git e GitHub - Do iniciante ao expert', 'João Rubens Marchete Filho', '4,6', '1.523', '134,90'));
  courses.push(new Course('src/assets/img/courses/Curso-React+Redux-Fundamentos-e-2-Apps-do-Absoluto-ZERO.jpg', 'Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!', 'Leonardo Moura', '3,8', '11.786', '179,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/Next.js-e-React-Curso-Completo-Aprenda-com-Projetos.jpg', 'Next.js e React - Curso Completo - Aprenda com Projetos', 'Leonardo Moura', '2,7', '1.885', '179,90'));
  courses.push(new Course('src/assets/img/courses/Bancos-de-Dados-SQL-e-NoSQL-do-básico-ao-avançado.jpg', 'Bancos de Dados SQL e NoSQL do básico ao avançado', 'Geek University', '2,7', '2.811', '179,90', 'Classificação mais alta'));
  courses.push(new Course('src/assets/img/courses/Bancos-de-dados-relacionais-SQL-do zero ao avançado.jpg', 'Bancos de dados relacionais - SQL (do zero ao avançado)', 'Cezar Augusto Crummenauer', '3,8', '52', '159,90'));
  courses.push(new Course('src/assets/img/courses/Banco-de-Dados-Da-modelagem-à-SQL-com-PostgreSQL.jpg', 'Banco de Dados: Da modelagem à SQL com PostgreSQL', 'Tadeu Pereira', '2,9', '118', '94,90', 'Classificação mais alta'));
  var Section = /*#__PURE__*/function () {
    function Section(id, title, key) {
      _classCallCheck(this, Section);
      Object.defineProperty(this, 'id', {
        enumerable: true,
        value: id,
        writable: false,
        configurable: false
      });
      Object.defineProperty(this, 'title', {
        enumerable: true,
        configurable: false,
        get: function get() {
          return title;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          title = value;
        }
      });
      Object.defineProperty(this, 'addCourses', {
        enumerable: true,
        value: function value() {
          var containerCourses = window.document.getElementsByClassName('container-courses');
          var coursesIndex = [];
          if (this.key === undefined) {
            var courseIndex = Math.floor(Math.random() * courses.length);
            for (var i = 0; i < courses.length; i++) {
              while (coursesIndex.indexOf(courseIndex) >= 0) {
                courseIndex = Math.floor(Math.random() * courses.length);
              }
              if (i < amountMaxContainerCourse) {
                containerCourses[id].appendChild(courses[courseIndex].createCourse());
                coursesIndex[i] = courseIndex;
              }
            }
          } else {
            var count = 0;
            for (var _i = 0; _i < courses.length; _i++) {
              if (courses[_i].title.toLowerCase().includes(this.key.toLowerCase()) && count < amountMaxContainerCourse) {
                containerCourses[id].appendChild(courses[_i].createCourse());
                count++;
              }
            }
          }
        },
        writable: false,
        configurable: false
      });
      Object.defineProperty(this, 'key', {
        enumerable: true,
        configurable: false,
        get: function get() {
          return key;
        },
        set: function set(value) {
          if (typeof value !== 'string') return;
          key = value;
        }
      });
    }
    _createClass(Section, [{
      key: "addSection",
      value: function addSection() {
        var section = window.document.createElement('section');
        section.setAttribute('class', "section-main-courses");
        section.innerHTML += "\n        <h2>".concat(this.title, "</h2>\n\n        <div class=\"container-courses-carousel\">\n            <div class=\"main-sec-two-next\"></div>\n            <div class=\"container-courses\"></div>\n            <div class=\"main-sec-two-previous\"></div>\n        </div>");
        mainCourses.appendChild(section);
      }
    }]);
    return Section;
  }();
  sections.push(new Section(0, 'Recomendados para você'));
  sections.push(new Section(1, 'Principais cursos em destaque'));
  sections.push(new Section(2, 'Principais cursos de java', 'java '));
  sections.push(new Section(3, 'Principais cursos de javascript', 'javascript'));
  for (var i in sections) {
    sections[i].addSection();
    sections[i].addCourses();
  }
  var coursesCarouselNext = window.document.getElementsByClassName('main-sec-two-next');
  var coursesCarouselPrevious = window.document.getElementsByClassName('main-sec-two-previous');
  var valueCarouselElement = [],
    containerCourseCarousel,
    numberPrimaryElements = 1,
    widthContainerCourse = Number(window.document.getElementsByClassName('container-courses')[0].getBoundingClientRect().width.toString()),
    numberInnerWidth = window.innerWidth;
  var valueContentCourse = 0,
    control = false;
  setInterval(function () {
    for (var _i2 = 0; _i2 < sections.length; _i2++) {
      if (window.innerWidth !== numberInnerWidth && window.document.querySelectorAll('.section-main-courses .container-courses')[_i2].childElementCount >= 5) {
        widthContainerCourse = Number(window.document.getElementsByClassName('container-courses')[_i2].getBoundingClientRect().width.toString());
      }
    }
    if (window.innerWidth !== numberInnerWidth) {
      var _loop = function _loop(_i3) {
        valueCarouselElement[_i3] = 0;
        window.document.getElementsByClassName('container-course--primary')[_i3].style.marginLeft = "-".concat(valueCarouselElement[_i3], "px");
        setTimeout(function () {
          updateNavigation(_i3);
        }, 1000);
      };
      for (var _i3 = 0; _i3 < sections.length; _i3++) {
        _loop(_i3);
      }
      numberInnerWidth = window.innerWidth;
    }
  }, 100);
  var _loop2 = function _loop2(_i4) {
    window.document.getElementsByClassName('container-course')[numberPrimaryElements - 1].setAttribute('class', 'container-course container-course--primary');
    updateNavigation(_i4);
    function updateNavigation(i) {
      if (window.document.getElementsByClassName('container-course container-course--primary')[i].getBoundingClientRect().right - 20 > window.screenLeft) {
        coursesCarouselPrevious[i].setAttribute('class', 'main-sec-two-previous main-sec-two-previous--hidden');
      } else {
        coursesCarouselPrevious[i].setAttribute('class', 'main-sec-two-previous');
      }
      valueContentCourse = 0;
      for (var j = 0; j <= i; j++) {
        valueContentCourse += Number(window.document.getElementsByClassName('container-courses')[j].childElementCount.toString());
        if (j === i) {
          valueContentCourse -= 1;
        }
      }
      window.document.getElementsByClassName('container-course')[valueContentCourse].setAttribute('class', 'container-course container-course--end');
      if (window.document.querySelectorAll('.section-main-courses .container-courses')[i].childElementCount <= 5 && window.innerWidth >= 1360 || control === true) {
        coursesCarouselNext[i].setAttribute('class', 'main-sec-two-next main-sec-two-next--hidden');
        control = false;
      } else {
        coursesCarouselNext[i].setAttribute('class', 'main-sec-two-next');
      }
    }
    valueCarouselElement.push(0);
    coursesCarouselNext[_i4].addEventListener('click', executeCoursesCarouselNext);
    function executeCoursesCarouselNext() {
      selectContainerCourseCarousel();
      if (window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width === 500 || window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width === 420) {
        valueCarouselElement[_i4] += window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width + 20.1;
      } else {
        valueCarouselElement[_i4] += window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width + 15.9;
      }
      containerCourseCarousel.style.marginLeft = "-".concat(valueCarouselElement[_i4], "px");
      setTimeout(function () {
        updateNavigation(_i4);
      }, 900);
      coursesCarouselNext[_i4].removeEventListener('click', executeCoursesCarouselNext);
      setTimeout(function () {
        coursesCarouselNext[_i4].addEventListener('click', executeCoursesCarouselNext);
      }, 1000);
    }
    coursesCarouselPrevious[_i4].addEventListener('click', executeCoursesCarouselPrevious);
    function executeCoursesCarouselPrevious() {
      selectContainerCourseCarousel();
      if (window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width === 500) {
        valueCarouselElement[_i4] -= window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width + 20;
      } else if (window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width === 420) {
        valueCarouselElement[_i4] -= window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width + 20;
      } else {
        valueCarouselElement[_i4] -= window.document.getElementsByClassName('container-courses')[_i4].getBoundingClientRect().width + 15.8;
      }
      if (valueCarouselElement[_i4] < 0) {
        valueCarouselElement[_i4] = 0;
      }
      containerCourseCarousel.style.marginLeft = "-".concat(valueCarouselElement[_i4], "px");
      setTimeout(function () {
        updateNavigation(_i4);
      }, 900);
      coursesCarouselPrevious[_i4].removeEventListener('click', executeCoursesCarouselPrevious);
      setTimeout(function () {
        coursesCarouselPrevious[_i4].addEventListener('click', executeCoursesCarouselPrevious);
      }, 1000);
    }
    function selectContainerCourseCarousel() {
      containerCourseCarousel = window.document.getElementsByClassName('container-course--primary')[_i4];
    }
    numberPrimaryElements += window.document.querySelectorAll('.section-main-courses .container-courses')[_i4].childElementCount;
  };
  for (var _i4 = 0; _i4 < sections.length; _i4++) {
    _loop2(_i4);
  }
  setInterval(function () {
    var containerCourses = window.document.getElementsByClassName('container-courses');
    var containerCourseCarousel = window.document.getElementsByClassName('container-course--primary');
    for (var _i5 = 0; _i5 < containerCourses.length; _i5++) {
      if (window.innerWidth >= 1359) {
        if (Number(window.document.getElementsByClassName('container-courses')[_i5].getBoundingClientRect().width.toString()) < Number(widthContainerCourse) && window.document.querySelectorAll('.section-main-courses .container-courses')[_i5].childElementCount > 5) {
          configContainerCarousel(_i5);
        }
      } else {
        if (Number(window.document.getElementsByClassName('container-courses')[_i5].getBoundingClientRect().width.toString()) < Number(widthContainerCourse)) {
          configContainerCarousel(_i5);
        }
      }
    }
    function configContainerCarousel(i) {
      control = true;
      containerCourseCarousel[i].setAttribute('class', 'container-course container-course--primary container-course-primary--transition-none');
      valueCarouselElement[i] -= Number(widthContainerCourse) - window.document.getElementsByClassName('container-courses')[i].getBoundingClientRect().width;
      containerCourseCarousel[i].style.marginLeft = "-".concat(valueCarouselElement[i], "px");
      containerCourseCarousel[i].setAttribute('class', 'container-course container-course--primary');
    }
  }, 5);
  coursesArray = courses;
})();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_container_header_container_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/js/container-header-container-hidden */ "./src/assets/js/container-header-container-hidden.js");
/* harmony import */ var _assets_js_container_header_two_container_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/container-header-two-container-selection */ "./src/assets/js/container-header-two-container-selection.js");
/* harmony import */ var _assets_js_main_sec_filter_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/main-sec-filter-courses */ "./src/assets/js/main-sec-filter-courses.js");
/* harmony import */ var _assets_js_main_sec_one_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/main-sec-one-carousel */ "./src/assets/js/main-sec-one-carousel.js");
/* harmony import */ var _assets_js_main_sec_one_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_main_sec_one_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_main_sec_two_courses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/js/main-sec-two-courses */ "./src/assets/js/main-sec-two-courses.js");






/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map