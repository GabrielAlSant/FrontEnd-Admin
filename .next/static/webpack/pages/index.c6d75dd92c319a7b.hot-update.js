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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormLog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction FormLog() {\n    var Login1 = function Login1(email, password) {\n        if (password == userDefault.senha & email == userDefault.email) {\n            return console.log(\"Certo\");\n        } else {\n            return console.log(\"Tente Novamente\");\n        }\n    };\n    var userDefault = {\n        email: \"user1@ifms.com\",\n        senha: \"ifms2022\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: Login1(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                    children: \"P\\xe1gina de Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"E-mail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: \"email\",\n                    type: \"email\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Senha\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: \"password\",\n                    type: \"password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luizp\\\\Documents\\\\GitHub\\\\FrontEnd-Admin\\\\pages\\\\components\\\\formlog.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n_c = FormLog;\nvar _c;\n$RefreshReg$(_c, \"FormLog\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Zvcm1sb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxPQUFPLEdBQUU7UUFNcEJDLE1BQU0sR0FBZixTQUFTQSxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFDO1FBQzVCLElBQUdBLFFBQVEsSUFBSUMsV0FBVyxDQUFDQyxLQUFLLEdBQUdILEtBQUssSUFBSUUsV0FBVyxDQUFDRixLQUFLLEVBQUM7WUFDMUQsT0FBT0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQzlCLE1BQUk7WUFDRCxPQUFPRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztTQUN4QztLQUNKO0lBWEQsSUFBTUgsV0FBVyxHQUFHO1FBQ2hCRixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCRyxLQUFLLEVBQUUsVUFBVTtLQUNwQjtJQVNELHFCQUNJLDhEQUFDRyxNQUFJO1FBQUNDLFFBQVEsRUFBRVIsTUFBTSxFQUFFO2tCQUNwQiw0RUFBQ1MsVUFBUTs7OEJBQ0wsOERBQUNDLFFBQU07OEJBQUMsb0JBQWU7Ozs7O3dCQUFTOzhCQUNwQyw4REFBQ0MsT0FBSzs4QkFBQyxRQUFNOzs7Ozt3QkFBUTs4QkFDckIsOERBQUNDLE9BQUs7b0JBQUNDLEtBQUssRUFBQyxPQUFPO29CQUFDQyxJQUFJLEVBQUMsT0FBTzs7Ozs7d0JBQUU7OEJBQ25DLDhEQUFDSCxPQUFLOzhCQUFDLE9BQUs7Ozs7O3dCQUFROzhCQUNwQiw4REFBQ0MsT0FBSztvQkFBQ0MsS0FBSyxFQUFDLFVBQVU7b0JBQUNDLElBQUksRUFBQyxVQUFVOzs7Ozt3QkFBRTs4QkFDekMsOERBQUNDLFFBQU07b0JBQUNELElBQUksRUFBQyxRQUFROzhCQUFDLE9BQUs7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ3pCOzs7OztZQUNSLENBQ1Y7Q0FDSjtBQXpCdUJmLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9mb3JtbG9nLmpzPzUxMjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUxvZygpe1xyXG4gICAgY29uc3QgdXNlckRlZmF1bHQgPSB7XHJcbiAgICAgICAgZW1haWw6IFwidXNlcjFAaWZtcy5jb21cIixcclxuICAgICAgICBzZW5oYTogXCJpZm1zMjAyMlwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9naW4xKGVtYWlsLCBwYXNzd29yZCl7XHJcbiAgICAgICAgaWYocGFzc3dvcmQgPT0gdXNlckRlZmF1bHQuc2VuaGEgJiBlbWFpbCA9PSB1c2VyRGVmYXVsdC5lbWFpbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkNlcnRvXCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlRlbnRlIE5vdmFtZW50ZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e0xvZ2luMSgpfT5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5Qw6FnaW5hIGRlIExvZ2luPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiLz5cclxuICAgICAgICAgICAgPGxhYmVsPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkZvcm1Mb2ciLCJMb2dpbjEiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckRlZmF1bHQiLCJzZW5oYSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJmaWVsZHNldCIsImxlZ2VuZCIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsInR5cGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/formlog.js\n"));

/***/ })

});