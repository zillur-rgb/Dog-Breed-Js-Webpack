/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendContact)\n/* harmony export */ });\nconst createContact = (() => {\n  const content = document.createElement(\"div\");\n  const contactTitle = document.createElement(\"h1\");\n  const dogsContainer = document.createElement(\"div\");\n  const contactCard = document.createElement(\"div\");\n  const imgWrapper = document.createElement(\"div\");\n  const img = document.createElement(\"img\");\n  const contactWrapper = document.createElement(\"div\");\n  const contactUsTitle = document.createElement(\"h2\");\n  const contactUsPara = document.createElement(\"p\");\n\n  content.setAttribute(\"id\", \"content\");\n  contactTitle.setAttribute(\"id\", \"page-title\");\n  contactTitle.innerHTML = `<u id='dogs-title'>Contact</u>`;\n  dogsContainer.classList.add(\"dogs-container\");\n  contactCard.classList.add(\"contact-card\", \"radius\");\n  imgWrapper.classList.add(\"img-wrapper\");\n  img.classList.add(\"radius\");\n  img.setAttribute(\"src\", \"./imgs/american-eskimo.jpg\");\n  contactWrapper.classList.add(\"contact-wrapper\");\n  contactUsTitle.textContent = \"Contact Us\";\n  contactUsPara.innerHTML =\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam<br><br>Signissimos dolorum, exercitationem, eos nesciunt praesentium  explicabo illum accusantium maxime.\";\n\n  const setContactTitle = () => {\n    const panel = document.querySelector(\".panel\");\n    panel.parentNode.insertBefore(content, contactTitle.nextSibling);\n    panel.parentNode.insertBefore(content, contactTitle.nextSibling);\n  };\n\n  const displayCard = () => {\n    const panel = document.querySelector(\".panel\");\n    panel.parentNode.insertBefore(content, contactTitle.nextSibling);\n    content.append(dogsContainer);\n    dogsContainer.append(contactCard);\n    contactCard.append(imgWrapper);\n    imgWrapper.append(img);\n    contactCard.append(contactWrapper);\n    contactWrapper.append(contactUsTitle);\n    contactWrapper.append(contactUsPara);\n  };\n\n  return {\n    setContactTitle,\n    displayCard,\n  };\n})();\n\nfunction appendContact() {\n  createContact.setContactTitle();\n  createContact.displayCard();\n}\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/contact.js?");

/***/ }),

/***/ "./src/dogs.js":
/*!*********************!*\
  !*** ./src/dogs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendDogs)\n/* harmony export */ });\nconst createDogsPage = (() => {\n  const content = document.createElement(\"div\");\n  const dogsContainer = document.createElement(\"div\");\n  const dogsCard = document.createElement(\"div\");\n  const img = document.createElement(\"img\");\n  const subtitle = document.createElement(\"h2\");\n  const description = document.createElement(\"p\");\n  const dogsPageTitle = document.createElement(\"h1\");\n\n  dogsPageTitle.setAttribute(\"id\", \"page-title\");\n  content.setAttribute(\"id\", \"content\");\n  dogsContainer.classList.add(\"dogs-container\");\n  dogsCard.classList.add(\"dogs-card\", \"radius\");\n  img.classList.add(\"radius\");\n  img.setAttribute(\"src\", \"./imgs/american-eskimo.jpg\");\n  subtitle.textContent = \"American Eskimo\";\n  description.textContent =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\";\n\n  const setDogsTitle = () => {\n    dogsPageTitle.innerHTML = `<u id='dogs-Page-title'>All Dogs</u>`;\n    const panel = document.querySelector(\".panel\");\n    panel.parentNode.insertBefore(dogsPageTitle, panel.nextSibling);\n    panel.parentNode.insertBefore(content, dogsPageTitle.nextSibling);\n  };\n\n  const displayCards = () => {\n    const panel = document.querySelector(\".panel\");\n    panel.parentNode.insertBefore(content, dogsPageTitle.nextSibling);\n    content.append(dogsContainer);\n    dogsCard.append(img);\n    dogsCard.append(subtitle);\n    dogsCard.append(description);\n\n    for (let i = 0; i < 6; i++) {\n      dogsContainer.append(dogsCard.cloneNode(true));\n    }\n  };\n\n  return {\n    setDogsTitle,\n    displayCards,\n  };\n})();\n\nfunction appendDogs() {\n  createDogsPage.setDogsTitle(), createDogsPage.displayCards();\n}\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/dogs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appendHome = () => {\n  const content = document.createElement(\"div\");\n  const titleWrapper = document.createElement(\"div\");\n  const title = document.createElement(\"div\");\n  const infoWrapper = document.createElement(\"div\");\n  const card = document.createElement(\"div\");\n  const img = document.createElement(\"img\");\n\n  //Atributes for above\n  content.setAttribute(\"id\", \"content\");\n  titleWrapper.classList.add(\"title-container\");\n  title.classList.add(\"title\");\n  infoWrapper.classList.add(\"info-container\");\n  card.classList.add(\"card\", \"radius\");\n  img.classList.add(\"radius\");\n  img.setAttribute(\"src\", \"./imgs/american-eskimo.jpg\");\n\n  // no attributes variables\n  const ingTitle = document.createElement(\"h2\");\n  const loremIpsum = document.createElement(\"p\");\n\n  title.innerHTML = \"<h1>Find dog breed and adapt from us</h1>\";\n  ingTitle.textContent = \"FEATURED DOG\";\n  loremIpsum.textContent =\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos dolorum, exercitationem, eos nesciunt praesentium explicabo illum accusantium maxime.\";\n\n  const panel = document.querySelector(\".panel\");\n  panel.parentNode.insertBefore(content, panel.nextSibling);\n  content.append(titleWrapper);\n  titleWrapper.append(title);\n  content.append(infoWrapper);\n  infoWrapper.append(card);\n\n  card.append(img);\n  card.append(ingTitle);\n  card.append(loremIpsum);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHome);\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.js */ \"./src/panel.js\");\n/* harmony import */ var _dogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dogs.js */ \"./src/dogs.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_panel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// appendDogs();\n// appendContact();\n\nconst init = (() => {\n  const removeContent = () => {\n    let content = document.querySelector(\"#content\");\n    content.remove();\n    let title = document.querySelector(\"#page-title\");\n    if (title) {\n      title.remove();\n    }\n  };\n\n  const setEventListeners = () => {\n    const home = document.querySelector(\"#one\");\n    const dogs = document.querySelector(\"#two\");\n    const contact = document.querySelector(\"#three\");\n\n    home.addEventListener(\"click\", () => {\n      removeContent();\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    dogs.addEventListener(\"click\", () => {\n      removeContent();\n      (0,_dogs_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    contact.addEventListener(\"click\", () => {\n      removeContent();\n      (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n  };\n  return {\n    setEventListeners,\n  };\n})();\n\ninit.setEventListeners();\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/index.js?");

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendPanels)\n/* harmony export */ });\nconst panels = (() => {\n  // header Variables\n  const header = document.createElement(\"header\");\n  const nav = document.createElement(\"nav\");\n  const links = document.createElement(\"a\");\n  const body = document.querySelector(\"body\");\n\n  // Footer variables\n  const footer = document.createElement(\"footer\");\n  const github = document.createElement(\"div\");\n  // const addressTitle = document.createElement(\"h2\");\n  // const address = document.createElement(\"p\");\n  // const hoursTitle = document.createElement(\"h2\");\n  // const hours = document.createElement(\"p\");\n\n  const appendHeader = () => {\n    header.classList.add(\"panel\");\n    body.prepend(header);\n    header.append(nav);\n    nav.append(links);\n\n    document.querySelector(\"nav a\").setAttribute(\"id\", \"two\");\n    links.textContent = \"Home\";\n    nav.append(links.cloneNode());\n    document.querySelector(\"nav a:last-child\").textContent = \"Dogs\";\n    document.querySelector(\"nav a\").setAttribute(\"id\", \"three\");\n    nav.append(links.cloneNode());\n    document.querySelector(\"nav a\").setAttribute(\"id\", \"one\");\n    document.querySelector(\"nav a:last-child\").textContent = \"Contact\";\n  };\n\n  const appendFooter = () => {\n    footer.classList.add(\"panel\");\n    github.setAttribute(\"href\", \"https://github.com/zillur-rgb\");\n    github.innerHTML = `<p>copyright 2022 MD Zillur Rahman</p>`;\n    body.append(footer);\n    footer.append(github);\n  };\n\n  return {\n    appendHeader,\n    appendFooter,\n  };\n})();\n\nfunction appendPanels() {\n  panels.appendHeader(), panels.appendFooter();\n}\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/panel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;