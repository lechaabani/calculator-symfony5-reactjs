"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Calculator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Calculator.js */ "./assets/js/components/Calculator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.call(this);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_Calculator_js__WEBPACK_IMPORTED_MODULE_15__["default"], null);
    }
  }]);

  return App;
}((react__WEBPACK_IMPORTED_MODULE_13___default().Component));

react_dom__WEBPACK_IMPORTED_MODULE_14__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Button.js":
/*!****************************************!*\
  !*** ./assets/js/components/Button.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
        className: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "(",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: ")",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "CE",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "CE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "C",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "1",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "2",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "3",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "+",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "4",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "5",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "6",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "-",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "7",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "8",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "9",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "*",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: ".",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "0",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "=",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
        name: "/",
        onClick: function onClick(e) {
          return _this.props.onClick(e.target.name);
        }
      }, "/"));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./assets/js/components/Calculator.js":
/*!********************************************!*\
  !*** ./assets/js/components/Calculator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Button */ "./assets/js/components/Button.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var CALC_URL = '/result';

var Calculator = /*#__PURE__*/function (_Component) {
  _inherits(Calculator, _Component);

  var _super = _createSuper(Calculator);

  function Calculator() {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "onClick", function (button) {
      if (button === "=") {
        var context = _assertThisInitialized(_this);

        axios.post(CALC_URL, {
          data: _this.state.expression
        }).then(function (response) {
          context.setState({
            expression: eval(response.data.result)
          });
        })["catch"](function (error) {
          context.setState({
            expression: error
          });
        });
      } else if (button == "C") {
        _this.clear();
      } else if (button === "CE") {
        _this.sliceSpace();
      } else {
        _this.setState({
          expression: _this.state.expression + button
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      _this.setState({
        expression: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sliceSpace", function () {
      _this.setState({
        expression: _this.state.expression.slice(0, -1)
      });
    });

    _this.state = {
      expression: ""
    };
    return _this;
  }
  /**
   * Listen to the click event
   *
   * @param button
   */


  _createClass(Calculator, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
        className: "calculator"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h1", null, "Calculator With Symfony5 and ReactJs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
        className: "result"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", null, this.state.expression)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onClick: this.onClick
      })));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

/***/ }),

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_slice_js-node_modul-485071"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0lBRU1HOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztXQUNELGtCQUFTO0FBQ0wsMEJBQ0ksNERBQUMsa0VBQUQsT0FESjtBQUdIOzs7O0VBVGFIOztBQWFsQkMsOENBQUEsZUFBZ0IsNERBQUMsR0FBRCxPQUFoQixFQUF5QkssUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7O0lBQ01DOzs7Ozs7Ozs7Ozs7O1dBRUYsa0JBQVM7QUFBQTs7QUFDTCwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUMsQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBREosZUFFSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBRkosZUFHSTtBQUFRLFlBQUksRUFBQyxJQUFiO0FBQWtCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTVCLGNBSEosZUFJSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBSkosZUFNSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBTkosZUFPSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBUEosZUFRSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBUkosZUFTSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBVEosZUFXSTtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGVBQU8sRUFBRSxpQkFBQUosQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBNUIsQ0FBSjtBQUFBO0FBQTNCLGFBWEosZUFZSTtBQUFRLFlBQUksRUFB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dEIsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBQyxDQUFoQztBQURGLE9BQWQ7QUFHSCxLQTdDYTs7QUFFVixVQUFLVixLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsVUFBVSxFQUFFO0FBQWIsS0FBYjtBQUZVO0FBR2I7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7OztXQXNDSSxrQkFBUztBQUNMLDBCQUNJLHNGQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLCtHQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksdUVBQUksS0FBS0QsS0FBTCxDQUFXQyxVQUFmLENBREosQ0FGSixlQUtJLDREQUFDLGdEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUtYO0FBQXRCLFFBTEosQ0FESixDQURKO0FBV0g7Ozs7RUE1RG9CUDs7QUErRHpCLGlFQUFlRixVQUFmOzs7Ozs7Ozs7OztBQ3BFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzBjMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYWxjdWxhdG9yIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIihcIiBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5uYW1lKX0+KDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIilcIiBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5uYW1lKX0+KTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIkNFXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9PkNFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwiQ1wiIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGUudGFyZ2V0Lm5hbWUpfT5DPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIxXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9PjE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIyXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9PjI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIzXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9PjM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIrXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9Pis8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIjRcIiBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5uYW1lKX0+NDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIjVcIiBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5uYW1lKX0+NTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIjZcIiBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5uYW1lKX0+NjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIi1cIiBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5uYW1lKX0+LTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwiN1wiIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGUudGFyZ2V0Lm5hbWUpfT43PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwiOFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGUudGFyZ2V0Lm5hbWUpfT44PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwiOVwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGUudGFyZ2V0Lm5hbWUpfT45PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwiKlwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGUudGFyZ2V0Lm5hbWUpfT4qPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIuXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9Pi48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIwXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9PjA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCI9XCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9Pj08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCIvXCIgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQubmFtZSl9Pi88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuY29uc3QgQ0FMQ19VUkwgPSAnL3Jlc3VsdCc7XG5cbmNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2V4cHJlc3Npb246IFwiXCJ9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0aGUgY2xpY2sgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBidXR0b25cbiAgICAgKi9cbiAgICBvbkNsaWNrID0gYnV0dG9uID0+IHtcbiAgICAgICAgaWYoYnV0dG9uID09PSBcIj1cIil7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBheGlvcy5wb3N0KENBTENfVVJMLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogIHRoaXMuc3RhdGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe2V4cHJlc3Npb246IGV2YWwocmVzcG9uc2UuZGF0YS5yZXN1bHQpfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe2V4cHJlc3Npb246IGVycm9yfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJ1dHRvbiA9PSBcIkNcIil7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJ1dHRvbiA9PT0gXCJDRVwiKXtcbiAgICAgICAgICAgIHRoaXMuc2xpY2VTcGFjZSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiAgdGhpcy5zdGF0ZS5leHByZXNzaW9uICsgYnV0dG9uXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiXCJcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc2xpY2VTcGFjZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHByZXNzaW9uOiB0aGlzLnN0YXRlLmV4cHJlc3Npb24uc2xpY2UoMCwgLTEpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5DYWxjdWxhdG9yIFdpdGggU3ltZm9ueTUgYW5kIFJlYWN0SnM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZXhwcmVzc2lvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQ2FsY3VsYXRvciIsIkFwcCIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJCdXR0b24iLCJlIiwicHJvcHMiLCJvbkNsaWNrIiwidGFyZ2V0IiwibmFtZSIsImF4aW9zIiwicmVxdWlyZSIsIkNBTENfVVJMIiwiYnV0dG9uIiwiY29udGV4dCIsInBvc3QiLCJkYXRhIiwic3RhdGUiLCJleHByZXNzaW9uIiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJldmFsIiwicmVzdWx0IiwiZXJyb3IiLCJjbGVhciIsInNsaWNlU3BhY2UiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=