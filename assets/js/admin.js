pluginWebpack([1],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(113);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(116);

var _router2 = _interopRequireDefault(_router);

var _adminMenuFix = __webpack_require__(150);

var _adminMenuFix2 = _interopRequireDefault(_adminMenuFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = wepos_get_lib('Vue');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#wepos-admin-app',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

// fix the admin menu for the slug "wepos-app"
(0, _adminMenuFix2.default)('wepos-app');

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(39);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bc4b6d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bc4b6d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bc4b6d8", Component.options)
  } else {
    hotAPI.reload("data-v-6bc4b6d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "wepos-admin-app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bc4b6d8", esExports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(117);

var _Home2 = _interopRequireDefault(_Home);

var _Settings = __webpack_require__(120);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = wepos_get_lib('Vue');
var Router = wepos_get_lib('Router');

Vue.use(Router);

exports.default = new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: _Home2.default
    }, {
        path: '/settings',
        name: 'Settings',
        component: _Settings2.default
    }]
});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(40);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce03f2f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce03f2f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce03f2f", Component.options)
  } else {
    hotAPI.reload("data-v-0ce03f2f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    " + _vm._s(_vm.msg) + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ce03f2f", esExports)
  }
}

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__ = __webpack_require__(41);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ba26873_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ba26873_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/Settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ba26873", Component.options)
  } else {
    hotAPI.reload("data-v-2ba26873", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Fields_vue__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa8543ee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Fields_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Fields_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa8543ee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Fields_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/Fields.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa8543ee", Component.options)
  } else {
    hotAPI.reload("data-v-fa8543ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ColorPicker_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_267901b1_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColorPicker_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-267901b1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ColorPicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_267901b1_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColorPicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/src/admin/components/ColorPicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-267901b1", Component.options)
  } else {
    hotAPI.reload("data-v-267901b1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "color-picker-container" },
    [
      _c(
        "button",
        {
          staticClass: "button color-picker-button",
          style: { backgroundColor: _vm.value },
          attrs: { type: "button" },
          on: { click: _vm.toggleColorPicker }
        },
        [_c("span", [_vm._v(_vm._s(_vm.__("Select Color", "dokan-lite")))])]
      ),
      _vm._v(" "),
      _vm.showColorPicker && _vm.format === "hex"
        ? _c("input", {
            staticClass: "hex-input",
            attrs: { type: "text" },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                _vm.setHexColor($event.target.value)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showColorPicker
        ? _c("div", { staticClass: "button-group" }, [
            _c(
              "button",
              {
                staticClass: "button button-small",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.updateColor({})
                  }
                }
              },
              [_vm._v(_vm._s(_vm.__("Clear", "dokan-lite")))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button button-small",
                attrs: { type: "button" },
                on: { click: _vm.toggleColorPicker }
              },
              [_vm._v(_vm._s(_vm.__("Close", "dokan-lite")))]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showColorPicker
        ? _c("sketch", {
            attrs: {
              value: _vm.value,
              "preset-colors": _vm.presetColors,
              "disable-alpha": _vm.disableAlpha,
              "disable-fields": _vm.disableFields
            },
            on: { input: _vm.updateColor }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-267901b1", esExports)
  }
}

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.containCommonFields(_vm.fieldData.type)
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fieldValue[_vm.fieldData.name],
                  expression: "fieldValue[fieldData.name]"
                }
              ],
              staticClass: "regular-text",
              attrs: {
                type: "text",
                id: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                name: _vm.sectionId + "[" + _vm.fieldData.name + "]"
              },
              domProps: { value: _vm.fieldValue[_vm.fieldData.name] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fieldValue,
                    _vm.fieldData.name,
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "number" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fieldValue[_vm.fieldData.name],
                  expression: "fieldValue[fieldData.name]"
                }
              ],
              staticClass: "regular-text",
              attrs: {
                type: "number",
                min: _vm.fieldData.min,
                max: _vm.fieldData.max,
                step: _vm.fieldData.step,
                id: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                name: _vm.sectionId + "[" + _vm.fieldData.name + "]"
              },
              domProps: { value: _vm.fieldValue[_vm.fieldData.name] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fieldValue,
                    _vm.fieldData.name,
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "textarea" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fieldValue[_vm.fieldData.name],
                  expression: "fieldValue[fieldData.name]"
                }
              ],
              staticClass: "regular-text",
              attrs: {
                type: "textarea",
                rows: _vm.fieldData.rows,
                cols: _vm.fieldData.cols,
                id: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                name: _vm.sectionId + "[" + _vm.fieldData.name + "]"
              },
              domProps: { value: _vm.fieldValue[_vm.fieldData.name] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fieldValue,
                    _vm.fieldData.name,
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "checkbox" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c("fieldset", [
              _c(
                "label",
                {
                  attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fieldValue[_vm.fieldData.name],
                        expression: "fieldValue[fieldData.name]"
                      }
                    ],
                    staticClass: "checkbox",
                    attrs: {
                      type: "checkbox",
                      id: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                      name: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                      "true-value": "on",
                      "false-value": "off"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.fieldValue[_vm.fieldData.name])
                        ? _vm._i(_vm.fieldValue[_vm.fieldData.name], null) > -1
                        : _vm._q(_vm.fieldValue[_vm.fieldData.name], "on")
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.fieldValue[_vm.fieldData.name],
                          $$el = $event.target,
                          $$c = $$el.checked ? "on" : "off"
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.fieldValue[_vm.fieldData.name] = $$a.concat([
                                $$v
                              ]))
                          } else {
                            $$i > -1 &&
                              (_vm.fieldValue[_vm.fieldData.name] = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.$set(_vm.fieldValue, _vm.fieldData.name, $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.fieldData.desc) +
                      "\n                "
                  )
                ]
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "multicheck" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c(
              "fieldset",
              [
                _vm._l(_vm.fieldData.options, function(optionVal, optionKey) {
                  return [
                    _c(
                      "label",
                      {
                        attrs: {
                          for:
                            _vm.sectionId +
                            "[" +
                            _vm.fieldData.name +
                            "][" +
                            optionKey +
                            "]"
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value:
                                _vm.fieldValue[_vm.fieldData.name][optionKey],
                              expression:
                                "fieldValue[fieldData.name][optionKey]"
                            }
                          ],
                          staticClass: "checkbox",
                          attrs: {
                            type: "checkbox",
                            id:
                              _vm.sectionId +
                              "[" +
                              _vm.fieldData.name +
                              "][" +
                              optionKey +
                              "]",
                            name:
                              _vm.sectionId +
                              "[" +
                              _vm.fieldData.name +
                              "][" +
                              optionKey +
                              "]",
                            "true-value": optionKey,
                            "false-value": ""
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.fieldValue[_vm.fieldData.name][optionKey]
                            )
                              ? _vm._i(
                                  _vm.fieldValue[_vm.fieldData.name][optionKey],
                                  null
                                ) > -1
                              : _vm._q(
                                  _vm.fieldValue[_vm.fieldData.name][optionKey],
                                  optionKey
                                )
                          },
                          on: {
                            change: function($event) {
                              var $$a =
                                  _vm.fieldValue[_vm.fieldData.name][optionKey],
                                $$el = $event.target,
                                $$c = $$el.checked ? optionKey : ""
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.fieldValue[_vm.fieldData.name][
                                      optionKey
                                    ] = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.fieldValue[_vm.fieldData.name][
                                      optionKey
                                    ] = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.$set(
                                  _vm.fieldValue[_vm.fieldData.name],
                                  optionKey,
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _vm._v(
                          "\n                        " +
                            _vm._s(optionVal) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("br")
                  ]
                })
              ],
              2
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "select" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            !_vm.fieldData.grouped
              ? _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fieldValue[_vm.fieldData.name],
                        expression: "fieldValue[fieldData.name]"
                      }
                    ],
                    staticClass: "regular",
                    attrs: {
                      name: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                      id: _vm.sectionId + "[" + _vm.fieldData.name + "]"
                    },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.fieldValue,
                          _vm.fieldData.name,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _vm.fieldData.placeholder
                      ? _c("option", {
                          attrs: { value: "" },
                          domProps: {
                            innerHTML: _vm._s(_vm.fieldData.placeholder)
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.fieldData.options, function(
                      optionVal,
                      optionKey
                    ) {
                      return _c("option", {
                        domProps: {
                          value: optionKey,
                          innerHTML: _vm._s(optionVal)
                        }
                      })
                    })
                  ],
                  2
                )
              : _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fieldValue[_vm.fieldData.name],
                        expression: "fieldValue[fieldData.name]"
                      }
                    ],
                    staticClass: "regular",
                    attrs: {
                      name: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                      id: _vm.sectionId + "[" + _vm.fieldData.name + "]"
                    },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.fieldValue,
                          _vm.fieldData.name,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _vm.fieldData.placeholder
                      ? _c("option", {
                          attrs: { value: "" },
                          domProps: {
                            innerHTML: _vm._s(_vm.fieldData.placeholder)
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.fieldData.options, function(optionGroup) {
                      return _c(
                        "optgroup",
                        { attrs: { label: optionGroup.group_label } },
                        _vm._l(optionGroup.group_values, function(option) {
                          return _c("option", {
                            domProps: {
                              value: option.value,
                              innerHTML: _vm._s(option.label)
                            }
                          })
                        })
                      )
                    })
                  ],
                  2
                ),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "file" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fieldValue[_vm.fieldData.name],
                  expression: "fieldValue[fieldData.name]"
                }
              ],
              staticClass: "regular-text wpsa-url",
              attrs: {
                type: "text",
                id: _vm.sectionId + "[" + _vm.fieldData.name + "]",
                name: _vm.sectionId + "[" + _vm.fieldData.name + "]"
              },
              domProps: { value: _vm.fieldValue[_vm.fieldData.name] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fieldValue,
                    _vm.fieldData.name,
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "button wpsa-browse",
              attrs: { type: "button", value: "Choose File" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.$emit(
                    "openMedia",
                    { sectionId: _vm.sectionId, name: _vm.fieldData.name },
                    $event
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "color" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c(
            "td",
            [
              _c("color-picker", {
                model: {
                  value: _vm.fieldValue[_vm.fieldData.name],
                  callback: function($$v) {
                    _vm.$set(_vm.fieldValue, _vm.fieldData.name, $$v)
                  },
                  expression: "fieldValue[fieldData.name]"
                }
              }),
              _vm._v(" "),
              _c("p", {
                staticClass: "description",
                domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
              })
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    "html" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "radio" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c(
              "fieldset",
              [
                _vm._l(_vm.fieldData.options, function(optionVal, optionKey) {
                  return [
                    _c(
                      "label",
                      {
                        attrs: {
                          for:
                            _vm.sectionId +
                            "[" +
                            _vm.fieldData.name +
                            "][" +
                            optionKey +
                            "]"
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fieldValue[_vm.fieldData.name],
                              expression: "fieldValue[fieldData.name]"
                            }
                          ],
                          staticClass: "radio",
                          attrs: {
                            type: "radio",
                            id:
                              _vm.sectionId +
                              "[" +
                              _vm.fieldData.name +
                              "][" +
                              optionKey +
                              "]",
                            name: optionKey
                          },
                          domProps: {
                            value: optionKey,
                            checked: _vm._q(
                              _vm.fieldValue[_vm.fieldData.name],
                              optionKey
                            )
                          },
                          on: {
                            change: function($event) {
                              _vm.$set(
                                _vm.fieldValue,
                                _vm.fieldData.name,
                                optionKey
                              )
                            }
                          }
                        }),
                        _vm._v(
                          " " + _vm._s(optionVal) + "\n                    "
                        )
                      ]
                    )
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "wpeditor" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c(
            "td",
            { attrs: { width: "72%" } },
            [
              _c("text-editor", {
                model: {
                  value: _vm.fieldValue[_vm.fieldData.name],
                  callback: function($$v) {
                    _vm.$set(_vm.fieldValue, _vm.fieldData.name, $$v)
                  },
                  expression: "fieldValue[fieldData.name]"
                }
              }),
              _vm._v(" "),
              _c("p", {
                staticClass: "description",
                domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
              })
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    "repeatable" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", { attrs: { width: "72%" } }, [
            _c(
              "ul",
              { staticClass: "dokan-settings-repeatable-list" },
              _vm._l(_vm.fieldValue[_vm.fieldData.name], function(
                optionVal,
                optionKey
              ) {
                return _vm.fieldValue[_vm.fieldData.name]
                  ? _c("li", [
                      _vm._v(
                        "\n                    " + _vm._s(optionVal.value) + " "
                      ),
                      _c("span", {
                        staticClass: "dashicons dashicons-no-alt remove-item",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.removeItem(optionKey, _vm.fieldData.name)
                          }
                        }
                      })
                    ])
                  : _vm._e()
              })
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.repeatableItem[_vm.fieldData.name],
                  expression: "repeatableItem[fieldData.name]"
                }
              ],
              staticClass: "regular-text",
              attrs: { type: "text" },
              domProps: { value: _vm.repeatableItem[_vm.fieldData.name] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.repeatableItem,
                    _vm.fieldData.name,
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "button wepos-repetable-add-item-btn",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.addItem(_vm.fieldData.type, _vm.fieldData.name)
                  }
                }
              },
              [_vm._v("+")]
            ),
            _vm._v(" "),
            _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.fieldData.desc) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    "radio_image" == _vm.fieldData.type
      ? _c("tr", { class: _vm.id }, [
          _c("th", { attrs: { scope: "row" } }, [
            _c(
              "label",
              {
                attrs: { for: _vm.sectionId + "[" + _vm.fieldData.name + "]" }
              },
              [_vm._v(_vm._s(_vm.fieldData.label))]
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _c(
              "div",
              { staticClass: "radio-image-container" },
              [
                _vm._l(_vm.fieldData.options, function(image, name) {
                  return [
                    _c(
                      "label",
                      {
                        staticClass: "radio-image",
                        class: {
                          active: _vm.fieldValue[_vm.fieldData.name] === name,
                          "not-active":
                            _vm.fieldValue[_vm.fieldData.name] !== name
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fieldValue[_vm.fieldData.name],
                              expression: "fieldValue[fieldData.name]"
                            }
                          ],
                          staticClass: "radio",
                          attrs: { type: "radio", name: _vm.fieldData.name },
                          domProps: {
                            value: name,
                            checked: _vm._q(
                              _vm.fieldValue[_vm.fieldData.name],
                              name
                            )
                          },
                          on: {
                            change: function($event) {
                              _vm.$set(_vm.fieldValue, _vm.fieldData.name, name)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "current-option-indicator" },
                          [
                            _c("span", {
                              staticClass: "dashicons dashicons-yes"
                            }),
                            _vm._v(" " + _vm._s(_vm.__("Active", "wepos")))
                          ]
                        ),
                        _vm._v(" "),
                        _c("img", { attrs: { src: image } }),
                        _vm._v(" "),
                        _c("span", { staticClass: "active-option" }, [
                          _c(
                            "button",
                            {
                              staticClass: "button button-primary button-hero",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.fieldValue[_vm.fieldData.name] = name
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.__("Select", "wepos")) +
                                  "\n                            "
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                })
              ],
              2
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fa8543ee", esExports)
  }
}

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wepos-settings" }, [
    _c("h2", { staticStyle: { "margin-bottom": "15px" } }, [
      _vm._v(_vm._s(_vm.__("Settings", "wepos")))
    ]),
    _vm._v(" "),
    _vm.isSaved
      ? _c(
          "div",
          {
            staticClass: "settings-error notice is-dismissible",
            class: { updated: _vm.isUpdated, error: !_vm.isUpdated },
            attrs: { id: "setting-message_updated" }
          },
          [
            _c("p", [
              _c("strong", { domProps: { innerHTML: _vm._s(_vm.message) } })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "notice-dismiss",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.isSaved = false
                  }
                }
              },
              [
                _c("span", { staticClass: "screen-reader-text" }, [
                  _vm._v(_vm._s(_vm.__("Dismiss this notice.", "wepos")))
                ])
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "wepos-settings-wrap" }, [
      _c(
        "h2",
        { staticClass: "nav-tab-wrapper" },
        [
          _vm._l(_vm.settingSections, function(section) {
            return [
              _c(
                "a",
                {
                  staticClass: "nav-tab",
                  class: { "nav-tab-active": _vm.currentTab === section.id },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.changeTab(section)
                    }
                  }
                },
                [
                  _c("span", { staticClass: "dashicons", class: section.icon }),
                  _vm._v(" " + _vm._s(section.title))
                ]
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "metabox-holder" },
        [
          _vm._l(_vm.settingFields, function(fields, index) {
            return _vm.isLoaded
              ? [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentTab === index,
                          expression: "currentTab===index"
                        }
                      ],
                      staticClass: "group",
                      attrs: { id: index }
                    },
                    [
                      _c(
                        "form",
                        { attrs: { method: "post", action: "options.php" } },
                        [
                          _c("input", {
                            attrs: { type: "hidden", name: "option_page" },
                            domProps: { value: index }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              name: "action",
                              value: "update"
                            }
                          }),
                          _vm._v(" "),
                          _c("h2", [
                            _vm._v(_vm._s(_vm.showSectionTitle(index)))
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "form-table" }, [
                            _c(
                              "tbody",
                              _vm._l(fields, function(field, fieldId) {
                                return _c("fields", {
                                  key: fieldId,
                                  attrs: {
                                    "section-id": index,
                                    id: fieldId,
                                    "field-data": field,
                                    "field-value": _vm.settingValues[index]
                                  },
                                  on: { openMedia: _vm.showMedia }
                                })
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "submit" }, [
                            _c("input", {
                              staticClass: "button button-primary",
                              attrs: {
                                type: "submit",
                                name: "submit",
                                id: "submit"
                              },
                              domProps: {
                                value: _vm.__("Save Changes", "wepos")
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.saveSettings(
                                    _vm.settingValues[index],
                                    index
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.showLoading
        ? _c("div", { staticClass: "loading" }, [_c("loading")], 1)
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ba26873", esExports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 */
function menuFix(slug) {
    var $ = jQuery;

    var menuRoot = $('#toplevel_page_' + slug);
    var currentUrl = window.location.href;
    var currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));

    menuRoot.on('click', 'a', function () {
        var self = $(this);

        $('ul.wp-submenu li', menuRoot).removeClass('current');

        if (self.hasClass('wp-has-submenu')) {
            $('li.wp-first-item', menuRoot).addClass('current');
        } else {
            self.parents('li').addClass('current');
        }
    });

    $('ul.wp-submenu a', menuRoot).each(function (index, el) {
        if ($(el).attr('href') === currentPath) {
            $(el).parent().addClass('current');
            return;
        }
    });
}

exports.default = menuFix;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'App'
});

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Home',

    data() {
        return {
            msg: 'Welcome to Your Vue.js Admin App'
        };
    }
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_admin_components_Fields_vue__ = __webpack_require__(122);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let Loading = wepos_get_lib('Loading');


/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Settings',

    components: {
        Fields: __WEBPACK_IMPORTED_MODULE_0_admin_components_Fields_vue__["a" /* default */],
        Loading
    },

    data() {
        return {
            isSaved: false,
            showLoading: false,
            isUpdated: false,
            isLoaded: false,
            message: '',
            currentTab: null,
            settingSections: [],
            settingFields: {},
            settingValues: {}
        };
    },

    methods: {
        changeTab(section) {
            var activetab = '';
            this.currentTab = section.id;

            if (typeof localStorage != 'undefined') {
                localStorage.setItem("activetab", this.currentTab);
            }
        },

        showSectionTitle(index) {
            return window._.findIndex(this.settingSections, { id: index }).title;
        },

        fetchSettingValues() {
            var self = this,
                data = {
                action: 'wepos_get_setting_values',
                nonce: wepos.nonce
            };

            self.showLoading = true;

            jQuery.post(wepos.ajaxurl, data, function (resp) {
                if (resp.success) {

                    Object.keys(self.settingFields).forEach(function (section, index) {
                        Object.keys(self.settingFields[section]).forEach(function (field, i) {

                            if (!self.settingValues[section]) {
                                self.settingValues[section] = {};
                            }

                            if (typeof resp.data[section][field] === 'undefined') {
                                if (typeof self.settingFields[section][field].default === 'undefined') {
                                    self.settingValues[section][field] = '';
                                } else {
                                    self.settingValues[section][field] = self.settingFields[section][field].default;
                                }
                            } else {
                                self.settingValues[section][field] = resp.data[section][field];
                            }
                        });
                    });

                    self.settingValues = jQuery.extend({}, self.settingValues);

                    self.showLoading = false;
                    self.isLoaded = true;
                }
            });
        },

        showMedia(data, $event) {
            var self = this;

            var file_frame = wp.media.frames.file_frame = wp.media({
                title: this.__('Choose your file', 'wepos'),
                button: {
                    text: this.__('Select', 'wepos')
                },
                multiple: false
            });

            file_frame.on('select', function () {
                var attachment = file_frame.state().get('selection').first().toJSON();
                self.settingValues[data.sectionId][data.name] = attachment.url;
            });

            file_frame.open();
        },

        saveSettings(fieldData, section) {
            var self = this,
                data = {
                action: 'wepos_save_settings',
                nonce: wepos.nonce,
                settingsData: fieldData,
                section: section
            };
            self.showLoading = true;

            jQuery.post(wepos.ajaxurl, data).done(function (response) {
                var settings = response.data.settings;
                self.isSaved = true;
                self.isUpdated = true;
                self.message = response.data.message;
                self.settingValues[settings.name] = settings.value;
            }).fail(function (jqXHR) {
                var messages = jqXHR.responseJSON.data.map(function (error) {
                    return error.message;
                });

                alert(messages.join(' '));
            }).always(function () {
                self.showLoading = false;
            });
        }
    },

    created() {
        this.fetchSettingValues();

        this.currentTab = 'wepos_general';
        if (typeof localStorage != 'undefined') {
            this.currentTab = localStorage.getItem("activetab") ? localStorage.getItem("activetab") : 'wepos_general';
        }

        this.settingSections = wepos.settings_sections;
        this.settingFields = wepos.settings_fields;
    }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_admin_components_ColorPicker_vue__ = __webpack_require__(124);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let TextEditor = wepos_get_lib('TextEditor');

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Fields',

    components: {
        colorPicker: __WEBPACK_IMPORTED_MODULE_0_admin_components_ColorPicker_vue__["a" /* default */],
        TextEditor
    },

    data() {
        return {
            repeatableItem: {}
        };
    },

    props: ['id', 'fieldData', 'sectionId', 'fieldValue'],

    methods: {
        containCommonFields(type) {
            return window._.contains([undefined, 'text', 'email', 'url', 'phone'], type);
        },

        addItem(type, name) {
            this.fieldValue[name] = this.fieldValue[name] || [];

            if (typeof this.repeatableItem[name] == 'undefined' || !this.repeatableItem[name]) {
                return;
            }

            this.fieldValue[name].push({
                id: this.repeatableItem[name].trim().replace(/\s+/g, '_').toLowerCase(),
                value: this.repeatableItem[name]
            });
            this.repeatableItem[name] = '';
        },

        removeItem(optionVal, name) {
            this.fieldValue[name].splice(optionVal, 1);
        }
    }

});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_color_src_components_Sketch_vue__ = __webpack_require__(126);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Sketch: __WEBPACK_IMPORTED_MODULE_0_vue_color_src_components_Sketch_vue__["a" /* default */]
    },

    props: {
        value: {
            type: String,
            required: true,
            default: ''
        },

        format: {
            type: String,
            required: false,
            default: 'hex',
            validator(type) {
                return ['hsl', 'hex', 'rgba', 'hsv'].indexOf(type) !== -1;
            }
        },

        presetColors: {
            type: Array,
            required: false,
            default() {
                return ['#000', '#fff', '#d33', '#d93', '#ee2', '#81d742', '#1e73be', '#8224e3'];
            }
        },

        disableAlpha: {
            type: Boolean,
            required: false,
            default: true
        },

        disableFields: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    data() {
        return {
            showColorPicker: false
        };
    },

    methods: {
        updateColor(colors) {
            let color = '';

            if (colors[this.format]) {
                color = colors[this.format];
            }

            this.$emit('input', color);
        },

        toggleColorPicker() {
            this.showColorPicker = !this.showColorPicker;
        },

        setHexColor(color) {
            this.updateColor({
                hex: color
            });
        }
    }
});

/***/ })

},[112]);