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
  //setup
  var id = "#" + elementID; //processing

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

  //setup
  if (callback === undefined) {
    callback = function callback() {
      return;
    };
  }

  if (elementID === "*") {
    var id = elementID;
  } else {
    var id = "#" + elementID;
  } //processing


  anime({
    targets: id,
    opacity: opacity,
    scale: scale,
    duration: duration,
    easing: 'easeInOutQuad',
    changeComplete: callback
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

function shake(elementID, intensity) {
  //setup
  var id = "#" + elementID;
  var originalElementColor = document.getElementById(elementID).style.color; //processing

  anime({
    targets: id,
    duration: 500,
    keyframes: [{
      translateX: intensity
    }, {
      translateX: -1 * intensity
    }, {
      translateX: intensity
    }, {
      translateX: -1 * intensity
    }, {
      translateX: intensity
    }, {
      translateX: -1 * intensity
    }, {
      translateX: intensity
    }, {
      translateX: 0
    }],
    easing: 'easeInOutQuad',
    changeBegin: function changeBegin() {
      document.getElementById(elementID).style.color = "rgba(255, 0, 0, 0.7)";
    },
    changeComplete: function changeComplete() {
      document.getElementById(elementID).style.color = originalElementColor;
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

function removeScreen(redirectID, buttonID) {
  if (window.location.href.includes(redirectID)) {
    (0, _shake.shake)(buttonID, 2);
  } else {
    (0, _pop.popOut)("*", function () {
      window.location.href = "./" + redirectID;
    });
  }
}

function NavbarLinks(_ref) {
  var data = _ref.data;
  return React.createElement("button", {
    className: "navLink",
    onClick: function onClick() {
      removeScreen(data.href, data.id);
    },
    onMouseEnter: function onMouseEnter() {
      (0, _buttonEffects.enterButton)(data.id);
    },
    onMouseLeave: function onMouseLeave() {
      (0, _buttonEffects.leaveButton)(data.id);
    },
    id: data.id
  }, data.name);
}

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

function Navbar() {
  var navbarComponents = _navbarLinks.default.map(function (link) {
    return React.createElement(_NavbarLinks.default, {
      key: link.id,
      data: link
    });
  });

  React.useEffect(function () {
    (0, _pop.popIn)("navbar");
    (0, _pop.popIn)("landingPage");
  }, []);
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
  }, navbarComponents));
}

var _default = Navbar;
exports.default = _default;
},{"./NavbarLinks":"components/NavbarLinks.js","../assets/navbarLinks":"assets/navbarLinks.js","../utilities/buttonEffects":"utilities/buttonEffects.js","../utilities/pop":"utilities/pop.js"}],"assets/recommendationsList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var recommendationsList = [{
  name: "Ramchandu Pindiproli",
  position: "Senior Technologiest - Cloud and Digital Strategy",
  company: "Bombardier",
  text: "I rarely come across real talents who stand out like Thomas. I had the pleasure of working with Thomas for about an year at the Bombardier, collaborating & coaching him on several sales enablement business intelligence projects. Thomas’s ability to handle multiple projects was unlike any I’ve seen before and his contributions helped in dramatic increase in the productivity level of our sales teams No matter how complex a process was, Thomas made sure he brings in ideas to optimize the same and took actions to completion. As a team member or a leader, Thomas earns my highest recommendation.",
  imgUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQG5CVrfs77Udg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=1vaYdnXMgX6Llcn2miRKZ23Myx8JXFWCnh3IbqxI-i4"
}, {
  name: "Farzana Mowla",
  position: "Senior Software Engineer",
  company: "ST Engineering iDirect",
  text: "It was my pleasure to work with Thomas during his work term at VT iDirect (currently known as ST Engineering iDirect). Thomas is a fast learner, very methodical and sincere at his work. He always brings smile to the workplace and he is an excellent team player. As Thomas was learning about the systems at his new work, he volunteered to prepare documentation that would be helpful for future new employees. He also prepared performance test reports. Thomas has excellent software development skills and writing skills. I wish him all the best in his future endeavours.",
  imgUrl: "https://media-exp1.licdn.com/dms/image/C5603AQF6EOLwGtwJig/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=Jo3TMNGAgFrr1FyNE0Ul9ih1nGJmNL63pCF7mxl_Dj8"
}];
var _default = recommendationsList;
exports.default = _default;
},{}],"components/Recommendations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _recommendationsList = _interopRequireDefault(require("../assets/recommendationsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RecommendationCard(_ref) {
  var data = _ref.data;
  return React.createElement("div", {
    className: "recommendationCard"
  }, React.createElement("img", {
    className: "imgUrl",
    src: data.imgUrl,
    alt: "can't find image"
  }), React.createElement("h3", {
    className: "referenceName"
  }, data.name), React.createElement("h4", {
    className: "position"
  }, data.position), React.createElement("h4", {
    className: "company"
  }, data.company), React.createElement("p", {
    className: "referenceText"
  }, data.text));
}

function Recommendations() {
  var recommendationsComponents = _recommendationsList.default.map(function (recommendation) {
    return React.createElement(RecommendationCard, {
      key: recommendation.name,
      data: recommendation
    });
  });

  return React.createElement("div", {
    className: "aside"
  }, recommendationsComponents);
}

var _default = Recommendations;
exports.default = _default;
},{"../assets/recommendationsList":"assets/recommendationsList.js"}],"assets/companyList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var companyList = [{
  id: "BBDAERO",
  name: "Bombardier Aerospace",
  imageUrl: "https://www.bombardier.com/content/dam/Websites/bombardiercom/system/Bombardier_Logo.svg",
  url: "http://www.bombardier.com/",
  jobTitle: "Business Analyst/Full Stack Developer",
  desc: "Front-End web development (jQuery,JavaScript) | Back-end data analyst (Python: Pandas, AWS S3) | Build, Testing, and Deployment (Azure DevOps)",
  length: "2019-2020"
}, {
  id: "STENGIDIRECT",
  name: "ST Engineering iDirect",
  imageUrl: "https://www.idirect.net/wp-content/themes/idirect/icons/logo-color.svg",
  url: "https://www.idirect.net/",
  jobTitle: "Software Engineer",
  desc: "OSI Layer 2/3 bandwidth testing automation (Bash) | Feature Development and Bug-Fixing (C/C++: Socket)",
  length: "2018"
}, {
  id: "CARLETON",
  name: "Carleton University",
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Carleton_University_logo.svg/330px-Carleton_University_logo.svg.png",
  url: "https://carleton.ca/",
  jobTitle: "Mathematics Teaching Assistant",
  desc: "Perform Adminstrative Duties | Teach Differential Equations/Multivariable Calculus/Laplace and Fourier Transforms",
  length: "2018-2019"
}];
var _default = companyList;
exports.default = _default;
},{}],"components/CompaniesWorked.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _companyList = _interopRequireDefault(require("../assets/companyList"));

var _buttonEffects = require("../utilities/buttonEffects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CompanyProfile(props) {
  return React.createElement("div", {
    className: "companyProfile"
  }, React.createElement("a", {
    href: props.data.url,
    className: "logoLink"
  }, React.createElement("button", {
    id: props.data.id + "_icon",
    onMouseEnter: function onMouseEnter() {
      (0, _buttonEffects.enterButton)(props.data.id + "_icon");
    },
    onMouseLeave: function onMouseLeave() {
      (0, _buttonEffects.leaveButton)(props.data.id + "_icon");
    }
  }, React.createElement("img", {
    className: "logoLink",
    src: props.data.imageUrl,
    alt: props.data.name
  }))), React.createElement("h3", {
    className: "jobTitle"
  }, props.data.jobTitle), React.createElement("p", {
    className: "desc"
  }, props.data.desc), React.createElement("h4", {
    className: "length"
  }, props.data.length));
}

function CompaniesWorked() {
  var companyComponents = _companyList.default.map(function (company) {
    return React.createElement(CompanyProfile, {
      key: company.id,
      data: company
    });
  });

  return React.createElement("div", {
    className: "main"
  }, React.createElement("h1", null, "Work Experience"), companyComponents);
}

var _default = CompaniesWorked;
exports.default = _default;
},{"../assets/companyList":"assets/companyList.js","../utilities/buttonEffects":"utilities/buttonEffects.js"}],"components/IconLink.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttonEffects = require("../utilities/buttonEffects");

function IconLink(props) {
  return React.createElement("a", {
    href: props.data.url
  }, React.createElement("button", {
    id: props.data.id,
    onMouseEnter: function onMouseEnter() {
      (0, _buttonEffects.enterButton)(props.data.id);
    },
    onMouseLeave: function onMouseLeave() {
      (0, _buttonEffects.leaveButton)(props.data.id);
    }
  }, React.createElement("img", {
    className: "icon",
    src: props.data.logoUrl,
    alt: props.data.alt
  })));
}

var _default = IconLink;
exports.default = _default;
},{"../utilities/buttonEffects":"utilities/buttonEffects.js"}],"assets/contactIcons.js":[function(require,module,exports) {
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
},{}],"components/ContactCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _IconLink = _interopRequireDefault(require("./IconLink"));

var _contactIcons = _interopRequireDefault(require("../assets/contactIcons"));

var _buttonEffects = require("../utilities/buttonEffects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resumeSrc = "../assets/resume.pdf";

function ResumeDownload() {
  return React.createElement("a", {
    className: "resume",
    href: resumeSrc,
    download: true
  }, React.createElement("button", {
    id: "resumeDownload",
    onMouseEnter: function onMouseEnter() {
      (0, _buttonEffects.enterButton)("resumeDownload");
    },
    onMouseLeave: function onMouseLeave() {
      (0, _buttonEffects.leaveButton)("resumeDownload");
    }
  }, React.createElement("i", {
    className: "fa fa-download fa-2x"
  }, " Download Resume")));
}

function ContactCard() {
  var iconLinks = _contactIcons.default.map(function (icon) {
    return React.createElement(_IconLink.default, {
      key: icon.id,
      data: icon
    });
  });

  return React.createElement("div", {
    className: "contactCard"
  }, React.createElement(ResumeDownload, null), iconLinks);
}

var _default = ContactCard;
exports.default = _default;
},{"./IconLink":"components/IconLink.js","../assets/contactIcons":"assets/contactIcons.js","../utilities/buttonEffects":"utilities/buttonEffects.js"}],"utilities/checkCDN.js":[function(require,module,exports) {
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
},{}],"components/work.js":[function(require,module,exports) {
"use strict";

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _Recommendations = _interopRequireDefault(require("./Recommendations"));

var _CompaniesWorked = _interopRequireDefault(require("./CompaniesWorked"));

var _ContactCard = _interopRequireDefault(require("./ContactCard"));

var _checkCDN = _interopRequireDefault(require("../utilities/checkCDN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WorkExperience() {
  (0, _checkCDN.default)();
  return React.createElement("div", {
    className: "layout"
  }, React.createElement(_Navbar.default, null), React.createElement(_ContactCard.default, null), React.createElement(_Recommendations.default, null), React.createElement(_CompaniesWorked.default, null));
}

ReactDOM.render(React.createElement(WorkExperience, null), document.getElementById("body"));
},{"./Navbar":"components/Navbar.js","./Recommendations":"components/Recommendations.js","./CompaniesWorked":"components/CompaniesWorked.js","./ContactCard":"components/ContactCard.js","../utilities/checkCDN":"utilities/checkCDN.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63791" + '/');

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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/work.js"], null)
//# sourceMappingURL=/work.cd7480db.js.map