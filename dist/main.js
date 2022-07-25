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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoItem */ \"./src/modules/todoItem.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectManager */ \"./src/modules/projectManager.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n\n\n\n\n\n\n// const today = new Date();\n// console.log(format(today, \"dd-MM-yyyy\"));\n\nconst projectManager = new _modules_projectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst defaultProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"default\");\nconst exampleTodo = new _modules_todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"my todo\", \"this is an example todo\", new Date(), 1);\n\nprojectManager.addProject(defaultProject);\ndefaultProject.addTodo(exampleTodo);\n\nconst otherProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"other\");\nconst demoProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"demo\");\n\nprojectManager.addProject(otherProject);\nprojectManager.addProject(demoProject);\n\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)([... projectManager.projects]);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.todos = [];\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/projectManager.js":
/*!***************************************!*\
  !*** ./src/modules/projectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectManager {\n    constructor() {\n        this.activeProject = null;\n        this.projects = [];\n    }\n\n    addProject(project) {\n        this.projects.push(project);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);\n\n//# sourceURL=webpack://todo-list/./src/modules/projectManager.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _util_cleanContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/cleanContainer */ \"./src/util/cleanContainer.js\");\n\n\nconst projectsDiv = document.querySelector(\".projects\");\nconst todosDiv = document.querySelector(\".todos\");\n\nfunction renderProjects(projects) {\n    (0,_util_cleanContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectsDiv); // first we have to remove old projects\n    projects.forEach((project) => {\n        const projectParagraph = document.createElement(\"p\");\n        projectParagraph.textContent = project.name;\n        console.log(projectParagraph);\n        projectsDiv.appendChild(projectParagraph);\n    });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/todoItem.js":
/*!*********************************!*\
  !*** ./src/modules/todoItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoItem {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n\n//# sourceURL=webpack://todo-list/./src/modules/todoItem.js?");

/***/ }),

/***/ "./src/util/cleanContainer.js":
/*!************************************!*\
  !*** ./src/util/cleanContainer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cleanContainer)\n/* harmony export */ });\nfunction cleanContainer(container) {\n    while(container.firstChild) {\n        container.removeChild(container.firstChild);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/util/cleanContainer.js?");

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