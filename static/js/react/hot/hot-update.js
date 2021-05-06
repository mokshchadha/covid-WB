webpackHotUpdate("bundle",{

/***/ "./src/frontend/react/components/RtpcrListing/Listing.jsx":
/*!****************************************************************!*\
  !*** ./src/frontend/react/components/RtpcrListing/Listing.jsx ***!
  \****************************************************************/
/*! exports provided: RtpcrListing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RtpcrListing\", function() { return RtpcrListing; });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! materialize-css */ \"./node_modules/materialize-css/dist/js/materialize.js\");\n/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _utils_dateTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/dateTime */ \"./src/frontend/react/utils/dateTime.js\");\n/* harmony import */ var _utils_dateTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_dateTime__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _EditListing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditListing */ \"./src/frontend/react/components/RtpcrListing/EditListing.jsx\");\n/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-materialize */ \"./node_modules/react-materialize/lib/index.js\");\n/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar RtpcrListing = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RtpcrListing, _Component);\n\n  var _super = _createSuper(RtpcrListing);\n\n  function RtpcrListing() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RtpcrListing);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"state\", {\n      rtpcr: null,\n      isAuthorized: false\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RtpcrListing, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      materialize_css__WEBPACK_IMPORTED_MODULE_11___default.a.AutoInit();\n      fetch(\"/rtpc\").then( /*#__PURE__*/function () {\n        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(e) {\n          var rtpcr;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return e.json();\n\n                case 2:\n                  rtpcr = _context.sent;\n                  console.log(\"rtpcr \", rtpcr);\n\n                  _this2.setState({\n                    rtpcr: rtpcr\n                  });\n\n                case 5:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var rtpcr = this.state.rtpcr;\n      var _this$props = this.props,\n          isAuthorized = _this$props.isAuthorized,\n          person = _this$props.person;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"ul\", null, rtpcr && rtpcr.map(function (e) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RtpcrRow, {\n          rtpcrData: e,\n          key: e._id,\n          isAuthorized: isAuthorized,\n          person: person\n        });\n      }));\n    }\n  }]);\n\n  return RtpcrListing;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nfunction RtpcrRow(_ref2) {\n  var rtpcrData = _ref2.rtpcrData,\n      isAuthorized = _ref2.isAuthorized,\n      person = _ref2.person;\n  var name = rtpcrData.name,\n      address = rtpcrData.address,\n      contact = rtpcrData.contact,\n      lastUpdated = rtpcrData.lastUpdated,\n      updatedBy = rtpcrData.updatedBy;\n  var styles = {\n    lineHeight: \"2em\",\n    width: \"110px\",\n    padding: \"10px\"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n    style: {\n      fontSize: \"10px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_14__[\"Collapsible\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n    className: \"collapsible-header\",\n    style: {\n      display: \"flex\",\n      flexDirection: \"row\",\n      justifyContent: \"space-between\",\n      background: \"#e1f5fe\",\n      fontSize: \"10px\",\n      padding: \"5px\",\n      height: \"10px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"b\", {\n    style: {\n      marginBottom: \"5px\",\n      paddingLeft: \"15px\"\n    }\n  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n    className: \"collapsible-body\",\n    style: {\n      padding: \"7px 7px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"p\", null, \"Contact:- \".concat(contact), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), \"Address:- \".concat(address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), \"LastUpdated:- \".concat(Object(_utils_dateTime__WEBPACK_IMPORTED_MODULE_12__[\"getDate\"])(lastUpdated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), \"Verified By:- \".concat(updatedBy)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", null, isAuthorized && person && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_EditListing__WEBPACK_IMPORTED_MODULE_13__[\"EditRtpcr\"], {\n    rtpcrCenter: rtpcrData,\n    person: person\n  })))))));\n}\n\n//# sourceURL=webpack:///./src/frontend/react/components/RtpcrListing/Listing.jsx?");

/***/ })

})