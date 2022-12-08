// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/script.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var yOffset = 0;
  var w = innerWidth;
  var h = innerHeight;
  var basePoint;
  var getStyle = getComputedStyle(document.documentElement);
  var gradientProgress = -10.4652;
  var gradientProgress2 = 89.5348;
  var gradientAngle = getStyle.getPropertyValue("$gradientAngle");
  var navMenuList = document.querySelectorAll(".nav .menu");
  var sectionInfo = [{
    // home
    objs: {
      container: document.querySelector("#home"),
      visual: document.querySelector(".visual"),
      // canvas: document.querySelector("#canvas"),
      // context: canvas.getContext("2d"),
      title: document.querySelector("#home .title"),
      words: document.querySelectorAll("#home .word"),
      word1: document.querySelector("#home .word1"),
      word2: document.querySelector("#home .word2"),
      word3: document.querySelector("#home .word3")
    }
  }, {
    // about
    objs: {
      container: document.querySelector("#about"),
      arrows: document.querySelectorAll("#about .arrow"),
      arrow1: document.querySelector("#about .arrow1"),
      arrow2: document.querySelector("#about .arrow2"),
      arrow3: document.querySelector("#about .arrow3"),
      item1: document.querySelector("#about .item1"),
      item2: document.querySelector("#about .item2"),
      item3: document.querySelector("#about .item3")
    }
  }, {
    // works
    objs: {
      container: document.querySelector("#works"),
      copy: document.querySelector("#works .copy"),
      title: document.querySelector("#works .copy > .title"),
      titleDraw: document.querySelector("#works .draw"),
      items: document.querySelectorAll("#works .item"),
      item1: document.querySelector("#works .item1"),
      item2: document.querySelector("#works .item2"),
      item3: document.querySelector("#works .item3"),
      item4: document.querySelector("#works .item4")
    }
  }, {
    // hiring
    objs: {
      container: document.querySelector("#hiring"),
      title: document.querySelector("#hiring > .title"),
      items: document.querySelectorAll("#hiring .item"),
      item1: document.querySelector("#hiring .item1"),
      item2: document.querySelector("#hiring .item2"),
      item3: document.querySelector("#hiring .item3"),
      item4: document.querySelector("#hiring .item4"),
      item5: document.querySelector("#hiring .item5"),
      descs: document.querySelectorAll("#hiring .desc"),
      desc1: document.querySelector("#hiring .item1 .desc"),
      desc2: document.querySelector("#hiring .item2 .desc"),
      desc3: document.querySelector("#hiring .item3 .desc"),
      desc4: document.querySelector("#hiring .item4 .desc"),
      desc5: document.querySelector("#hiring .item5 .desc")
    }
  }, {
    // contact
    objs: {
      container: document.querySelector("#contact")
    }
  }];

  function setLayout() {
    for (var i; i < sectionInfo.length; i++) {
      sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight;
      sectionInfo[i].objs.container.style.height = "".concat(sectionInfo[i].scrollHeight, "px");
    }

    function animate() {
      // home
      var homeTitleValue = (h - sectionInfo[0].objs.title.getBoundingClientRect().top) / (h / 2);
      var titleOpacityValue = 1 + sectionInfo[0].objs.title.getBoundingClientRect().top / sectionInfo[0].objs.title.getBoundingClientRect().height;

      if (w > 900) {
        if (yOffset + h > sectionInfo[0].objs.word1.offsetTop - h) {
          sectionInfo[0].objs.words.forEach(function (word, i) {
            setTimeout(function () {
              word.classList.add("on");
            }, 100 * (i + 1));
          });
        }

        if (0 > sectionInfo[0].objs.title.getBoundingClientRect().top) {
          sectionInfo[0].objs.title.style.opacity = titleOpacityValue;
        }
      } else {
        sectionInfo[0].objs.words.forEach(function (word, i) {
          setTimeout(function () {
            word.classList.add("on");
          }, 100 * (i + 1));
        });
        sectionInfo[0].objs.title.style.opacity = titleOpacityValue;
      }

      var _iterator = _createForOfIteratorHelper(navMenuList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _el4 = _step.value;

          _el4.classList.remove("on");

          navMenuList[0].classList.add("on");
        } // about

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (0 > sectionInfo[1].objs.item1.getBoundingClientRect().top - h) {
        sectionInfo[1].objs.arrows.forEach(function (item) {
          item.classList.remove("on");
        });
        sectionInfo[1].objs.arrow1.classList.add("on");

        var _iterator2 = _createForOfIteratorHelper(navMenuList),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var el = _step2.value;
            el.classList.remove("on");
            navMenuList[1].classList.add("on");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      if (0 > sectionInfo[1].objs.item2.getBoundingClientRect().top - h) {
        sectionInfo[1].objs.arrows.forEach(function (item) {
          item.classList.remove("on");
        });
        sectionInfo[1].objs.arrow2.classList.add("on");
      }

      if (0 > sectionInfo[1].objs.item3.getBoundingClientRect().top - h) {
        sectionInfo[1].objs.arrows.forEach(function (item) {
          item.classList.remove("on");
        });
        sectionInfo[1].objs.arrow3.classList.add("on");
      } // works


      var worksTitleValue = (h - sectionInfo[2].objs.title.getBoundingClientRect().bottom) / (h / 2);

      if (w > 900) {
        if (0 > sectionInfo[2].objs.copy.getBoundingClientRect().top - h) {
          // sectionInfo[2].objs.copy.style.transform = `translateY(${
          //   70 - worksTitleValue * 70
          // }px)`;
          sectionInfo[2].objs.copy.style.opacity = worksTitleValue;

          var _iterator3 = _createForOfIteratorHelper(navMenuList),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _el = _step3.value;

              _el.classList.remove("on");

              navMenuList[1].classList.add("on");
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        if (0 > sectionInfo[2].objs.titleDraw.getBoundingClientRect().top - h * 0.6) {
          sectionInfo[2].objs.copy.style.opacity = 1;
          sectionInfo[2].objs.titleDraw.classList.add("on");
        }

        if (worksTitleValue > 1) {
          worksTitleValue = 1;
        } else if (worksTitleValue < 0) {
          worksTitleValue = 0;
        }

        if (0 > sectionInfo[2].objs.copy.getBoundingClientRect().top) {
          var copyOpacityValue = 1 + sectionInfo[2].objs.copy.getBoundingClientRect().top / sectionInfo[2].objs.copy.getBoundingClientRect().height;
          sectionInfo[2].objs.copy.style.opacity = copyOpacityValue;
        }

        var worksItem1Value = (h - sectionInfo[2].objs.item1.getBoundingClientRect().top) / (h / 2);
        var worksItem2Value = (h - sectionInfo[2].objs.item2.getBoundingClientRect().top) / (h / 2);
        var worksItem3Value = (h - sectionInfo[2].objs.item3.getBoundingClientRect().top) / (h / 2);
        var worksItem4Value = (h - sectionInfo[2].objs.item4.getBoundingClientRect().top) / (h / 2);

        if (0 > sectionInfo[2].objs.item1.getBoundingClientRect().top - h) {
          sectionInfo[2].objs.item1.style.cssText = "\n          opacity: ".concat(worksItem1Value * 2, ";\n          transform: translate3d(0,").concat(worksItem1Value * 140, "px,0);\n        ");
          sectionInfo[2].objs.item1.style.opacity = worksItem1Value * 2;
        }

        if (0 > sectionInfo[2].objs.item2.getBoundingClientRect().top - h) {
          sectionInfo[2].objs.item2.style.cssText = "\n          opacity: ".concat(worksItem2Value * 2, ";\n          transform: translate3d(0,").concat(worksItem2Value * 160, "px,0);\n        ");
        }

        if (0 > sectionInfo[2].objs.item3.getBoundingClientRect().top - h) {
          sectionInfo[2].objs.item3.style.cssText = "\n          opacity: ".concat(worksItem3Value * 2, ";\n          transform: translate3d(0,").concat(worksItem3Value * 20, "px,0);\n        ");
        }

        if (0 > sectionInfo[2].objs.item4.getBoundingClientRect().top - h) {
          sectionInfo[2].objs.item4.style.cssText = "\n          opacity: ".concat(worksItem4Value * 2, ";\n          // transform: translate3d(0,").concat(worksItem4Value * 100, "px,0);\n        ");
        }
      } // hiring


      var hiringTitleValue = (h - sectionInfo[3].objs.title.getBoundingClientRect().top) / (h / 2);

      if (0 > sectionInfo[3].objs.title.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.title.style.cssText = "background-image: linear-gradient(\n            135deg, rgba(0, 0, 0, 1) ".concat(-100 + hiringTitleValue * 100, "%, rgba(0, 0, 0, 0) ").concat(hiringTitleValue * 100, "%\n        );");

        var _iterator4 = _createForOfIteratorHelper(navMenuList),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _el2 = _step4.value;

            _el2.classList.remove("on");

            navMenuList[2].classList.add("on");
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      var hiringDesc1Value = (h - sectionInfo[3].objs.desc1.getBoundingClientRect().top) / (h / 2);
      var hiringDesc2Value = (h - sectionInfo[3].objs.desc2.getBoundingClientRect().top) / (h / 2);
      var hiringDesc3Value = (h - sectionInfo[3].objs.desc3.getBoundingClientRect().top) / (h / 2);
      var hiringDesc4Value = (h - sectionInfo[3].objs.desc4.getBoundingClientRect().top) / (h / 2);
      var hiringDesc5Value = (h - sectionInfo[3].objs.desc5.getBoundingClientRect().top) / (h / 2);

      if (0 > sectionInfo[3].objs.item1.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item1.classList.add("on");
      }

      if (0 > sectionInfo[3].objs.item2.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item2.classList.add("on");
      }

      if (0 > sectionInfo[3].objs.item3.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item3.classList.add("on");
      }

      if (0 > sectionInfo[3].objs.item4.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item4.classList.add("on");
      }

      if (0 > sectionInfo[3].objs.item5.getBoundingClientRect().bottom - h) {
        sectionInfo[3].objs.item5.classList.add("on");
      }

      if (0 > sectionInfo[3].objs.desc1.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc1.style.cssText = "background-image: linear-gradient(\n            135deg, rgba(0, 0, 0, 1) ".concat(-100 + hiringDesc1Value * 100, "%, rgba(0, 0, 0, 0) ").concat(hiringDesc1Value * 100, "%\n        );");
      }

      if (0 > sectionInfo[3].objs.desc2.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc2.style.cssText = "background-image: linear-gradient(\n            135deg, rgba(0, 0, 0, 1) ".concat(-100 + hiringDesc2Value * 100, "%, rgba(0, 0, 0, 0) ").concat(hiringDesc2Value * 100, "%\n        );");
      }

      if (0 > sectionInfo[3].objs.desc3.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc3.style.cssText = "background-image: linear-gradient(\n            135deg, rgba(0, 0, 0, 1) ".concat(-100 + hiringDesc3Value * 100, "%, rgba(0, 0, 0, 0) ").concat(hiringDesc3Value * 100, "%\n        );");
      }

      if (0 > sectionInfo[3].objs.desc4.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc4.style.cssText = "background-image: linear-gradient(\n            135deg, rgba(0, 0, 0, 1) ".concat(-100 + hiringDesc4Value * 100, "%, rgba(0, 0, 0, 0) ").concat(hiringDesc4Value * 100, "%\n        );");
      }

      if (0 > sectionInfo[3].objs.desc5.getBoundingClientRect().top - h) {
        sectionInfo[3].objs.desc5.style.cssText = "background-image: linear-gradient(\n            135deg, rgba(0, 0, 0, 1) ".concat(-100 + hiringDesc5Value * 100, "%, rgba(0, 0, 0, 0) ").concat(hiringDesc5Value * 100, "%\n        );");
      } // contact


      if (0 > sectionInfo[4].objs.container.getBoundingClientRect().top - h) {
        var _iterator5 = _createForOfIteratorHelper(navMenuList),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _el3 = _step5.value;

            _el3.classList.remove("on");

            navMenuList[3].classList.add("on");
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }

    window.addEventListener("resize", setLayout);
    window.addEventListener("scroll", function () {
      yOffset = window.pageYOffset;
      basePoint = yOffset + h / 2;
      animate();
      addClassMenu();
    });
  }

  function mobileAnimation() {
    if (w < 900) {
      var titleOpacityValue = 1 + sectionInfo[0].objs.title.getBoundingClientRect().top / sectionInfo[0].objs.title.getBoundingClientRect().height;
      sectionInfo[0].objs.words.forEach(function (word, i) {
        setTimeout(function () {
          word.classList.add("on");
        }, 100 * (i + 1));
      });
      sectionInfo[0].objs.title.style.opacity = titleOpacityValue;
    }
  }

  window.addEventListener("load", function () {
    document.body.classList.remove("before-load");
    setLayout();
    mobileAnimation();
    sectionInfo[0].objs.visual.classList.add("on"); // sectionInfo[0].objs.context.fillStyle = "#B9FF7D";
    // sectionInfo[0].objs.context.fillRect(0, 0, w, h);
  });
})();

var navButton = document.querySelector(".nav__button");
var nav = document.querySelector(".nav");
var logo = document.querySelector(".logo");
var navMenuList = document.querySelectorAll(".nav .menu");
navButton.addEventListener("click", function () {
  nav.classList.toggle("on");
  navButton.classList.toggle("on");
  logo.classList.toggle("hide");
  document.body.classList.toggle("scroll__none");
});

var _iterator6 = _createForOfIteratorHelper(navMenuList),
    _step6;

try {
  var _loop = function _loop() {
    var el = _step6.value;
    el.addEventListener("click", function () {
      var _iterator7 = _createForOfIteratorHelper(navMenuList),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _el5 = _step7.value;

          _el5.classList.remove("on");
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      el.classList.add("on");
      nav.classList.remove("on");
      navButton.classList.remove("on");
      logo.classList.remove("hide");
    });
  };

  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator6.e(err);
} finally {
  _iterator6.f();
}
},{}],"../../../.nvm/versions/node/v17.3.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63241" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v17.3.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/script.js"], null)
//# sourceMappingURL=/script.c10090b4.js.map