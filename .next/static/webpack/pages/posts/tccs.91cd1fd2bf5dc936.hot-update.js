"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/tccs",{

/***/ "./pages/posts/tccs.js":
/*!*****************************!*\
  !*** ./pages/posts/tccs.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ TCCs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./pages/components/header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ \"./pages/components/pagination.js\");\n/* harmony import */ var _components_paginaselector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paginaselector */ \"./pages/components/paginaselector.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_cardtcc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cardtcc */ \"./pages/components/cardtcc.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction TCCs(param) {\n    var pesquisas = param.pesquisas;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var keys = [\n        \"titulo\"\n    ];\n    var search = function(currentpesquisas) {\n        return currentpesquisas.filter(function(currentpesquisas) {\n            return keys.some(function(key) {\n                return currentpesquisas[key].toLowerCase().includes(queryn);\n            });\n        });\n    };\n    /*const search = (currentpesquisas)=>{\r\n  return currentpesquisas.filter(currentpesquisas=> currentpesquisas.titulo.toLowerCase().includes(query))}*/ var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10), itensperpage = ref1[0], setItensperpage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentpage = ref2[0], setCurrentPage = ref2[1];\n    var pages = Math.ceil(pesquisas.length / itensperpage);\n    var startIndex = currentpage * itensperpage;\n    var endIndex = startIndex + itensperpage;\n    var currentpesquisas = pesquisas.slice(startIndex, endIndex);\n    var queryn = query.toLowerCase();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCurrentPage(0);\n    }, [\n        itensperpage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid g-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                setQuery: setQuery\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: \"/post/postcc\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Cadastrar Tcc\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                    lineNumber: 46,\n                    columnNumber: 39\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cardtcc__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                currentpesquisas: currentpesquisas,\n                search: search\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().paginador),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_paginaselector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        itensperpage: itensperpage,\n                        setItensperpage: setItensperpage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        pages: pages,\n                        setCurrentPage: setCurrentPage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\FrontEnd-Admin\\\\pages\\\\posts\\\\tccs.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n};\n_s(TCCs, \"/YiSvu1iEcjevlHEARPcV64JA+4=\");\n_c = TCCs;\nvar _c;\n$RefreshReg$(_c, \"TCCs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy90Y2NzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQzBDO0FBQ0U7QUFDTTtBQUNZO0FBQ2xCO0FBQ0Y7QUFDYjs7QUFZZCxTQUFTUSxJQUFJLENBQUMsS0FBVyxFQUFDO1FBQVosU0FBVSxHQUFWLEtBQVcsQ0FBVkMsU0FBUzs7SUFDdkMsSUFBMEJSLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JTLEtBQUssR0FBY1QsR0FBWSxHQUExQixFQUFFVSxRQUFRLEdBQUlWLEdBQVksR0FBaEI7SUFFdEIsSUFBTVcsSUFBSSxHQUFHO1FBQUMsUUFBUTtLQUFDO0lBRXZCLElBQU1DLE1BQU0sR0FBRyxTQUFDQyxnQkFBZ0IsRUFBSztRQUNuQyxPQUFPQSxnQkFBZ0IsQ0FBQ0MsTUFBTSxDQUFDLFNBQUNELGdCQUFnQjttQkFBS0YsSUFBSSxDQUFDSSxJQUFJLENBQUNDLFNBQUFBLEdBQUc7dUJBQUVILGdCQUFnQixDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2FBQUEsQ0FBQztTQUFBLENBQUM7S0FDM0g7SUFDRDtJQU1BLElBQXNDbkIsSUFBVyxHQUFYQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFDc0IsV0FBVyxHQUFvQnRCLElBQVcsR0FBL0IsRUFBRXVCLGNBQWMsR0FBSXZCLElBQVcsR0FBZjtJQUVsQyxJQUFNd0IsS0FBSyxpREFBUUUsRUFBSSxDQUFDbEIsU0FBUyxDQUFDbUIsTUFBTSxHQUFHUCxZQUFZLENBQUM7SUFDeEQsSUFBTVEsVUFBVSxHQUFHTixXQUFXLEdBQUdGLFlBQVk7SUFDN0MsSUFBTVMsUUFBUSxHQUFHRCxVQUFVLEdBQUdSLFlBQVk7SUFDMUMsSUFBTVAsZ0JBQWdCLEdBQUdMLFNBQVMsQ0FBQ3NCLEtBQUssQ0FBQ0Y7SUFFekMsSUFBTVQsTUFBTSxHQUFHVixLQUFLLENBQUNRLFdBQVcsRUFBRTtJQUNsQ2hCLFNBQVMsQ0FBQyxXQUFJO29EQUFDc0IsU0FBYyxDQUFDLENBQUMsQ0FBQztLQUFDLEVBQUU7UUFBQ0g7S0FBYSxDQUFDO0lBQzlDO1FBQ1NZLFNBQVMsRUFBQywyRUFBcUI7OztnQkFDeEJ0QixRQUFRLEVBQUVBLDZEQUFBQSxDQUFROzs7OztvQkFBRzs7Z0JBQ3ZCdUIsSUFBSSxFQUFDLG9IQUFjOzBCQUFDOzhCQUFJLHVFQUFhOzs7Ozt3QkFBSzs7Ozs7b0JBQU87O2dCQUVoRHBCLFVBQUFBLDZEQUFnQixDQUFHQSwyREFBQUE7Z0JBQWtCRCxNQUFNLEVBQUVBLE1BQU07Ozs7O29CQUFVOztnQkFDbkVvQixTQUFTLDhEQUFRLENBQUNHOzs7d0JBQ0hmLFVBQUFBLDZEQUFjQSxDQUFBQSxrRUFBWTt3QkFBRUMsZUFBZSxFQUFFQTs7Ozs7NEJBQWtCOzt3QkFDdkVHLEtBQUssRUFBRUEsR0FBQUEsNkRBQUs7d0JBQUVEOzs7Ozs0QkFBa0M7Ozs7OztvQkFDdEQ7Ozs7OztZQUNBLENBQ1Q7Q0FDSjs7QUFuQ3VCaEIsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy90Y2NzLmpzPzM3NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFBhZ2luYXRpb25TZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdpbmFzZWxlY3RvclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkdGNjXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL0JhY2tFbmQtT1JNLVRDQy51bmRlcnRhazNyLnJlcGwuY28vdGNjJylcclxuICAgIGNvbnN0IHBlc3F1aXNhcyA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcGVzcXVpc2FzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUQ0NzKHtwZXNxdWlzYXN9KXtcclxuY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuY29uc3Qga2V5cyA9IFtcInRpdHVsb1wiXVxyXG5cclxuY29uc3Qgc2VhcmNoID0gKGN1cnJlbnRwZXNxdWlzYXMpID0+IHtcclxuICByZXR1cm4gY3VycmVudHBlc3F1aXNhcy5maWx0ZXIoKGN1cnJlbnRwZXNxdWlzYXMpID0+IGtleXMuc29tZShrZXk9PmN1cnJlbnRwZXNxdWlzYXNba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5bikpKVxyXG59XHJcbi8qY29uc3Qgc2VhcmNoID0gKGN1cnJlbnRwZXNxdWlzYXMpPT57XHJcbiAgcmV0dXJuIGN1cnJlbnRwZXNxdWlzYXMuZmlsdGVyKGN1cnJlbnRwZXNxdWlzYXM9PiBjdXJyZW50cGVzcXVpc2FzLnRpdHVsby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSl9Ki9cclxuXHJcbiAgXHJcblxyXG5jb25zdCBbaXRlbnNwZXJwYWdlLCBzZXRJdGVuc3BlcnBhZ2VdID0gdXNlU3RhdGUoMTApXHJcbmNvbnN0IFtjdXJyZW50cGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMClcclxuXHJcbmNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKHBlc3F1aXNhcy5sZW5ndGggLyBpdGVuc3BlcnBhZ2UpXHJcbmNvbnN0IHN0YXJ0SW5kZXggPSBjdXJyZW50cGFnZSAqIGl0ZW5zcGVycGFnZVxyXG5jb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBpdGVuc3BlcnBhZ2VcclxuY29uc3QgY3VycmVudHBlc3F1aXNhcyA9IHBlc3F1aXNhcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcclxuXHJcbmNvbnN0IHF1ZXJ5biA9IHF1ZXJ5LnRvTG93ZXJDYXNlKClcclxudXNlRWZmZWN0KCgpPT57c2V0Q3VycmVudFBhZ2UoMCl9LCBbaXRlbnNwZXJwYWdlXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBnLTBcIj5cclxuICAgICAgICAgICAgPEhlYWRlciBzZXRRdWVyeT17c2V0UXVlcnl9Lz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L3Bvc3RjY1wiPjxoMj5DYWRhc3RyYXIgVGNjPC9oMj48L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGFibGUgY3VycmVudHBlc3F1aXNhcyA9e2N1cnJlbnRwZXNxdWlzYXN9IHNlYXJjaD17c2VhcmNofT48L1RhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hZG9yfT5cclxuICAgICAgICA8UGFnaW5hdGlvblNlbGVjdG9yIGl0ZW5zcGVycGFnZT17aXRlbnNwZXJwYWdlfSBzZXRJdGVuc3BlcnBhZ2U9e3NldEl0ZW5zcGVycGFnZX0vPlxyXG4gICAgICAgIDxQYWdpbmF0aW9uIHBhZ2VzPXtwYWdlc30gc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGFnaW5hdGlvbiIsIlBhZ2luYXRpb25TZWxlY3RvciIsInN0eWxlcyIsIlRhYmxlIiwiTGluayIsIlRDQ3MiLCJwZXNxdWlzYXMiLCJxdWVyeSIsInNldFF1ZXJ5Iiwia2V5cyIsInNlYXJjaCIsImN1cnJlbnRwZXNxdWlzYXMiLCJmaWx0ZXIiLCJzb21lIiwia2V5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInF1ZXJ5biIsIml0ZW5zcGVycGFnZSIsInNldEl0ZW5zcGVycGFnZSIsImN1cnJlbnRwYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaDIiLCJwYWdpbmFkb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/tccs.js\n"));

/***/ })

});