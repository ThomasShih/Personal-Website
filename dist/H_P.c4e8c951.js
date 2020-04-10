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
})({"utilities/buttonEffects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enterButton = enterButton;
exports.leaveButton = leaveButton;

function animateButton(scale, duration, elasticity, elementID) {
  var id = "#" + elementID;
  anime.remove(id);
  anime({
    targets: id,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}

;

function enterButton(id) {
  animateButton(1.1, 800, 400, id);
}

;

function leaveButton(id) {
  animateButton(1.0, 600, 300, id);
}

; // import {enterButton,leaveButton} from "../utilities/buttonEffects"
},{}],"utilities/pop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popIn = popIn;
exports.popOut = popOut;

function pop(elementID, duration, elasticity, scale, opacity) {
  var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

  if (callback === undefined) {
    callback = function callback() {
      return;
    };
  }

  if (elementID === "*") {
    var id = elementID;
  } else {
    var id = "#" + elementID;
  }

  anime.remove(id);
  anime({
    targets: id,
    opacity: opacity,
    scale: scale,
    duration: duration,
    changeComplete: callback,
    easing: 'easeInOutQuad'
  });
}

;

function popIn(id) {
  pop(id, 400, 0, [0.5, 1], [0, 1]);
}

;

function popOut(id, callback) {
  pop(id, 500, 0, [1, 0], [1, 0], callback);
}

; // import {popIn,popOut} from "../utilities/pop.js"
},{}],"utilities/shake.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shake = shake;

function shake(elementID, amount) {
  if (elementID === "*") {
    var id = elementID;
  } else {
    var id = "#" + elementID;
  }

  anime.remove(id);
  anime({
    targets: id,
    duration: 100,
    keyframes: [{
      translateX: amount
    }, {
      translateX: -1 * amount
    }, {
      translateX: amount
    }, {
      translateX: -1 * amount
    }, {
      translateX: amount
    }, {
      translateX: 0
    }],
    easing: 'easeInOutQuad',
    changeBegin: function changeBegin() {
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    },
    changeComplete: function changeComplete() {
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }
  });
}

; // import {popIn,popOut} from "../utilities/pop.js"
},{}],"components/NavbarLinks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttonEffects = require("../utilities/buttonEffects");

var _pop = require("../utilities/pop");

var _shake = require("../utilities/shake");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function removeScreen(redirectID) {
  if (window.location.href.includes(redirectID)) {
    (0, _shake.shake)("*", 2);
  } else {
    (0, _pop.popOut)("*", function () {
      window.location.href = "./" + redirectID;
    });
  }
}

var NavbarLinks =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarLinks, _React$Component);

  function NavbarLinks() {
    _classCallCheck(this, NavbarLinks);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarLinks).apply(this, arguments));
  }

  _createClass(NavbarLinks, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("button", {
        className: "navLink",
        onClick: function onClick() {
          removeScreen(_this.props.href);
        },
        onMouseEnter: function onMouseEnter() {
          (0, _buttonEffects.enterButton)(_this.props.id);
        },
        onMouseLeave: function onMouseLeave() {
          (0, _buttonEffects.leaveButton)(_this.props.id);
        },
        id: this.props.id
      }, this.props.name);
    }
  }]);

  return NavbarLinks;
}(React.Component);

var _default = NavbarLinks;
exports.default = _default;
},{"../utilities/buttonEffects":"utilities/buttonEffects.js","../utilities/pop":"utilities/pop.js","../utilities/shake":"utilities/shake.js"}],"assets/navbarLinks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var navbarLinks = [{
  name: "Work Experience",
  href: "work.html",
  id: "workLink"
}, {
  name: "Hobbies and Projects",
  href: "H_P.html",
  id: "H_PLink"
}];
var _default = navbarLinks;
exports.default = _default;
},{}],"components/Navbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NavbarLinks = _interopRequireDefault(require("./NavbarLinks"));

var _navbarLinks = _interopRequireDefault(require("../assets/navbarLinks"));

var _buttonEffects = require("../utilities/buttonEffects");

var _pop = require("../utilities/pop");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this));
    _this.navbarComponents = _navbarLinks.default.map(function (link) {
      return React.createElement(_NavbarLinks.default, {
        key: link.id,
        id: link.id,
        href: link.href,
        name: link.name
      });
    });
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _pop.popIn)("navbar");
      (0, _pop.popIn)("landingPage");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "navbar",
        className: "navbar"
      }, React.createElement("a", {
        href: "../index.html"
      }, React.createElement("button", {
        id: "landingPage",
        onMouseEnter: function onMouseEnter() {
          (0, _buttonEffects.enterButton)("landingPage");
        },
        onMouseLeave: function onMouseLeave() {
          (0, _buttonEffects.leaveButton)("landingPage");
        }
      }, React.createElement("header", {
        className: "name"
      }, "Thomas Shih"))), React.createElement("div", {
        className: "navLinkTop"
      }, this.navbarComponents));
    }
  }]);

  return Navbar;
}(React.Component);

var _default = Navbar;
exports.default = _default;
},{"./NavbarLinks":"components/NavbarLinks.js","../assets/navbarLinks":"assets/navbarLinks.js","../utilities/buttonEffects":"utilities/buttonEffects.js","../utilities/pop":"utilities/pop.js"}],"utilities/checkCDN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
{
  /* <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> */
}
{
  /* <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> */
}
{
  /* <script crossorigin src="https://cdn.jsdelivr.net/npm/animejs@3.2.0/lib/anime.min.js"></script> */
}

function checkCDNexist() {
  try {
    anime = anime;
    React = React;
    ReactDOM = ReactDOM;
    console.log("All CDNs imported");
  } catch (error) {
    alert("One or more CDNs could not be imported, issues with page may occur");
  }
}

var _default = checkCDNexist;
exports.default = _default;
},{}],"assets/projectList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var projectList = [{
  id: "personalWebsite",
  name: "Personal Website",
  desc: "This personal website was built out of a want for me to develop a personal portfolio and to pratice web development using React. This whole project was built from the ground up using React, the animations was developed using anime.js. The website is statically hosted and a domain was acquired. Responsiveness was a priorty however some animations is only optimized for desktop.",
  gitHub: "https://github.com/ThomasShih/Personal-Website",
  video: null,
  length: "Ongoing",
  picture: "https://cdn.worldvectorlogo.com/logos/react.svg",
  keywords: ["React", "JavaScript", "HTML", "CSS", "anime.js"]
}, {
  id: "alarmClock",
  name: "Alarm Clock Music Player",
  desc: "A school project involved the development of an alarm clock circuitry using verilog. I decided to step it up and add an non-required functionality of playing music when the alarm clock is triggered, or when prompt. This project required the understanding of basic audio compression algorithims, verilog, signal modulation, DAC converters.",
  gitHub: "https://github.com/ThomasShih/Alarm-Clock-with-Music-using-Verilog",
  video: "https://youtu.be/m7OycdSeDko",
  length: "Two Months",
  picture: null,
  keywords: ["Verilog", "FPGA", "VHDL", "PPM"]
}, {
  id: "construction",
  name: "To be populated",
  desc: "More projects that was not originally on github will be uploaded and placed on this website in the future!",
  gitHub: "",
  video: null,
  picture: null,
  keywords: ["Patience", "Waiting", "Processing", "..."]
}];
var _default = projectList;
exports.default = _default;
},{}],"assets/contactIcons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var iconLinkList = [{
  logoUrl: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
  url: "https://www.linkedin.com/in/thomas-shih/",
  alt: "LinkedIn",
  id: "LinkedInIcon"
}, {
  logoUrl: "../assets/GitHubIcon.svg",
  url: "https://github.com/ThomasShih",
  alt: "GitHub",
  id: "GitHubIcon"
}, {
  logoUrl: "https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300",
  url: "https://www.instagram.com/thomas__shih/",
  alt: "Instagram",
  id: "InstagramIcon"
}];
var _default = iconLinkList;
exports.default = _default;
},{}],"components/IconLink.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttonEffects = require("../utilities/buttonEffects");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IconLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconLink, _React$Component);

  function IconLink() {
    _classCallCheck(this, IconLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconLink).apply(this, arguments));
  }

  _createClass(IconLink, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("a", {
        href: this.props.url
      }, React.createElement("button", {
        id: this.props.id,
        onMouseEnter: function onMouseEnter() {
          (0, _buttonEffects.enterButton)(_this.props.id);
        },
        onMouseLeave: function onMouseLeave() {
          (0, _buttonEffects.leaveButton)(_this.props.id);
        }
      }, React.createElement("img", {
        className: "icon",
        src: this.props.logoUrl,
        alt: this.props.alt
      })));
    }
  }]);

  return IconLink;
}(React.Component);

var _default = IconLink;
exports.default = _default;
},{"../utilities/buttonEffects":"utilities/buttonEffects.js"}],"../../../node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"../../../node_modules/prop-types/checkPropTypes.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var printWarning = function () {};

if ("development" !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if ("development" !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
},{"./lib/ReactPropTypesSecret":"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js"}],"../../../node_modules/react/cjs/react.development.js":[function(require,module,exports) {
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict';

    var _assign = require('object-assign');

    var checkPropTypes = require('prop-types/checkPropTypes');

    var ReactVersion = '16.13.1'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary

    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      suspense: null
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    function describeComponentFrame(name, source, ownerName) {
      var sourceInfo = '';

      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);

            if (match) {
              var pathBeforeSlash = match[1];

              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }

      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    }

    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return "Profiler";

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';

          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type.render);

          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
        }
      }

      return null;
    }

    var ReactDebugCurrentFrame = {};
    var currentlyValidatingElement = null;

    function setCurrentlyValidatingElement(element) {
      {
        currentlyValidatingElement = element;
      }
    }

    {
      // Stack implementation injected by the current renderer.
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentlyValidatingElement) {
          var name = getComponentName(currentlyValidatingElement.type);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    /**
     * Used by act() to track whether you're inside an act() scope.
     */

    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      _assign(ReactSharedInternals, {
        // These should not be included in production.
        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
        // Shim for React DOM 16.0.0 which still destructured (but not used) this.
        // TODO: remove in React 17.0.
        ReactComponentTreeHook: {}
      });
    } // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        printWarning('warn', format, args);
      }
    }

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

        if (!hasExistingStack) {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();

          if (stack !== '') {
            format += '%s';
            args = args.concat([stack]);
          }
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
        {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      if (!!(element === null || element === undefined)) {
        {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
      }

      var propName; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];

    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;

      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }
    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
              }

              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(children);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
          }
          var childrenString = '' + children;
          {
            {
              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
            }
          }
        }
      }

      return subtreeCount;
    }
    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof component === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;
      func.call(context, child, bookKeeping.count++);
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }

      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
      var mappedChild = func.call(context, child, bookKeeping.count++);

      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
          return c;
        });
      } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
          mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }

        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';

      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }

      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      return traverseAllChildren(children, function () {
        return null;
      }, null);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
        return child;
      });
      return result;
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      if (!isValidElement(children)) {
        {
          throw Error("React.Children.only expected to receive a single React element child.");
        }
      }

      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
          }
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function () {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function (_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function () {
              return context._currentValue;
            },
            set: function (_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function () {
              return context._currentValue2;
            },
            set: function (_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function () {
              return context._threadCount;
            },
            set: function (_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function () {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    function lazy(ctor) {
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _ctor: ctor,
        // React uses these fields to store the result.
        _status: -1,
        _result: null
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes;
        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function () {
              return defaultProps;
            },
            set: function (newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function () {
              return propTypes;
            },
            set: function (newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      return {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
    }

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
        }
      }
      return {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      if (!(dispatcher !== null)) {
        {
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
        }
      }

      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        if (unstable_observedBits !== undefined) {
          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
        } // TODO: add a more generic warning for invalid values.


        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }

    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }

    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }

    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }

    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
      }

      setCurrentlyValidatingElement(element);
      {
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
      }
      setCurrentlyValidatingElement(null);
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var name = getComponentName(type);
        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          setCurrentlyValidatingElement(element);
          checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
          setCurrentlyValidatingElement(null);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        setCurrentlyValidatingElement(fragment);
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            break;
          }
        }

        if (fragment.ref !== null) {
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
        }

        setCurrentlyValidatingElement(null);
      }
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type;
        }

        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    var didWarnAboutDeprecatedCreateFactory = false;

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it


        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    {
      try {
        var frozenObject = Object.freeze({});
        var testMap = new Map([[frozenObject, null]]);
        var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
        // https://github.com/rollup/rollup/issues/1771
        // TODO: we can remove these if Rollup fixes the bug.

        testMap.set(0, 0);
        testSet.add(0);
      } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
  })();
}
},{"object-assign":"../../../node_modules/object-assign/index.js","prop-types/checkPropTypes":"../../../node_modules/prop-types/checkPropTypes.js"}],"../../../node_modules/react/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.development.js":"../../../node_modules/react/cjs/react.development.js"}],"../../../node_modules/load-script/index.js":[function(require,module,exports) {

module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}

},{}],"../../../node_modules/deepmerge/dist/cjs.js":[function(require,module,exports) {
'use strict';

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
},{}],"../../../node_modules/react-is/cjs/react-is.development.js":[function(require,module,exports) {
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
},{}],"../../../node_modules/react-is/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}
},{"./cjs/react-is.development.js":"../../../node_modules/react-is/cjs/react-is.development.js"}],"../../../node_modules/prop-types/factoryWithTypeCheckers.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var ReactIs = require('react-is');

var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

var checkPropTypes = require('./checkPropTypes');

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};

if ("development" !== 'production') {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("development" !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if ("development" !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      "development" !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
},{"react-is":"../../../node_modules/react-is/index.js","object-assign":"../../../node_modules/object-assign/index.js","./lib/ReactPropTypesSecret":"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js","./checkPropTypes":"../../../node_modules/prop-types/checkPropTypes.js"}],"../../../node_modules/prop-types/index.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if ("development" !== 'production') {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"react-is":"../../../node_modules/react-is/index.js","./factoryWithTypeCheckers":"../../../node_modules/prop-types/factoryWithTypeCheckers.js"}],"../../../node_modules/react-player/lib/props.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEPRECATED_CONFIG_PROPS = exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
var propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  light: oneOfType([bool, string]),
  playIcon: node,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object,
      preload: bool
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      preload: bool
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string
    }),
    dailymotion: shape({
      params: object,
      preload: bool
    }),
    vimeo: shape({
      playerOptions: object,
      preload: bool
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string
    }),
    wistia: shape({
      options: object
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onProgress: func,
  onEnablePIP: func,
  onDisablePIP: func
};
exports.propTypes = propTypes;
var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  light: false,
  wrapper: 'div',
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      preload: false
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false
      },
      preload: false
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      preload: false
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      hlsOptions: {},
      hlsVersion: '0.13.1',
      dashVersion: '2.9.2'
    },
    wistia: {
      options: {}
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    }
  },
  onReady: function onReady() {},
  onStart: function onStart() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onBuffer: function onBuffer() {},
  onBufferEnd: function onBufferEnd() {},
  onEnded: function onEnded() {},
  onError: function onError() {},
  onDuration: function onDuration() {},
  onSeek: function onSeek() {},
  onProgress: function onProgress() {},
  onEnablePIP: function onEnablePIP() {},
  onDisablePIP: function onDisablePIP() {}
};
exports.defaultProps = defaultProps;
var DEPRECATED_CONFIG_PROPS = ['soundcloudConfig', 'youtubeConfig', 'facebookConfig', 'dailymotionConfig', 'vimeoConfig', 'fileConfig', 'wistiaConfig'];
exports.DEPRECATED_CONFIG_PROPS = DEPRECATED_CONFIG_PROPS;
},{"prop-types":"../../../node_modules/prop-types/index.js"}],"../../../node_modules/react-player/lib/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseStartTime = parseStartTime;
exports.parseEndTime = parseEndTime;
exports.randomString = randomString;
exports.queryString = queryString;
exports.getSDK = getSDK;
exports.getConfig = getConfig;
exports.omit = omit;
exports.callPlayer = callPlayer;
exports.isObject = isObject;
exports.isEqual = isEqual;
exports.isMediaStream = isMediaStream;

var _react = require("react");

var _loadScript = _interopRequireDefault(require("load-script"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
var MATCH_NUMERIC = /^\d+$/; // Parse YouTube URL for a start time param, ie ?t=1h14m30s
// and return the start time in seconds

function parseTimeParam(url, pattern) {
  var match = url.match(pattern);

  if (match) {
    var stamp = match[1];

    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }

    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }

  return undefined;
}

function parseTimeString(stamp) {
  var seconds = 0;
  var array = MATCH_START_STAMP.exec(stamp);

  while (array !== null) {
    var _array = array,
        _array2 = _slicedToArray(_array, 3),
        count = _array2[1],
        period = _array2[2];

    if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
    if (period === 'm') seconds += parseInt(count, 10) * 60;
    if (period === 's') seconds += parseInt(count, 10);
    array = MATCH_START_STAMP.exec(stamp);
  }

  return seconds;
}

function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}

function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
} // http://stackoverflow.com/a/38622545


function randomString() {
  return Math.random().toString(36).substr(2, 5);
}

function queryString(object) {
  return Object.keys(object).map(function (key) {
    return "".concat(key, "=").concat(object[key]);
  }).join('&');
} // Util function to load an external SDK
// or return the SDK if it is already loaded


var requests = {};

function getSDK(url, sdkGlobal) {
  var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];

  if (window[sdkGlobal] && isLoaded(window[sdkGlobal])) {
    return Promise.resolve(window[sdkGlobal]);
  }

  return new Promise(function (resolve, reject) {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({
        resolve: resolve,
        reject: reject
      });
      return;
    }

    requests[url] = [{
      resolve: resolve,
      reject: reject
    }];

    var onLoaded = function onLoaded(sdk) {
      // When loaded, resolve all pending request promises
      requests[url].forEach(function (request) {
        return request.resolve(sdk);
      });
    };

    if (sdkReady) {
      var previousOnReady = window[sdkReady];

      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady();
        onLoaded(window[sdkGlobal]);
      };
    }

    fetchScript(url, function (err) {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // reset the array of requests for this SDK
        requests[url].forEach(function (request) {
          return request.reject(err);
        });
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(window[sdkGlobal]);
      }
    });
  });
}

function getConfig(props, defaultProps, showWarning) {
  var config = (0, _deepmerge["default"])(defaultProps.config, props.config);

  var _iterator = _createForOfIteratorHelper(_props.DEPRECATED_CONFIG_PROPS),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;

      if (props[p]) {
        var key = p.replace(/Config$/, '');
        config = (0, _deepmerge["default"])(config, _defineProperty({}, key, props[p]));

        if (showWarning) {
          var link = 'https://github.com/CookPete/react-player#config-prop';
          var message = "ReactPlayer: %c".concat(p, " %cis deprecated, please use the config prop instead \u2013 ").concat(link);
          console.warn(message, 'font-weight: bold', '');
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return config;
}

function omit(object) {
  var _ref;

  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var omitKeys = (_ref = []).concat.apply(_ref, arrays);

  var output = {};
  var keys = Object.keys(object);

  for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
    var key = _keys[_i2];

    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }

  return output;
}

function callPlayer(method) {
  var _this$player;

  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");

    if (!this.player) {
      message += 'The player was not available';
    } else if (!this.player[method]) {
      message += 'The method was not available';
    }

    console.warn(message, 'font-weight: bold', '');
    return null;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return (_this$player = this.player)[method].apply(_this$player, args);
}

function isObject(val) {
  return val !== null && _typeof(val) === 'object';
} // Deep comparison of two objects, but ignoring functions
// and React elements, for use in shouldComponentUpdate


function isEqual(a, b) {
  if (typeof a === 'function' && typeof b === 'function') {
    return true;
  }

  if ((0, _react.isValidElement)(a) && (0, _react.isValidElement)(b)) {
    return true;
  }

  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i !== a.length; i++) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (var _i3 = 0, _Object$keys = Object.keys(a); _i3 < _Object$keys.length; _i3++) {
      var key = _Object$keys[_i3];

      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
}

function isMediaStream(url) {
  return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
}
},{"react":"../../../node_modules/react/index.js","load-script":"../../../node_modules/load-script/index.js","deepmerge":"../../../node_modules/deepmerge/dist/cjs.js","./props":"../../../node_modules/react-player/lib/props.js"}],"../../../node_modules/react-player/lib/Player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _props = require("./props");

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEEK_ON_PLAY_EXPIRY = 5000;

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "isReady", false);

    _defineProperty(_assertThisInitialized(_this), "isPlaying", false);

    _defineProperty(_assertThisInitialized(_this), "isLoading", true);

    _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);

    _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);

    _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);

    _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
      if (!_this.player) return null;
      return _this.player[key];
    });

    _defineProperty(_assertThisInitialized(_this), "progress", function () {
      if (_this.props.url && _this.player && _this.isReady) {
        var playedSeconds = _this.getCurrentTime() || 0;

        var loadedSeconds = _this.getSecondsLoaded();

        var duration = _this.getDuration();

        if (duration) {
          var progress = {
            playedSeconds: playedSeconds,
            played: playedSeconds / duration
          };

          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          } // Only call onProgress if values have changed


          if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
            _this.props.onProgress(progress);
          }

          _this.prevPlayed = progress.playedSeconds;
          _this.prevLoaded = progress.loadedSeconds;
        }
      }

      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
      if (!_this.mounted) return;
      _this.isReady = true;
      _this.isLoading = false;
      var _this$props = _this.props,
          onReady = _this$props.onReady,
          playing = _this$props.playing,
          volume = _this$props.volume,
          muted = _this$props.muted;
      onReady();

      if (!muted && volume !== null) {
        _this.player.setVolume(volume);
      }

      if (_this.loadOnReady) {
        _this.player.load(_this.loadOnReady, true);

        _this.loadOnReady = null;
      } else if (playing) {
        _this.player.play();
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
      _this.isPlaying = true;
      _this.isLoading = false;
      var _this$props2 = _this.props,
          onStart = _this$props2.onStart,
          onPlay = _this$props2.onPlay,
          playbackRate = _this$props2.playbackRate;

      if (_this.startOnPlay) {
        if (_this.player.setPlaybackRate && playbackRate !== 1) {
          _this.player.setPlaybackRate(playbackRate);
        }

        onStart();
        _this.startOnPlay = false;
      }

      onPlay();

      if (_this.seekOnPlay) {
        _this.seekTo(_this.seekOnPlay);

        _this.seekOnPlay = null;
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
      _this.isPlaying = false;

      if (!_this.isLoading) {
        _this.props.onPause(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
      var _this$props3 = _this.props,
          activePlayer = _this$props3.activePlayer,
          loop = _this$props3.loop,
          onEnded = _this$props3.onEnded;

      if (activePlayer.loopOnEnded && loop) {
        _this.seekTo(0);
      }

      if (!loop) {
        _this.isPlaying = false;
        onEnded();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      var _this$props4;

      _this.isLoading = false;

      (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
      clearTimeout(_this.durationCheckTimeout);

      var duration = _this.getDuration();

      if (duration) {
        if (!_this.onDurationCalled) {
          _this.props.onDuration(duration);

          _this.onDurationCalled = true;
        }
      } else {
        _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
      // Sometimes we know loading has stopped but onReady/onPlay are never called
      // so this provides a way for players to avoid getting stuck
      _this.isLoading = false;
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (player) {
        _this.player = player;
      }
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.player.load(this.props.url);
      this.progress();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.progressTimeout);
      clearTimeout(this.durationCheckTimeout);

      if (this.isReady) {
        this.player.stop();
      }

      if (this.player.disablePIP) {
        this.player.disablePIP();
      }

      this.mounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // Invoke player methods based on changed props
      var _this$props5 = this.props,
          url = _this$props5.url,
          playing = _this$props5.playing,
          volume = _this$props5.volume,
          muted = _this$props5.muted,
          playbackRate = _this$props5.playbackRate,
          pip = _this$props5.pip,
          loop = _this$props5.loop,
          activePlayer = _this$props5.activePlayer;

      if (!(0, _utils.isEqual)(prevProps.url, url)) {
        if (this.isLoading && !activePlayer.forceLoad) {
          console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
          this.loadOnReady = url;
          return;
        }

        this.isLoading = true;
        this.startOnPlay = true;
        this.onDurationCalled = false;
        this.player.load(url, this.isReady);
      }

      if (!prevProps.playing && playing && !this.isPlaying) {
        this.player.play();
      }

      if (prevProps.playing && !playing && this.isPlaying) {
        this.player.pause();
      }

      if (!prevProps.pip && pip && this.player.enablePIP) {
        this.player.enablePIP();
      }

      if (prevProps.pip && !pip && this.player.disablePIP) {
        this.player.disablePIP();
      }

      if (prevProps.volume !== volume && volume !== null) {
        this.player.setVolume(volume);
      }

      if (prevProps.muted !== muted) {
        if (muted) {
          this.player.mute();
        } else {
          this.player.unmute();

          if (volume !== null) {
            // Set volume next tick to fix a bug with DailyMotion
            setTimeout(function () {
              return _this2.player.setVolume(volume);
            });
          }
        }
      }

      if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
        this.player.setPlaybackRate(playbackRate);
      }

      if (prevProps.loop !== loop && this.player.setLoop) {
        this.player.setLoop(loop);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.isReady) return null;
      return this.player.getDuration();
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.isReady) return null;
      return this.player.getCurrentTime();
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.isReady) return null;
      return this.player.getSecondsLoaded();
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount, type) {
      var _this3 = this;

      // When seeking before player is ready, store value and seek later
      if (!this.isReady && amount !== 0) {
        this.seekOnPlay = amount;
        setTimeout(function () {
          _this3.seekOnPlay = null;
        }, SEEK_ON_PLAY_EXPIRY);
        return;
      }

      var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';

      if (isFraction) {
        // Convert fraction to seconds based on duration
        var duration = this.player.getDuration();

        if (!duration) {
          console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
          return;
        }

        this.player.seekTo(duration * amount);
        return;
      }

      this.player.seekTo(amount);
    }
  }, {
    key: "render",
    value: function render() {
      var Player = this.props.activePlayer;

      if (!Player) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
        ref: this.ref,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }));
    }
  }]);

  return Player;
}(_react.Component);

exports["default"] = Player;

_defineProperty(Player, "displayName", 'Player');

_defineProperty(Player, "propTypes", _props.propTypes);

_defineProperty(Player, "defaultProps", _props.defaultProps);
},{"react":"../../../node_modules/react/index.js","./props":"../../../node_modules/react-player/lib/props.js","./utils":"../../../node_modules/react-player/lib/utils.js"}],"../../../node_modules/react-player/lib/singlePlayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSinglePlayer;

var _react = _interopRequireWildcard(require("react"));

var _props = require("./props");

var _utils = require("./utils");

var _Player = _interopRequireDefault(require("./Player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUPPORTED_PROPS = Object.keys(_props.propTypes);

function createSinglePlayer(activePlayer) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(SinglePlayer, _Component);

    var _super = _createSuper(SinglePlayer);

    function SinglePlayer() {
      var _this;

      _classCallCheck(this, SinglePlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "config", (0, _utils.getConfig)(_this.props, _props.defaultProps, true));

      _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
        if (!_this.player) return null;
        return _this.player.getDuration();
      });

      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
        if (!_this.player) return null;
        return _this.player.getCurrentTime();
      });

      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
        if (!_this.player) return null;
        return _this.player.getSecondsLoaded();
      });

      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
        if (!_this.player) return null;
        return _this.player.getInternalPlayer(key);
      });

      _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
        if (!_this.player) return null;

        _this.player.seekTo(fraction, type);
      });

      _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
        _this.player = player;
      });

      return _this;
    }

    _createClass(SinglePlayer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !(0, _utils.isEqual)(this.props, nextProps);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.config = (0, _utils.getConfig)(this.props, _props.defaultProps);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$config$file = this.config.file,
            forceVideo = _this$config$file.forceVideo,
            forceAudio = _this$config$file.forceAudio,
            forceHLS = _this$config$file.forceHLS,
            forceDASH = _this$config$file.forceDASH;
        var skipCanPlay = forceVideo || forceAudio || forceHLS || forceDASH;

        if (!activePlayer.canPlay(this.props.url) && !skipCanPlay) {
          return null;
        }

        var _this$props = this.props,
            style = _this$props.style,
            width = _this$props.width,
            height = _this$props.height,
            Wrapper = _this$props.wrapper;
        var otherProps = (0, _utils.omit)(this.props, SUPPORTED_PROPS, _props.DEPRECATED_CONFIG_PROPS);
        return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
          style: _objectSpread({}, style, {
            width: width,
            height: height
          })
        }, otherProps), /*#__PURE__*/_react["default"].createElement(_Player["default"], _extends({}, this.props, {
          ref: this.ref,
          activePlayer: activePlayer,
          config: this.config
        })));
      }
    }]);

    return SinglePlayer;
  }(_react.Component), _defineProperty(_class, "displayName", "".concat(activePlayer.displayName, "Player")), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "canPlay", activePlayer.canPlay), _temp;
}
},{"react":"../../../node_modules/react/index.js","./props":"../../../node_modules/react-player/lib/props.js","./utils":"../../../node_modules/react-player/lib/utils.js","./Player":"../../../node_modules/react-player/lib/Player.js"}],"../../../node_modules/react-player/lib/players/YouTube.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.YouTube = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _singlePlayer = _interopRequireDefault(require("../singlePlayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SDK_URL = 'https://www.youtube.com/iframe_api';
var SDK_GLOBAL = 'YT';
var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
var MATCH_URL = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;
var MATCH_PLAYLIST = /list=([a-zA-Z0-9_-]+)/;

function parsePlaylist(url) {
  if (MATCH_PLAYLIST.test(url)) {
    var _url$match = url.match(MATCH_PLAYLIST),
        _url$match2 = _slicedToArray(_url$match, 2),
        playlistId = _url$match2[1];

    return {
      listType: 'playlist',
      list: playlistId
    };
  }

  return {};
}

var YouTube = /*#__PURE__*/function (_Component) {
  _inherits(YouTube, _Component);

  var _super = _createSuper(YouTube);

  function YouTube() {
    var _this;

    _classCallCheck(this, YouTube);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onStateChange", function (_ref) {
      var data = _ref.data;
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onBuffer = _this$props.onBuffer,
          onBufferEnd = _this$props.onBufferEnd,
          onEnded = _this$props.onEnded,
          onReady = _this$props.onReady,
          loop = _this$props.loop;
      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
          CUED = _window$SDK_GLOBAL$Pl.CUED;

      if (data === PLAYING) {
        onPlay();
        onBufferEnd();
      }

      if (data === PAUSED) onPause();
      if (data === BUFFERING) onBuffer();

      if (data === ENDED) {
        var isPlaylist = !!_this.callPlayer('getPlaylist');

        if (loop && !isPlaylist) {
          _this.play(); // Only loop manually if not playing a playlist

        }

        onEnded();
      }

      if (data === CUED) onReady();
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unMute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(YouTube, [{
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props2 = this.props,
          playing = _this$props2.playing,
          muted = _this$props2.muted,
          playsinline = _this$props2.playsinline,
          controls = _this$props2.controls,
          loop = _this$props2.loop,
          config = _this$props2.config,
          _onError = _this$props2.onError;
      var _config$youtube = config.youtube,
          playerVars = _config$youtube.playerVars,
          embedOptions = _config$youtube.embedOptions;
      var id = url && url.match(MATCH_URL)[1];

      if (isReady) {
        if (MATCH_PLAYLIST.test(url)) {
          this.player.loadPlaylist(parsePlaylist(url));
          return;
        }

        this.player.cueVideoById({
          videoId: id,
          startSeconds: (0, _utils.parseStartTime)(url) || playerVars.start,
          endSeconds: (0, _utils.parseEndTime)(url) || playerVars.end
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
        return YT.loaded;
      }).then(function (YT) {
        if (!_this2.container) return;
        _this2.player = new YT.Player(_this2.container, _objectSpread({
          width: '100%',
          height: '100%',
          videoId: id,
          playerVars: _objectSpread({
            autoplay: playing ? 1 : 0,
            mute: muted ? 1 : 0,
            controls: controls ? 1 : 0,
            start: (0, _utils.parseStartTime)(url),
            end: (0, _utils.parseEndTime)(url),
            origin: window.location.origin,
            playsinline: playsinline
          }, parsePlaylist(url), {}, playerVars),
          events: {
            onReady: function onReady() {
              if (loop) {
                _this2.player.setLoop(true); // Enable playlist looping

              }

              _this2.props.onReady();
            },
            onStateChange: _this2.onStateChange,
            onError: function onError(event) {
              return _onError(event.data);
            }
          }
        }, embedOptions));
      }, _onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('playVideo');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pauseVideo');
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!document.body.contains(this.callPlayer('getIframe'))) return;
      this.callPlayer('stopVideo');
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seekTo', amount);

      if (!this.props.playing) {
        this.pause();
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return YouTube;
}(_react.Component);

exports.YouTube = YouTube;

_defineProperty(YouTube, "displayName", 'YouTube');

_defineProperty(YouTube, "canPlay", function (url) {
  return MATCH_URL.test(url);
});

var _default = (0, _singlePlayer["default"])(YouTube);

exports["default"] = _default;
},{"react":"../../../node_modules/react/index.js","../utils":"../../../node_modules/react-player/lib/utils.js","../singlePlayer":"../../../node_modules/react-player/lib/singlePlayer.js"}],"components/Project.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _projectList = _interopRequireDefault(require("../assets/projectList"));

var _contactIcons = _interopRequireDefault(require("../assets/contactIcons"));

var _IconLink = _interopRequireDefault(require("./IconLink"));

var _YouTube = _interopRequireDefault(require("react-player/lib/players/YouTube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var gitHubIcon = _contactIcons.default[1].logoUrl;

var Media =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, _getPrototypeOf(Media).apply(this, arguments));
  }

  _createClass(Media, [{
    key: "render",
    value: function render() {
      if (this.props.video == null) {
        //content is a picture
        return React.createElement("div", {
          className: "media"
        }, React.createElement("img", {
          src: this.props.picture
        }));
      } else {
        //content is a video
        return React.createElement("div", {
          className: "media"
        }, React.createElement(_YouTube.default, {
          url: this.props.video,
          width: "100%"
        }));
      }
    }
  }]);

  return Media;
}(React.Component);

var Project =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Project, _React$Component2);

  function Project(props) {
    var _this;

    _classCallCheck(this, Project);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Project).call(this));
    _this.keywords = props.keywords.map(function (keyword) {
      return React.createElement("li", {
        className: "keyword"
      }, keyword);
    });
    return _this;
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "ProjectCard"
      }, React.createElement("h1", {
        className: "projectName"
      }, this.props.name), React.createElement("p", {
        className: "desc"
      }, this.props.desc), React.createElement("h5", {
        className: "length"
      }, "Time Spent: ", this.props.length), React.createElement(Media, {
        video: this.props.video,
        picture: this.props.picture
      }), React.createElement("ul", {
        className: "keywords"
      }, this.keywords), React.createElement(_IconLink.default, {
        className: "gitHub",
        url: this.props.gitHub,
        id: this.props.id + "icon",
        logoUrl: gitHubIcon,
        alt: "GitHub"
      }));
    }
  }]);

  return Project;
}(React.Component);

var ProjectList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ProjectList, _React$Component3);

  function ProjectList() {
    var _this2;

    _classCallCheck(this, ProjectList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ProjectList).call(this));
    _this2.projects = _projectList.default.map(function (project) {
      return React.createElement(Project, {
        id: project.id,
        key: project.id,
        name: project.name,
        desc: project.desc,
        gitHub: project.gitHub,
        picture: project.picture,
        keywords: project.keywords,
        length: project.length,
        video: project.video
      });
    });
    return _this2;
  }

  _createClass(ProjectList, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.projects);
    }
  }]);

  return ProjectList;
}(React.Component);

var _default = ProjectList;
exports.default = _default;
},{"../assets/projectList":"assets/projectList.js","../assets/contactIcons":"assets/contactIcons.js","./IconLink":"components/IconLink.js","react-player/lib/players/YouTube":"../../../node_modules/react-player/lib/players/YouTube.js"}],"components/H_P.js":[function(require,module,exports) {
"use strict";

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _checkCDN = _interopRequireDefault(require("../utilities/checkCDN"));

var _Project = _interopRequireDefault(require("../components/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(0, _checkCDN.default)();

var HobbiesAndProjects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HobbiesAndProjects, _React$Component);

  function HobbiesAndProjects() {
    _classCallCheck(this, HobbiesAndProjects);

    return _possibleConstructorReturn(this, _getPrototypeOf(HobbiesAndProjects).call(this));
  }

  _createClass(HobbiesAndProjects, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "layout"
      }, React.createElement(_Navbar.default, null), React.createElement(_Project.default, null));
    }
  }]);

  return HobbiesAndProjects;
}(React.Component);

ReactDOM.render(React.createElement(HobbiesAndProjects, null), document.getElementById("body"));
},{"./Navbar":"components/Navbar.js","../utilities/checkCDN":"utilities/checkCDN.js","../components/Project":"components/Project.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52557" + '/');

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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/H_P.js"], null)
//# sourceMappingURL=/H_P.c4e8c951.js.map