"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/formlog.js":
/*!*************************************!*\
  !*** ./pages/components/formlog.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormLog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction login(email, password) {\n    if (password == userDefault.senha & email == userDefault.email) {\n        return alert(\"Certo\");\n    } else {\n        alert(\"Tente Novamente\");\n    }\n}\nfunction FormLog() {\n    var userDefault1 = {\n        email: \"user1@ifms.com\",\n        senha: \"ifms2022\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: \"login()\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"E-mail\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"email\",\n                type: \"email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Senha\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"password\",\n                type: \"password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n};\n_c = FormLog;\nvar _c;\n$RefreshReg$(_c, \"FormLog\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Zvcm1sb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFDO0lBQzNCLElBQUdBLFFBQVEsSUFBSUMsV0FBVyxDQUFDQyxLQUFLLEdBQUdILEtBQUssSUFBSUUsV0FBVyxDQUFDRixLQUFLLEVBQUM7UUFDMUQsT0FBT0ksS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QixNQUFJO1FBQ0RBLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztLQUMzQjtDQUNKO0FBRWMsU0FBU0MsT0FBTyxHQUFFO0lBQzdCLElBQU1ILFlBQVcsR0FBRztRQUNoQkYsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkcsS0FBSyxFQUFFLFVBQVU7S0FDcEI7SUFHRCxxQkFFSSw4REFBQ0csTUFBSTtRQUFDQyxRQUFRLEVBQUMsU0FBUzs7MEJBQ3BCLDhEQUFDQyxPQUFLOzBCQUFDLFFBQU07Ozs7O29CQUFROzBCQUNyQiw4REFBQ0MsT0FBSztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87Z0JBQUNDLElBQUksRUFBQyxPQUFPOzs7OztvQkFBRTswQkFDaEMsOERBQUNILE9BQUs7MEJBQUMsT0FBSzs7Ozs7b0JBQVE7MEJBQ3BCLDhEQUFDQyxPQUFLO2dCQUFDQyxFQUFFLEVBQUMsVUFBVTtnQkFBQ0MsSUFBSSxFQUFDLFVBQVU7Ozs7O29CQUFFOzBCQUN0Qyw4REFBQ0MsUUFBTTtnQkFBQ0QsSUFBSSxFQUFDLFFBQVE7MEJBQUMsT0FBSzs7Ozs7b0JBQVM7Ozs7OztZQUNqQyxDQUNWO0NBQ0o7QUFqQnVCTixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZm9ybWxvZy5qcz81MTI3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCl7XHJcbiAgICBpZihwYXNzd29yZCA9PSB1c2VyRGVmYXVsdC5zZW5oYSAmIGVtYWlsID09IHVzZXJEZWZhdWx0LmVtYWlsKXtcclxuICAgICAgICByZXR1cm4gYWxlcnQoXCJDZXJ0b1wiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYWxlcnQoXCJUZW50ZSBOb3ZhbWVudGVcIilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUxvZygpe1xyXG4gICAgY29uc3QgdXNlckRlZmF1bHQgPSB7XHJcbiAgICAgICAgZW1haWw6IFwidXNlcjFAaWZtcy5jb21cIixcclxuICAgICAgICBzZW5oYTogXCJpZm1zMjAyMlwiXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PVwibG9naW4oKVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbD5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyRGVmYXVsdCIsInNlbmhhIiwiYWxlcnQiLCJGb3JtTG9nIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsImlkIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/formlog.js\n"));

/***/ })

});