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

/***/ "./test/file1.js":
/*!***********************!*\
  !*** ./test/file1.js ***!
  \***********************/
/***/ (() => {

eval("// import chalk from \"chalk\";\n\n// console.log(chalk);\n\nclass ClassWithStaticMethod {\n    static staticProperty = 'someValue';\n    static staticMethod() {\n      return 'static method has been called.';\n    }\n    static {\n      console.log('Class static initialization block called');\n    }\n  }\n  \n  console.log(ClassWithStaticMethod.staticProperty);\n  console.log(ClassWithStaticMethod.staticMethod());\n\n\n//# sourceURL=webpack://vscode-web/./test/file1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./test/file1.js"]();
/******/ 	
/******/ })()
;