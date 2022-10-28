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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_cdn_skypack_dev_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.skypack.dev/axios */ \"https://cdn.skypack.dev/axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_skypack_dev_axios__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_cdn_skypack_dev_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\nconst quoteContainer = document.getElementById(\"quote-container\");\r\nconst quoteText = document.getElementById(\"quote\");\r\nconst authorText = document.getElementById(\"author\");\r\nconst twitterBtn = document.getElementById(\"twitter\");\r\nconst newquoteBtn = document.getElementById(\"new-quote\");\r\nconst loader = document.getElementById(\"loader\");\r\n\r\nlet apiQuotes = [];\r\n//show Loading\r\nfunction showLoadingSpinner() {\r\n  loader.hidden = false;\r\n  quoteContainer.hidden = true;\r\n}\r\n//hide Loading\r\nfunction removeLoadingSpinner() {\r\n  if (!loader.hidden) {\r\n    quoteContainer.hidden = false;\r\n    loader.hidden = true;\r\n  }\r\n}\r\n//Show New Quote\r\nconst newQuote = () => {\r\n  showLoadingSpinner();\r\n  //make random quote\r\n  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];\r\n  if (!quote.author) {\r\n    authorText.textContent = \"UnKnown\";\r\n  } else {\r\n    authorText.textContent = quote.author;\r\n  }\r\n  if (quote.text.length > 120) {\r\n    quoteText.classList.add(\"long-quote\");\r\n  } else {\r\n    quoteText.classList.remove(\"long-quote\");\r\n  }\r\n  quoteText.textContent = quote.text;\r\n  removeLoadingSpinner();\r\n};\r\n\r\n//Get Quotes From API\r\nasync function getQuote() {\r\n  showLoadingSpinner();\r\n  const apiUrl = \"https://type.fit/api/quotes\";\r\n  try {\r\n    const res = await https_cdn_skypack_dev_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(apiUrl);\r\n    apiQuotes = res.data;\r\n    console.log(apiQuotes)\r\n    newQuote();\r\n    removeLoadingSpinner();\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n//tweet quote\r\nfunction tweetQuote() {\r\n  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}\r\n    -${authorText.textContent}`;\r\n  window.open(twitterUrl, \"_blank\");\r\n}\r\n//Event Listeners\r\nnewquoteBtn.addEventListener(\"click\", newQuote);\r\ntwitterBtn.addEventListener(\"click\", tweetQuote);\r\ngetQuote();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://---template-quote-generator/./src/script.js?");

/***/ }),

/***/ "https://cdn.skypack.dev/axios":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;