/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--8-2!./node_modules/postcss-loader/src??ref--8-3!./node_modules/sass-loader/dist/cjs.js??ref--8-4!./src/assets/scss/main.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--8-2!./node_modules/postcss-loader/src??ref--8-3!./node_modules/sass-loader/dist/cjs.js??ref--8-4");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/item-quantity-dropdown.min.css":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--9-2!./node_modules/postcss-loader/src??ref--9-3!./src/assets/css/item-quantity-dropdown.min.css ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/item-quantity-dropdown.min.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--9-2!./node_modules/postcss-loader/src??ref--9-3");

/***/ }),

/***/ "./src/assets/css/item-quantity-dropdown.min.css":
/*!*******************************************************!*\
  !*** ./src/assets/css/item-quantity-dropdown.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--9-2!../../../node_modules/postcss-loader/src??ref--9-3!./item-quantity-dropdown.min.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/item-quantity-dropdown.min.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/assets/css/item-quantity-dropdown.min.css?");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--8-2!../../../node_modules/postcss-loader/src??ref--8-3!../../../node_modules/sass-loader/dist/cjs.js??ref--8-4!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ */ \"./src/js/index.js\");\n/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ \"./node_modules/popper.js/dist/esm/popper.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-jquery-ui */ \"./node_modules/webpack-jquery-ui/index.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-jquery-ui/css */ \"./node_modules/webpack-jquery-ui/css.js\");\n/* harmony import */ var webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n// JS\n\n\n\n // import 'air-datepicker'\n// SCSS\n\n // CSS (example)\n// import './assets/css/main.css'\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _iq_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iq-dropdown */ \"./src/js/iq-dropdown.js\");\n/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-js */ \"./node_modules/i18n-js/app/assets/javascripts/i18n.js\");\n/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18n_js__WEBPACK_IMPORTED_MODULE_1__);\n// Main js file\n //import './i18n'\n//import './item-quantity-dropdown.min.js'\n//import '../assets/css/item-quantity-dropdown.min.css'\n\n\ni18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.translations[\"ru\"] = {\n  \"%n bedroom\": {\n    \"one\": \"{{count}} спальня\",\n    \"few\": \"{{count}} спальни\",\n    \"many\": \"{{count}} спален\",\n    \"other\": \"{{count}} спален\"\n  },\n  \"%n bathroom\": {\n    \"one\": \"{{count}} ванная комната\",\n    \"few\": \"{{count}} ванные комнаты\",\n    \"many\": \"{{count}} ванных комнат\",\n    \"other\": \"{{count}} ванных комнат\"\n  },\n  \"%n bed\": {\n    \"one\": \"{{count}} кровать\",\n    \"few\": \"{{count}} кровати\",\n    \"many\": \"{{count}} кроватей\",\n    \"other\": \"{{count}} кроватей\"\n  },\n  \"%n visitor\": {\n    \"one\": \"{{count}} гость\",\n    \"few\": \"{{count}} гостя\",\n    \"many\": \"{{count}} гостей\",\n    \"other\": \"{{count}} гостей\"\n  }\n};\n\ni18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.pluralization[\"ru\"] = function (count) {\n  var key = count % 10 == 1 && count % 100 != 11 ? \"one\" : [2, 3, 4].indexOf(count % 10) >= 0 && [12, 13, 14].indexOf(count % 100) < 0 ? \"few\" : count % 10 == 0 || [5, 6, 7, 8, 9].indexOf(count % 10) >= 0 || [11, 12, 13, 14].indexOf(count % 100) >= 0 ? \"many\" : \"other\";\n  return [key];\n};\n\ni18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.defaultLocale = \"ru\";\ni18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.locale = \"ru\";\nvar captions = {\n  bathroom: \"%n bathroom\",\n  bedroom: \"%n bedroom\",\n  bed: \"%n bed\"\n};\n$(document).ready(function () {\n  $('.room').iqDropdown({\n    minItems: 2,\n    onChange: function onChange(id, count, totalItems) {\n      console.log(id, count, totalItems);\n    },\n    getCustomMessage: function getCustomMessage(itemCount, totalItems) {\n      return Object.keys(itemCount).map(function (key) {\n        return i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.t(captions[key], {\n          count: itemCount[key]\n        });\n      }).join(', ');\n    }\n  });\n  $('.visitors').iqDropdown({\n    getCustomMessage: function getCustomMessage(itemCount, totalItems) {\n      return i18n_js__WEBPACK_IMPORTED_MODULE_1___default.a.t('%n visitor', {\n        count: totalItems\n      });\n    },\n    onChange: function onChange(id, count, totalItems) {\n      console.log(id, count, totalItems);\n    },\n    beforeDecrement: function beforeDecrement(id, itemCount) {\n      if (id === \"adult\") {\n        return itemCount.adult > itemCount.infant;\n      }\n\n      return true;\n    },\n    beforeIncrement: function beforeIncrement(id, itemCount) {\n      if (id === \"infant\") {\n        return itemCount.adult > itemCount.infant;\n      }\n\n      return true;\n    }\n  });\n});\n/*\n$(document).ready(function() {\n  $('.wrapper').css('background-color', 'green');\n});\n\n$( document ).ready(function() {\n  console.log( \"ready!\" );\n});\n*/\n\n/*\nvar $datepicker = $('.js-date');\n            var dateToday = new Date();\n\n$datepicker.each(function() {\n                    $(this)\n                        .datepicker({\n                            classes: 'bb-datepicker',\n                            dateFormat: 'dd.mm.yy',\n                            autoClose: true,\n                            minDate: dateToday,\n                            inline: true\n                        })\n                        .on('click', function() {\n                            $(this)\n                                .next()\n                                .addClass('is-open');\n                            $html.addClass('is-fixed');\n                        })\n                        .data('datepicker')\n                        .selectDate(dateToday);\n                });\n\n                let $datepickerInline = $('.datepicker-inline');\n                let header = $(\n                    '<div class= \"datepicker-inline__header\"><span>Выберите дату</span> <svg class=\"icon icon-close datepicker-inline__close js-date-inline--close\"><use xlink:href=\"img/sprite.svg#close\"></use></svg></div>'\n                );\n                let btn = $(\n                    '<div class=\"datepicker-inline__btn\"><button class=\"btn btn-default datepicker-inline__btn js-date-inline--select\">Выбрать дату</button></div>'\n                );\n                $datepickerInline\n                    .find('.datepicker')\n                    .wrap('<div class=\"datepicker-inline__inner\">');\n                header.prependTo($datepickerInline);\n                btn.appendTo($datepickerInline);\n\n                $(document).on('click', '.js-date-inline--close', function(e) {\n                    e.stopPropagation();\n                    $(this)\n                        .closest('.datepicker-inline')\n                        .removeClass('is-open')\n                        .end()\n                        .data('datepicker')\n                        .selectDate();\n                    $html.removeClass('is-hidden');\n                });\n                */\n// range-slider\n\n$(function () {\n  $(\"#range\").slider({\n    range: true,\n    min: 0,\n    max: 15000,\n    values: [5000, 10000],\n    slide: function slide(event, ui) {\n      $(\"#result\").text(new Intl.NumberFormat().format(ui.values[0]) + \"₽ - \" + new Intl.NumberFormat().format(ui.values[1]) + \"₽\");\n    }\n  }); //Записываем значения ползунков в момент загрузки страницы\n  //То есть значения по умолчанию\n\n  $(\"#result\").text(new Intl.NumberFormat().format($(\"#range\").slider(\"values\", 0)) + \"₽ - \" + new Intl.NumberFormat().format($(\"#range\").slider(\"values\", 1)) + \"₽\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/iq-dropdown.js":
/*!*******************************!*\
  !*** ./src/js/iq-dropdown.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _assets_css_item_quantity_dropdown_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/item-quantity-dropdown.min.css */ \"./src/assets/css/item-quantity-dropdown.min.css\");\n/* harmony import */ var _assets_css_item_quantity_dropdown_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_item_quantity_dropdown_min_css__WEBPACK_IMPORTED_MODULE_0__);\n// plugin styles\n\n/* eslint-disable func-names */\n\n(function ($) {\n  var defaults = {\n    maxItems: Infinity,\n    minItems: 0,\n    selectionText: 'item',\n    textPlural: 'items',\n    controls: {\n      position: 'right',\n      displayCls: 'iqdropdown-content',\n      controlsCls: 'iqdropdown-item-controls',\n      counterCls: 'counter'\n    },\n    items: {},\n    onChange: function onChange() {},\n    beforeDecrement: function beforeDecrement() {\n      return true;\n    },\n    beforeIncrement: function beforeIncrement() {\n      return true;\n    }\n  };\n\n  $.fn.iqDropdown = function (options) {\n    this.each(function () {\n      var $this = $(this);\n      var $selection = $this.find('p.iqdropdown-selection').last();\n      var $menu = $this.find('div.iqdropdown-menu');\n      var $items = $menu.find('div.iqdropdown-menu-option');\n      var itemCount = {};\n      var totalItems = 0;\n      var settings = $.extend(true, {\n        getCustomMessage: function getCustomMessage() {\n          var usePlural = totalItems !== 1 && settings.textPlural.length > 0;\n          var text = usePlural ? settings.textPlural : settings.selectionText;\n          return \"\".concat(totalItems, \" \").concat(text);\n        }\n      }, defaults, options);\n\n      function updateDisplay() {\n        $selection.html(settings.getCustomMessage(itemCount, totalItems));\n      }\n\n      function setItemSettings(id, $item) {\n        var minCount = Number($item.data('mincount'));\n        var maxCount = Number($item.data('maxcount'));\n        settings.items[id] = {\n          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,\n          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount\n        };\n      }\n\n      function addControls(id, $item) {\n        var $controls = $('<div />').addClass(settings.controls.controlsCls);\n        var $decrementButton = $(\"\\n          <button class=\\\"button-decrement\\\">\\n            <i class=\\\"icon-decrement\\\"></i>\\n          </button>\\n        \");\n        var $incrementButton = $(\"\\n          <button class=\\\"button-increment\\\">\\n            <i class=\\\"icon-decrement icon-increment\\\"></i>\\n          </button>\\n        \");\n        var $counter = $(\"<span>\".concat(itemCount[id], \"</span>\")).addClass(settings.controls.counterCls);\n        $item.children('div').addClass(settings.controls.displayCls);\n        $controls.append($decrementButton, $counter, $incrementButton);\n\n        if (settings.controls.position === 'right') {\n          $item.append($controls);\n        } else {\n          $item.prepend($controls);\n        }\n\n        $decrementButton.click(function (event) {\n          var items = settings.items,\n              minItems = settings.minItems,\n              beforeDecrement = settings.beforeDecrement,\n              onChange = settings.onChange;\n          var allowClick = beforeDecrement(id, itemCount);\n\n          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {\n            itemCount[id] -= 1;\n            totalItems -= 1;\n            $counter.html(itemCount[id]);\n            updateDisplay();\n            onChange(id, itemCount[id], totalItems);\n          }\n\n          event.preventDefault();\n        });\n        $incrementButton.click(function (event) {\n          var items = settings.items,\n              maxItems = settings.maxItems,\n              beforeIncrement = settings.beforeIncrement,\n              onChange = settings.onChange;\n          var allowClick = beforeIncrement(id, itemCount);\n\n          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {\n            itemCount[id] += 1;\n            totalItems += 1;\n            $counter.html(itemCount[id]);\n            updateDisplay();\n            onChange(id, itemCount[id], totalItems);\n          }\n\n          event.preventDefault();\n        });\n        $item.click(function (event) {\n          return event.stopPropagation();\n        });\n        return $item;\n      }\n\n      $this.click(function () {\n        $this.toggleClass('menu-open');\n      });\n      $items.each(function () {\n        var $item = $(this);\n        var id = $item.data('id');\n        var defaultCount = Number($item.data('defaultcount') || '0');\n        itemCount[id] = defaultCount;\n        totalItems += defaultCount;\n        setItemSettings(id, $item);\n        addControls(id, $item);\n      });\n      updateDisplay();\n    });\n    return this;\n  };\n})(jQuery);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/iq-dropdown.js?");

/***/ })

/******/ });
//# sourceMappingURL=app.a4148bc05a60251f0ddd.js.map