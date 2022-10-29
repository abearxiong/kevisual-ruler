/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#kevisual {\n\twidth: 100%;\n\theight: 100%;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 632:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(250);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(363);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
;// CONCATENATED MODULE: ./src/pages/demo/index.tsx



const defaultConfig = {
  width: 600 + 10,
  height: 30,
  size: 7e3,
  x: 10,
  y: 30,
  w: 5,
  h: 10
};
const draw = (ctx, config = defaultConfig) => {
  const size = (config.size || 100) * 10 + 1;
  const x = config.x || 0;
  const y = config.y || 0;
  const w = config.w || 5;
  const h = config.h || 10;
  let offset = 3;
  ctx.clearRect(0, 0, config.width, config.height);
  ctx.strokeStyle = "#666";
  ctx.lineWidth = 1;
  ctx.font = 12;
  for (let i = 0; i < size; i++) {
    ctx.beginPath();
    ctx.moveTo(x + i * w, y);
    if (i % 10 == 0) {
      offset = String(i / 10).length * 6 / 2;
      ctx.fillText(i / 10 * 50, x + i * w - offset + 9, y - h * 1.2);
      ctx.lineTo(x + i * w, y - h * 2);
    } else {
      ctx.lineTo(x + i * w, y - (i % 5 === 0 ? 1.5 : 1) * h);
    }
    ctx.stroke();
  }
};
const defaultConfig2 = {
  width: 30,
  height: 600 + 10,
  size: 7e3,
  x: 30,
  y: 10,
  w: 5,
  h: 10
};
const draw2 = (ctx, config = defaultConfig2) => {
  const size = (config.size || 100) * 10 + 1;
  const x = config.x || 0;
  const y = config.y || 0;
  const w = config.w || 5;
  const h = config.h || 10;
  const offset = 3;
  ctx.clearRect(0, 0, config.width, config.height);
  ctx.strokeStyle = "#666";
  ctx.lineWidth = 1;
  ctx.font = "12px";
  for (let i = 0; i < size; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y + i * w);
    if (i % 10 == 0) {
      ctx.lineTo(x - h * 2, y + i * w);
    } else {
      ctx.lineTo(x - (i % 5 === 0 ? 1.5 : 1) * h, y + i * w);
    }
    ctx.stroke();
  }
  for (let i = 0; i < size; i++) {
    ctx.save();
    if (i % 10 == 0) {
      if (i === 0)
        continue;
      const text = i / 10 * 50 + "";
      const textWxith = ctx.measureText(text).width;
      const _x = x + i * w;
      ctx.translate(0, 0);
      ctx.rotate(-90 * Math.PI / 180);
      ctx.fillText(i * 5 + "", -_x + textWxith + 10, 18);
      ctx.restore();
    }
  }
};
const Demo1 = () => {
  const ref = (0,external_React_.useRef)(null);
  const canvasRef = (0,external_React_.useRef)(null);
  const canvas2Ref = (0,external_React_.useRef)(null);
  const [width, setWidth] = (0,external_React_.useState)(0);
  (0,external_React_.useEffect)(() => {
    const div = ref.current;
    const width2 = (div == null ? void 0 : div.clientWidth) || 0;
    setWidth(width2);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    draw(ctx);
    const canvas2 = canvas2Ref.current;
    const ctx2 = canvas2.getContext("2d");
    draw2(ctx2);
  }, []);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
      style: { width: "600px", height: "600px", position: "absolute", marginLeft: 400, marginTop: 200 },
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
          style: { position: "absolute", width: "100%", height: "100%" },
          ref,
          children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("canvas", {
              width: "610",
              height: "30",
              style: { position: "absolute", top: -30, left: -10 },
              ref: canvasRef
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("canvas", {
              width: "30",
              height: "610",
              style: { position: "absolute", top: -10, left: -30 },
              ref: canvas2Ref
            })
          ]
        }),
        /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
          style: {
            position: "absolute",
            width: "100%",
            height: "100%"
          },
          children: [
            "demo2: ",
            width
          ]
        })
      ]
    })
  });
};

;// CONCATENATED MODULE: ./src/ruler/use-event-listener.ts


const useEventListener = (eventName, listener, target, options = {}, deps = []) => {
  const savedHandler = (0,external_React_.useRef)();
  const { capture, passive, once } = options || {};
  const element = target || window;
  (0,external_React_.useEffect)(() => {
    savedHandler.current = listener;
  }, [listener]);
  (0,external_React_.useEffect)(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }
    const eventListener = (event) => {
      var _a;
      return (_a = savedHandler.current) == null ? void 0 : _a.call(savedHandler, event);
    };
    const opts = options;
    element.addEventListener(eventName, eventListener, opts);
    return () => {
      element.removeEventListener(eventName, eventListener, opts);
    };
  }, [eventName, element, capture, passive, once, ...deps]);
};

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
;// CONCATENATED MODULE: ./src/ruler/Ruler.tsx

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





const Ruler_defaultConfig = {
  width: 600 + 10,
  height: 30,
  size: 7e3,
  x: 10,
  y: 30,
  w: 5,
  h: 10
};
const Ruler_draw = (ctx, config = Ruler_defaultConfig) => {
  const size = (config.size || 100) * 10 + 1;
  const x = config.x || 0;
  const y = config.y || 0;
  const w = config.w || 5;
  const h = config.h || 10;
  let offset = 3;
  ctx.clearRect(0, 0, config.width, config.height);
  ctx.strokeStyle = "#666";
  ctx.lineWidth = 1;
  ctx.font = 12;
  for (let i = 0; i < size; i++) {
    ctx.beginPath();
    ctx.moveTo(x + i * w, y);
    if (i % 10 == 0) {
      offset = String(i / 10).length * 6 / 2;
      ctx.fillText(i / 10 * 50, x + i * w - offset + 9, y - h * 1.2);
      ctx.lineTo(x + i * w, y - h * 2);
    } else {
      ctx.lineTo(x + i * w, y - (i % 5 === 0 ? 1.5 : 1) * h);
    }
    ctx.stroke();
  }
};
const Ruler_defaultConfig2 = {
  width: 30,
  height: 600 + 10,
  size: 7e3,
  x: 30,
  y: 10,
  w: 5,
  h: 10
};
const Ruler_draw2 = (ctx, config = Ruler_defaultConfig2) => {
  const size = (config.size || 100) * 10 + 1;
  const x = config.x || 0;
  const y = config.y || 0;
  const w = config.w || 5;
  const h = config.h || 10;
  ctx.clearRect(0, 0, config.width, config.height);
  ctx.strokeStyle = "#666";
  ctx.lineWidth = 1;
  ctx.font = "12px";
  for (let i = 0; i < size; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y + i * w);
    if (i % 10 == 0) {
      ctx.lineTo(x - h * 2, y + i * w);
      if (i === 0)
        continue;
      else {
        ctx.save();
        const text = i * 5 + "";
        const textWxith = ctx.measureText(text).width;
        const _x = x + i * w;
        const _y = y + i * w;
        ctx.translate(0, 0);
        ctx.rotate(-90 * Math.PI / 180);
        ctx.fillText(text, -_y - textWxith + 24, 16);
        ctx.restore();
      }
    } else {
      ctx.lineTo(x - (i % 5 === 0 ? 1.5 : 1) * h, y + i * w);
    }
    ctx.stroke();
  }
};
const Ruler_Ruler = (props) => {
  const { children } = props;
  external_React_default().Children.only(children);
  const ref = (0,external_React_.useRef)(null);
  const childRef = (0,external_React_.useRef)(null);
  const canvasHorizontalRef = (0,external_React_.useRef)(null);
  const canvasVerticalRef = (0,external_React_.useRef)(null);
  const [width, setWidth] = (0,external_React_.useState)(10);
  const [height, setHeight] = (0,external_React_.useState)(10);
  const [mount, setMout] = (0,external_React_.useState)(false);
  (0,external_React_.useEffect)(() => {
    var _a, _b;
    const width2 = ((_a = ref.current) == null ? void 0 : _a.clientWidth) || 10;
    const height2 = ((_b = ref.current) == null ? void 0 : _b.clientHeight) || 10;
    setWidth(width2);
    setHeight(height2);
    setMout(true);
  }, []);
  (0,external_React_.useEffect)(() => {
    if (mount) {
      drawHorizontal(0);
      drawVertical(0);
    }
  }, [mount]);
  const drawVertical = throttle_default()((start) => {
    const canvas2 = canvasVerticalRef.current;
    const ctx2 = canvas2.getContext("2d");
    Ruler_draw2(ctx2, { width: 30, height: height + 10, size: 7e3, x: 30, y: 10 - start, w: 5, h: 10 });
  }, 100);
  const drawHorizontal = throttle_default()((start) => {
    const canvas = canvasHorizontalRef.current;
    const ctx = canvas.getContext("2d");
    Ruler_draw(ctx, { height: 30, width: width + 10, size: 7e3, x: 10 - start, y: 30, w: 5, h: 10 });
  }, 100);
  const onScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const scrollLeft = e.target.scrollLeft;
    const top = scrollTop;
    const left = scrollLeft;
    drawVertical(top);
    drawHorizontal(left);
  };
  useEventListener("scroll", onScroll, childRef.current);
  const ChildNodes = external_React_default().Children.map([props.children], (child, index) => {
    const { props: props2 } = child;
    const { style } = props2;
    const cloneChild = external_React_default().cloneElement(child, __spreadProps(__spreadValues({}, child), {
      ref: childRef,
      style: __spreadProps(__spreadValues({}, style), {
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "auto",
        left: 30,
        top: 30
      })
    }));
    return cloneChild;
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
      style: { position: "absolute", width: "100%", height: "100%" },
      ref,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
          style: {
            width: 30,
            height: 30,
            position: "absolute",
            left: 0,
            top: 0,
            background: "white",
            zIndex: 1
          }
        }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)("canvas", {
          width: width + 10,
          height: "30",
          style: { position: "absolute", left: 20 },
          ref: canvasHorizontalRef
        }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)("canvas", {
          width: "30",
          height: height + 10,
          style: { position: "absolute", top: 20 },
          ref: canvasVerticalRef
        }),
        ChildNodes
      ]
    })
  });
};

;// CONCATENATED MODULE: ./src/ruler/index.ts



/* harmony default export */ const ruler = ((/* unused pure expression or super */ null && (Ruler)));

;// CONCATENATED MODULE: ./src/pages/demo3/index.tsx




const Demo3 = () => {
  const [text, setText] = (0,external_React_.useState)("sfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfdsfsdfd");
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
    style: { width: "100%", height: "100%" },
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
      style: {
        position: "absolute",
        left: 400,
        top: 200,
        width: 600,
        height: 600
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Ruler_Ruler, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
          onClick: () => {
            setText(text + text + "-");
          },
          children: text
        })
      })
    })
  });
};

;// CONCATENATED MODULE: ./src/routes/MainRoute.tsx





const MainRoutes = () => {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(react_router_dist/* Routes */.Z5, {
    children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router_dist/* Route */.AW, {
        index: true,
        element: /* @__PURE__ */ (0,jsx_runtime.jsx)(Demo1, {})
      }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router_dist/* Route */.AW, {
        path: "/demo1",
        element: /* @__PURE__ */ (0,jsx_runtime.jsx)(Demo1, {})
      }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router_dist/* Route */.AW, {
        path: "/demo3",
        element: /* @__PURE__ */ (0,jsx_runtime.jsx)(Demo3, {})
      })
    ]
  });
};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js
var setAttributesWithAttributesAndNonce = __webpack_require__(575);
var setAttributesWithAttributesAndNonce_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithAttributesAndNonce);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./src/app.module.scss
var app_module = __webpack_require__(289);
;// CONCATENATED MODULE: ./src/app.module.scss

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"nonce":"kevisual"}};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithAttributesAndNonce_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(app_module/* default */.Z, options);




       /* harmony default export */ const src_app_module = (app_module/* default */.Z && app_module/* default.locals */.Z.locals ? app_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/App.tsx






const kevisual = document.getElementById("kevisual");
const basename =  false ? 0 : "/kevisual";
const App = () => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist/* BrowserRouter */.VK, {
    basename,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router_dist/* Routes */.Z5, {
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_router_dist/* Route */.AW, {
        path: "/*",
        element: /* @__PURE__ */ (0,jsx_runtime.jsx)(MainRoutes, {})
      })
    })
  });
};
const root = (0,client/* createRoot */.s)(kevisual);
root.render(/* @__PURE__ */ (0,jsx_runtime.jsx)(App, {}));

;// CONCATENATED MODULE: ./src/index.ts




/***/ }),

/***/ 363:
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ 533:
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkevisual_ruler"] = self["webpackChunkkevisual_ruler"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [169], () => (__webpack_require__(632)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;