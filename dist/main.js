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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_about_burgers_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/about-burgers.jpg */ \"./src/images/about-burgers.jpg\");\n\n\nfunction loadHome() {\n    const body = document.querySelector(\"#body\");\n\n    const img = new Image();\n    img.src = _images_about_burgers_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"Burgers\";\n\n    body.appendChild(createParagraph(\n        `Come to Burger Barn for the best burger's around! Whether you're \n        looking to try one of our unique, exotic specials, or just want to enjoy\n        a tried and true classic, Burger Barn is the place for you! We use only\n        the highest quality ingredients, and everything is made to order.`));\n    body.appendChild(img);\n}\n\nfunction createParagraph(text) {\n    const p = document.createElement(\"p\");\n    p.textContent = text;\n    return p;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\nfunction loadWebsite() {\n    const body = document.querySelector('body');\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n    content.innerHTML = \"\";\n    content.appendChild(createHeader());\n    content.appendChild(createBody());\n    body.appendChild(content);\n    (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nfunction createHeader() {\n    const header = document.createElement(\"div\");\n    header.setAttribute(\"id\", \"header\");\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Burger Barn\";\n    header.appendChild(title);\n    header.appendChild(createNavbar());\n    return header;\n}\n\nfunction createNavbar() {\n    const navbar = document.createElement(\"nav\");\n    const ul = document.createElement(\"ul\");\n    ul.appendChild(createButton(\"about\"));\n    ul.appendChild(createButton(\"menu\"));\n    ul.appendChild(createButton(\"contact\"));\n    navbar.appendChild(ul);\n    return navbar;\n}\n\nfunction createButton(page) {\n    const li  = document.createElement(\"li\");\n    const button = document.createElement(\"button\");\n    button.setAttribute(\"id\", page);\n    button.setAttribute(\"type\", \"button\");\n    button.textContent = page.charAt(0).toUpperCase() + page.slice(1);\n    // add event listener\n    li.appendChild(button);\n    return li;\n}\n\nfunction createBody() {\n    const body = document.createElement(\"div\");\n    body.setAttribute(\"id\", \"body\");\n    return body; \n}\n\nloadWebsite();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/images/about-burgers.jpg":
/*!**************************************!*\
  !*** ./src/images/about-burgers.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74b4de7225d9cf574d78.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/about-burgers.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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