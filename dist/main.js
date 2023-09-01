/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.querySelector(\"#content\");\n\nfunction updateDisplay() {\n    content.innerHTML = \"\";\n    content.appendChild(createHeader());\n    content.appendChild(createBody());\n};\n\nfunction createHeader() {\n    const header = document.createElement(\"div\");\n    header.setAttribute(\"id\", \"header\");\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Burger Barn\";\n    header.appendChild(title);\n    header.appendChild(createNavbar());\n    return header;\n}\n\nfunction createNavbar() {\n    const navbar = document.createElement(\"nav\");\n    const ul = document.createElement(\"ul\");\n    ul.appendChild(createButton(\"about\"));\n    ul.appendChild(createButton(\"menu\"));\n    ul.appendChild(createButton(\"contact\"));\n    navbar.appendChild(ul);\n    return navbar;\n}\n\nfunction createButton(page) {\n    const li  = document.createElement(\"li\");\n    const button = document.createElement(\"button\");\n    button.setAttribute(\"id\", page);\n    button.setAttribute(\"type\", \"button\");\n    button.textContent = page.charAt(0).toUpperCase() + page.slice(1);\n    // add event listener\n    li.appendChild(button);\n    return li;\n}\n\nfunction createBody() {\n    const body = document.createElement(\"div\");\n    body.setAttribute(\"id\", \"body\");\n    return body; \n}\n\nupdateDisplay();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;