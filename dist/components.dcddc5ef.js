parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ohUQ":[function(require,module,exports) {
"use strict";function e(e,t,n,o){var r="#"+o;anime.remove(r),anime({targets:r,scale:e,duration:t,elasticity:n})}function t(t){e(1.1,800,400,t)}function n(t){e(1,600,300,t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.enterButton=t,exports.leaveButton=n;
},{}],"qw6p":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../utilities/buttonEffects");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function u(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?i(t):n}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(e){function o(){return n(this,o),u(this,c(o).apply(this,arguments))}return f(o,React.Component),r(o,[{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("a",{href:"./"+this.props.href},React.createElement("button",{className:"navLink",onMouseEnter:function(){(0,t.enterButton)(e.props.id)},onMouseLeave:function(){(0,t.leaveButton)(e.props.id)},id:this.props.id},this.props.name)))}}]),o}(),s=p;exports.default=s;
},{"../utilities/buttonEffects":"ohUQ"}],"T2UV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{name:"Work Experience",href:"work.html",id:"workLink"},{name:"Hobbies and Projects",href:"H_P.html",id:"H_PLink"}],r=e;exports.default=r;
},{}],"P6aD":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?u(e):r}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(t){function r(){return e(this,r),o(this,i(r).apply(this,arguments))}return c(r,React.Component),n(r,[{key:"render",value:function(){return React.createElement("img",{className:"portrait",src:"./assets/portraitCircle.svg"})}}]),r}(),p=a;exports.default=p;
},{}],"iA92":[function(require,module,exports) {
"use strict";var e=r(require("./NavbarLinks")),t=r(require("../assets/navbarLinks")),n=r(require("./ProfileImg"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(r){function o(){var n;return a(this,o),(n=i(this,l(o).call(this))).navbarComponents=t.default.map(function(t){return React.createElement(e.default,{id:t.id,key:t.name,href:"html/"+t.href,name:t.name})}),n}return s(o,React.Component),c(o,[{key:"render",value:function(){return React.createElement("div",{className:"landing"},React.createElement("div",{className:"name"}," Thomas Shih "),React.createElement(n.default,null),React.createElement("div",{className:"navLinks"},this.navbarComponents))}}]),o}();ReactDOM.render(React.createElement(p,null),document.getElementById("body"));
},{"./NavbarLinks":"qw6p","../assets/navbarLinks":"T2UV","./ProfileImg":"P6aD"}]},{},["iA92"], null)
//# sourceMappingURL=/components.dcddc5ef.js.map