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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appendHome = () => {\n  const content = document.createElement(\"div\");\n  const titleWrapper = document.createElement(\"div\");\n  const title = document.createElement(\"div\");\n  const infoWrapper = document.createElement(\"div\");\n\n  const card = document.createElement(\"div\");\n  const img = document.createElement(\"img\");\n\n  //Atributes for above\n  content.setAttribute(\"id\", \"content\");\n\n  titleWrapper.classList.add(\"title-container\");\n  title.classList.add(\"title\");\n\n  infoWrapper.classList.add(\"info-container\");\n  card.classList.add(\"card\", \"radius\");\n  img.classList.add(\"radius\");\n  img.setAttribute(\"src\", \"./imgs/american-eskimo.jpg\");\n\n  // no attributes variables\n  const ingTitle = document.createElement(\"h2\");\n  const loremIpsum = document.createElement(\"p\");\n\n  title.innerHTML = \"<h1>Find dog breed and adapt from us</h1>\";\n  ingTitle.textContent = \"FEATURED DOG\";\n  loremIpsum.textContent =\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos dolorum, exercitationem, eos nesciunt praesentium explicabo illum accusantium maxime.\";\n\n  const panel = document.querySelector(\".panel\");\n  panel.parentNode.insertBefore(content, panel.nextSibling);\n  content.append(titleWrapper);\n  titleWrapper.append(title);\n  content.append(infoWrapper);\n  infoWrapper.append(card);\n\n  card.append(img);\n  card.append(ingTitle);\n  card.append(loremIpsum);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHome);\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.js */ \"./src/panel.js\");\n\n\n\n(0,_panel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/index.js?");

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendPanels)\n/* harmony export */ });\nconst panels = (() => {\n  // header Variables\n  let header = document.createElement(\"header\");\n  let nav = document.createElement(\"nav\");\n  let links = document.createElement(\"a\");\n  let body = document.querySelector(\"body\");\n\n  // Footer variables\n  const footer = document.createElement(\"footer\");\n  const github = document.createElement(\"div\");\n  // const addressTitle = document.createElement(\"h2\");\n  // const address = document.createElement(\"p\");\n  // const hoursTitle = document.createElement(\"h2\");\n  // const hours = document.createElement(\"p\");\n\n  const appendHeader = () => {\n    header.classList.add(\"panel\");\n    body.prepend(header);\n    header.append(nav);\n    nav.append(links);\n\n    document.querySelector(\"nav a\").setAttribute(\"id\", \"1\");\n    links.textContent = \"Home\";\n    nav.append(links.cloneNode());\n    document.querySelector(\"nav a:last-child\").textContent = \"Dogs\";\n    document.querySelector(\"nav a\").setAttribute(\"id\", \"2\");\n    nav.append(links.cloneNode());\n    document.querySelector(\"nav a\").setAttribute(\"id\", \"3\");\n    document.querySelector(\"nav a:last-child\").textContent = \"Contact\";\n    nav.append(links.cloneNode());\n  };\n\n  const appendFooter = () => {\n    footer.classList.add(\"panel\");\n    github.setAttribute(\"href\", \"https://github.com/zillur-rgb\");\n    github.innerHTML = `<p>copyright 2022 MD Zillur Rahman</p>`;\n    body.append(footer);\n    footer.append(github);\n  };\n\n  return {\n    appendHeader,\n    appendFooter,\n  };\n})();\n\nfunction appendPanels() {\n  panels.appendHeader(), panels.appendFooter();\n}\n\n\n//# sourceURL=webpack://dog-breed-js-webpack/./src/panel.js?");

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