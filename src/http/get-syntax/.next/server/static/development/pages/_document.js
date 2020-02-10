module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/getBaseURL.js":
/*!***************************!*\
  !*** ./lib/getBaseURL.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBaseURL; });
function getBaseURL(req) {
  /* eslint-disable no-nested-ternary */
  const protocol = req && req.headers.host.indexOf('syntax.fm') > -1 ? 'https' : req ? req.protocol : '';
  /* eslint-enable */

  const baseURL = req ? `${protocol}://${req.headers.host}` : window.location.origin;
  return baseURL;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_DETAIL = 'export-detail.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.ROUTES_MANIFEST = 'routes-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/polyfills.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;
exports.TEMPORARY_REDIRECT_STATUS = 307;
exports.PERMANENT_REDIRECT_STATUS = 308;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/document-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.DocumentContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ../lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "./node_modules/next/dist/next-server/lib/document-context.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "./node_modules/next/dist/next-server/server/utils.js");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}

function isLowPriority(file) {
  return file.includes('_buildManifest');
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      //
      // Also filter out low priority files because they should not be
      // preloaded for performance reasons.
      return file.endsWith(getOptionalModernScriptVariant('.js')) && !isLowPriority(file);
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;

    if (!files || files.length === 0) {
      return null;
    }

    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files.filter(file => file.endsWith('.js') && !isLowPriority(file));
    const lowPriorityScripts = files.filter(file => file.endsWith('.js') && isLowPriority(file));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, this.getPolyfillScripts(), page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, description, engines, scripts, now, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Syntax\",\"description\":\"Full Stack Developers Wes Bos and Scott Tolinski dive deep into web development topics, explaining how they work and talking about their own experiences. They cover from JavaScript frameworks like React, to the latest advancements in CSS to simplifying web tooling.\",\"engines\":{\"node\":\">=8.1.2\"},\"scripts\":{\"dev\":\"node server.js\",\"build\":\"next build\",\"start\":\"NODE_ENV=production node server.js\",\"deploy\":\"now\",\"alias\":\"now alias\",\"lint\":\"eslint .\",\"lint:fix\":\"eslint . --fix\"},\"now\":{\"alias\":[\"syntax\",\"syntax.fm\"]},\"dependencies\":{\"autoprefixer\":\"9.7.1\",\"axios\":\"^0.19.0\",\"babel-plugin-module-resolver\":\"3.2.0\",\"babel-plugin-wrap-in-js\":\"^1.1.1\",\"date-fns\":\"^2.7.0\",\"express\":\"^4.17.1\",\"glob\":\"7.1.6\",\"meta-marked\":\"^0.4.2\",\"next\":\"^9.1.3\",\"next-url-prettifier\":\"^1.4.0\",\"now\":\"^16.4.4\",\"postcss-easy-import\":\"3.0.0\",\"postcss-loader\":\"3.0.0\",\"prop-types\":\"^15.7.2\",\"raw-loader\":\"^3.1.0\",\"react\":\"^16.11.0\",\"react-dom\":\"^16.11.0\",\"react-icons\":\"^3.8.0\",\"speakingurl\":\"^14.0.1\"},\"devDependencies\":{\"babel-eslint\":\"^10.0.3\",\"eslint\":\"^6.6.0\",\"eslint-config-airbnb\":\"^18.0.1\",\"eslint-config-prettier\":\"^6.5.0\",\"eslint-config-wesbos\":\"0.0.19\",\"eslint-plugin-html\":\"^6.0.0\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-prettier\":\"^3.1.1\",\"eslint-plugin-react\":\"^7.16.0\",\"eslint-plugin-react-hooks\":\"^2.2.0\",\"prettier\":\"^1.19.1\",\"stylus\":\"^0.54.7\",\"stylus-loader\":\"^3.0.2\"}}");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony import */ var _styles_style_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.styl */ "./styles/style.styl");
/* harmony import */ var _lib_getBaseURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/getBaseURL */ "./lib/getBaseURL.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SyntaxDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const {
      req
    } = ctx;
    const baseURL = Object(_lib_getBaseURL__WEBPACK_IMPORTED_MODULE_4__["default"])(req);
    console.log(baseURL);
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps, {
      baseURL
    });
  }

  render() {
    const {
      baseURL
    } = this.props;
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), __jsx("meta", {
      name: "description",
      content: _package_json__WEBPACK_IMPORTED_MODULE_2__["description"]
    }), __jsx("meta", {
      name: "theme-color",
      content: "#F1C15D"
    }), __jsx("meta", {
      charSet: "utf-8"
    }), __jsx("meta", {
      property: "og:description",
      content: _package_json__WEBPACK_IMPORTED_MODULE_2__["description"]
    }), __jsx("meta", {
      property: "og:image",
      content: `${baseURL}/static/syntax-banner.png`
    }), __jsx("link", {
      rel: "shortcut icon",
      href: `${baseURL}/static/favicon.png`
    }), __jsx("style", {
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML: {
        __html: _styles_style_styl__WEBPACK_IMPORTED_MODULE_3__["default"].replace(/\n/g, '')
      }
    })), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SyntaxDocument);

/***/ }),

/***/ "./styles/style.styl":
/*!***************************!*\
  !*** ./styles/style.styl ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden] {\n  display: none;\n}\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\na:focus {\n  outline: thin dotted;\n}\na:active,\na:hover {\n  outline: 0;\n}\nh1 {\n  font-size: 2em;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: 700;\n}\ndfn {\n  font-style: italic;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\nq {\n  quotes: 2 1C 2 1D 2 18 2 19;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n}\nbutton,\ninput {\n  line-height: normal;\n}\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody,\nfigure {\n  margin: 0;\n}\nlegend,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n* {\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n}\n@font-face {\n  font-family: '💪';\n  src: url(\"/static/fonts/Radnika-Bold.woff2\") format('woff2'), url(\"/static/fonts/Radnika-Bold.woff\") format('woff');\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: '💪';\n  font-weight: 100;\n}\n@font-face {\n  font-family: 'rad';\n  src: url(\"/static/fonts/Radnika-Light.woff2\") format('woff2'), url(\"/static/fonts/Radnika-Light.woff\") format('woff');\n}\nhtml {\n  font-size: 10px;\n}\nbody {\n  font-family: 'rad';\n  color: #1d1d1d;\n  line-height: 1.5;\n}\nli {\n  line-height: 1.7;\n}\na {\n  color: #f1c15d;\n  text-decoration: none;\n}\n.tagline {\n  font-size: 2.5rem;\n  margin: 0;\n}\n@media (max-width: 1000px) {\n  .tagline {\n    text-align: center;\n  }\n}\n@media (max-width: 800px) {\n  .tagline {\n    font-size: 1.5rem;\n  }\n}\n.wrapper,\n.header,\n.footer {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.wrapper--text,\n.header--text,\n.footer--text {\n  background: #fff;\n  padding: 2rem;\n  font-size: 1.7rem;\n}\n@media (max-width: 1000px) {\n  .wrapper,\n  .header,\n  .footer {\n    padding: 0 2rem;\n  }\n}\nbody {\n  background: #1d1d1d url(\"/static/background.jpg\");\n  border-top: 3px solid #f1c15d;\n}\n.skip-link {\n  position: absolute;\n  top: -1000px;\n  left: -1000px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 2px solid #f1c15d;\n  padding: 10px 15px;\n  font-size: 16px;\n  background: #000;\n}\n.skip-link:active,\n.skip-link:focus,\n.skip-link:hover {\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n  width: auto;\n  height: auto;\n  overflow: visible;\n}\n.header {\n  display: flex;\n  color: #fff;\n  flex-wrap: wrap;\n  margin: 2rem auto;\n}\n.header__left {\n  width: 30%;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  .header__left {\n    width: 100%;\n  }\n}\n.header__right {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media (max-width: 800px) {\n  .header__right {\n    width: 100%;\n  }\n}\n.header__logo {\n  margin-left: -3rem;\n  max-width: 300px;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  .header__logo {\n    margin-left: -2rem;\n  }\n}\n.title {\n  position: relative;\n}\n.title__potluck-btn {\n  border: 1px solid #f1c15d;\n  border-radius: 3px;\n  padding: 5px 10px;\n  position: absolute;\n  right: 0;\n  top: 5px;\n  font-size: 12px;\n}\n.title__potluck-btn:hover {\n  border: 1px dotted;\n}\n@media (max-width: 1000px) {\n  .title__potluck-btn {\n    position: relative;\n    margin: 10px 0;\n    text-align: center;\n    display: block;\n    top: 0;\n  }\n}\n.subscribe {\n  width: 100%;\n}\n.subscribe__links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  list-style: none;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n@media (max-width: 800px) {\n  .subscribe__links {\n    justify-content: space-between;\n  }\n}\n@supports (display: grid) {\n@media (max-width: 1000px) {\n    .subscribe__links {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));\n      grid-gap: 2rem;\n    }\n}\n@media (max-width: 800px) {\n    .subscribe__links {\n      grid-gap: 1rem;\n    }\n}\n@media (max-width: 670px) {\n    .subscribe__links {\n      display: flex;\n    }\n}\n}\n.subscribe__link {\n  flex: 0 1 auto;\n  margin-bottom: 1rem;\n}\n@supports (display: grid) {\n  .subscribe__link {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 670px) {\n  .subscribe__link {\n    flex: 1 1 auto;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n  }\n  @supports (display: grid) {\n    .subscribe__link {\n      margin-right: 0;\n      margin-bottom: 0;\n    }\n  }\n}\n.subscribe__link a {\n  background: #f1c15d;\n  display: block;\n  color: rgba(0,0,0,0.8);\n  text-shadow: 1px 1px 0 rgba(255,255,255,0.2);\n  box-shadow: inset 0 0 0 2px rgba(0,0,0,0.05);\n  font-size: 1.5rem;\n  padding: 0.7rem 1rem;\n  text-align: center;\n  border-radius: 3px;\n  font-family: sans-serif;\n  font-weight: 100;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n}\n.subscribe__link a:hover {\n  box-shadow: inset 0 0 0 2px rgba(0,0,0,0.4);\n}\n.subscribe__link a:before {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  content: '';\n  margin-right: 0.7rem;\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: 0 0 0 2px rgba(0,0,0,0.05);\n}\n@media (max-width: 1000px) {\n  .subscribe__link--subscribe {\n    display: none;\n  }\n}\n.subscribe__link--subscribe a {\n  pointer-events: none;\n  background: linear-gradient(to bottom, #f1c15d 0%, #f1c260 100%);\n  text-decoration: none;\n}\n.subscribe__link--subscribe a:before {\n  width: 0;\n  box-shadow: none;\n  margin: 0;\n}\n.subscribe__link--itunes a {\n  background: linear-gradient(to bottom, #cd66f6 0%, #9a3dd1 80%, #8e34c9 100%);\n}\n.subscribe__link--itunes a:before {\n  background-image: url(\"/static/icons/itunes.jpg\");\n}\n.subscribe__link--overcast a {\n  background: linear-gradient(to bottom, #ff8a0a 0%, #ff6930 100%);\n}\n.subscribe__link--overcast a:before {\n  background-image: url(\"/static/icons/overcast.jpg\");\n}\n.subscribe__link--rss a {\n  background: linear-gradient(to bottom, #f7a336 0%, #eb6d1e 96%, #eb6c1e 100%);\n}\n.subscribe__link--rss a:before {\n  background-image: url(\"/static/icons/rss.svg\");\n}\n.subscribe__link--stitcher a {\n  background: linear-gradient(to bottom, #ccd557 0%, #c8d05b 94%);\n}\n.subscribe__link--stitcher a:before {\n  background-image: url(\"/static/icons/stitcher.jpg\");\n}\n.subscribe__link--breaker a {\n  background: linear-gradient(105deg, #00adea 0%, #15b8ec 100%);\n}\n.subscribe__link--breaker a:before {\n  background-image: url(\"/static/icons/breaker.jpg\");\n}\n.subscribe__link--pocketcasts a {\n  background: linear-gradient(to bottom, #f22b24 0%, #d70c0b 100%);\n}\n.subscribe__link--pocketcasts a:before {\n  background-image: url(\"/static/icons/pocketcasts.jpg\");\n}\n.subscribe__link--googleplay a {\n  background: linear-gradient(to bottom, #25bbc3 0%, #38d7df 100%);\n}\n.subscribe__link--googleplay a:before {\n  background-image: url(\"/static/icons/googleplay.png\");\n  background-color: #fff;\n}\n.subscribe__link--spotify a {\n  background: linear-gradient(to bottom, #04a03b 0%, #10ac47 100%);\n}\n.subscribe__link--spotify a:before {\n  background-image: url(\"/static/icons/spotify.svg\");\n}\n.subscribe__link--google a {\n  background: linear-gradient(to bottom, #f57917 0%, #feb95a 100%);\n}\n.subscribe__link--google a:before {\n  background-image: url(\"/static/icons/google_podcasts.svg\");\n}\n@media (max-width: 670px) and (max-width: 670px) {\n  .subscribe__link {\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n  }\n}\n.people {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 0;\n  flex-wrap: wrap;\n  font-size: 1.4rem;\n}\n.person {\n  background: rgba(255,255,255,0.07);\n  padding: 1rem;\n  width: 48%;\n}\n@media (max-width: 800px) {\n  .person {\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n}\n.person p {\n  margin-bottom: 0;\n  clear: left;\n}\n.person h3 {\n  margin: 0;\n  margin-top: 10px;\n  font-size: 2rem;\n}\n@media (max-width: 800px) {\n  .person h3 {\n    margin-top: 0;\n  }\n}\n.person h3 em {\n  font-size: 1rem;\n}\n.avatar {\n  border-radius: 50%;\n  width: 80px;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 15px;\n  border: 3px solid #fff;\n  box-shadow: inset 0 0 10px #f00;\n}\n@media (max-width: 800px) {\n  .avatar {\n    width: 50px;\n    border-width: 1px;\n  }\n}\n.sr-only {\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  -webkit-clip-path: inset(50%) !important;\n          clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n}\n.player {\n  bottom: 0;\n  width: 100%;\n  background: #1d1d1d;\n  border-top: 1px solid #f1c15d;\n  color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  position: sticky;\n  position: -webkit-sticky;\n  top: -1px;\n  z-index: 2;\n}\n.player__section {\n  order: 2;\n}\n.player__section--left {\n  width: 100px;\n  min-width: 80px;\n}\n@media (max-width: 650px) {\n  .player__section--left {\n    flex: 1;\n  }\n}\n.player__section--left > * {\n  width: 100%;\n}\n.player__section--middle {\n  position: relative;\n  flex: 1 1 auto;\n  border-right: 1px solid rgba(0,0,0,0.6);\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 650px) {\n  .player__section--middle {\n    order: 1;\n    width: 100%;\n  }\n}\n.player__section--right {\n  display: flex;\n}\n@media (max-width: 650px) {\n  .player__section--right {\n    flex: 2;\n  }\n}\n.player__section--right > * {\n  width: 100%;\n}\n.player__icon {\n  font-size: 2rem;\n  line-height: 0.5;\n}\n.player__title {\n  font-size: 1.5rem;\n  margin: 0;\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  padding-left: 2rem;\n  max-width: 650px;\n}\n@media (max-width: 650px) {\n  .player__title {\n    padding: 1rem;\n  }\n}\n.player__tooltip {\n  position: absolute;\n  top: 22px;\n  transform: translate(-50%);\n  opacity: 0;\n}\n.player__tooltip:after {\n  content: \" \";\n  position: absolute;\n  bottom: 94%;\n  left: 50%;\n  margin-left: -2px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent transparent #fff transparent;\n}\n.player button {\n  background: #1d1d1d;\n  border: 0;\n  color: #fff;\n  padding: 1rem;\n  border-right: 1px solid rgba(0,0,0,0.6);\n  outline-color: #f1c15d;\n}\n.player__speeddisplay {\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.player__speed {\n  flex: 0 1 auto;\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n}\n.player__speed > * {\n  width: 100%;\n  margin: 0;\n}\n.player__speed__display {\n  height: 2.5rem;\n}\n.player__inputs {\n  font-size: 0;\n}\n.player__volume {\n  width: 120px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 1rem;\n  flex-wrap: wrap;\n  flex: 1 0 auto;\n}\n.player__volume:focus-within {\n  outline: #f1c15d auto 5px;\n}\n.player__volume:hover label {\n  border-top: 1px solid #f1c15d;\n}\n.player__volume label {\n  border-top: 1px solid #03fff3;\n}\n.player__volume label:hover ~ label {\n  border-top: 1px solid #1d1d1d;\n}\n.player__volume p {\n  width: 100%;\n  margin: 0;\n}\n.player__volume input ~ label {\n  background: #03fff3;\n  border-right: 2px solid #1d1d1d;\n  display: inline-block;\n  width: 8px;\n  height: 2.5rem;\n}\n.player__volume input:checked ~ label {\n  background: #e4e4e4;\n}\n.player__volume input:checked + label {\n  background: #03fff3;\n}\n.progress {\n  background: #0d0d0d;\n  height: 2rem;\n  cursor: crosshair;\n  overflow: hidden;\n}\n.progress__time {\n  background: #03fff3;\n  border-right: 1px solid rgba(0,0,0,0.1);\n  min-width: 20px;\n  height: 100%;\n  transition: width 0.1s;\n  background: linear-gradient(30deg, #d2ff52 0%, #03fff3 100%);\n}\n.bars {\n  height: 30px;\n  width: 40px;\n  position: relative;\n}\n.bar {\n  background: #03fff3;\n  bottom: 1px;\n  height: 3px;\n  position: absolute;\n  width: 3px;\n  -webkit-animation: sound 0ms -800ms linear infinite alternate;\n          animation: sound 0ms -800ms linear infinite alternate;\n}\n.bars--paused > * {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.bar:nth-child(1) {\n  left: 1px;\n  -webkit-animation-duration: 474ms;\n          animation-duration: 474ms;\n}\n.bar:nth-child(2) {\n  left: 5px;\n  -webkit-animation-duration: 433ms;\n          animation-duration: 433ms;\n}\n.bar:nth-child(3) {\n  left: 9px;\n  -webkit-animation-duration: 407ms;\n          animation-duration: 407ms;\n}\n.bar:nth-child(4) {\n  left: 13px;\n  -webkit-animation-duration: 458ms;\n          animation-duration: 458ms;\n}\n.bar:nth-child(5) {\n  left: 17px;\n  -webkit-animation-duration: 400ms;\n          animation-duration: 400ms;\n}\n.bar:nth-child(6) {\n  left: 21px;\n  -webkit-animation-duration: 427ms;\n          animation-duration: 427ms;\n}\n.bar:nth-child(7) {\n  left: 25px;\n  -webkit-animation-duration: 441ms;\n          animation-duration: 441ms;\n}\n.bar:nth-child(8) {\n  left: 29px;\n  -webkit-animation-duration: 419ms;\n          animation-duration: 419ms;\n}\n.bar:nth-child(9) {\n  left: 33px;\n  -webkit-animation-duration: 487ms;\n          animation-duration: 487ms;\n}\n.bar:nth-child(10) {\n  left: 37px;\n  -webkit-animation-duration: 442ms;\n          animation-duration: 442ms;\n}\n@-webkit-keyframes sound {\n  0% {\n    opacity: 0.35;\n    background: #f1c15d;\n    height: 3px;\n  }\n  100% {\n    opacity: 1;\n    background: #eca920;\n    height: 28px;\n  }\n}\n@keyframes sound {\n  0% {\n    opacity: 0.35;\n    background: #f1c15d;\n    height: 3px;\n  }\n  100% {\n    opacity: 1;\n    background: #eca920;\n    height: 28px;\n  }\n}\n.bottom {\n  text-align: center;\n  color: #fff;\n}\n.show {\n  border-right: 1px solid #e4e4e4;\n  border-bottom: 1px solid #e4e4e4;\n  border-left: 10px solid #e4e4e4;\n  background: #f9f9f9;\n  position: relative;\n  display: flex;\n}\n@media (max-width: 650px) {\n  .show {\n    flex: 1 0 auto;\n  }\n}\n.show a {\n  flex: 1 1 auto;\n  padding: 10px;\n}\n.show__playcontrols {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5rem;\n  flex-shrink: 0;\n  padding: 1rem;\n}\n.show__playcontrols button {\n  background: none;\n  border: 0;\n  outline-color: #f1c15d;\n}\n.show__playcontrols button:hover {\n  color: #f1c15d;\n}\n.show--dummy {\n  flex: 1 0 auto;\n}\n.show--active {\n  border-right-color: #fff;\n  background: #fff;\n  border-left: 0;\n  padding-left: 1rem;\n}\n.show--active:before {\n  display: block;\n  background: linear-gradient(30deg, #d2ff52 0%, #03fff3 100%);\n  width: 10px;\n  height: 100%;\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.show__container {\n  display: flex;\n}\n.show__displayNumber {\n  text-transform: uppercase;\n  margin: 0 6px 0 0;\n  font-size: 11px;\n  color: #4b4747;\n}\n.show__title {\n  color: #1d1d1d;\n  font-size: 1.5rem;\n  margin: 0;\n}\n.show__date {\n  margin-top: 0;\n  text-align: right;\n  color: #666;\n  font-size: 1.2rem;\n}\n.show__modifiedDate {\n  font-size: 11px;\n  font-weight: 100;\n  color: #666;\n  margin: 0 0 0 6px;\n}\n.show-wrap {\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n}\n.showList {\n  width: 38%;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 650px) {\n  .showList {\n    height: 300px;\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: scroll;\n  }\n}\n.showNotes {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 102px;\n  height: calc(100vh - 102px);\n  overflow-y: scroll;\n  padding: 2rem;\n  width: 62%;\n  font-size: 1.5rem;\n}\n@media (max-width: 650px) {\n  .showNotes {\n    width: 100%;\n  }\n}\n.showNotes .button {\n  border-bottom: 0;\n}\n.showNotes ul {\n  padding-left: 2rem;\n  list-style-type: circle;\n}\n.showNotes li {\n  margin: 10px 0;\n}\n.showNotes h1,\n.showNotes h2,\n.showNotes h3,\n.showNotes h4,\n.showNotes h5,\n.showNotes h6 {\n  font-family: 'courier';\n  font-weight: 100;\n  border-bottom: 1px solid #e4e4e4;\n  padding-bottom: 1rem;\n}\n.showNotes h1:before,\n.showNotes h2:before,\n.showNotes h3:before,\n.showNotes h4:before,\n.showNotes h5:before,\n.showNotes h6:before {\n  padding-right: 1rem;\n}\n.showNotes pre {\n  background: #f9f9f9;\n  padding: 1rem;\n}\n.showNotes h1,\n.showNotes h2 {\n  font-size: 2.5rem;\n}\n.showNotes a {\n  color: #4a4a4a;\n  border-bottom: 1px solid #f1c15d;\n  text-decoration: none;\n}\n.button,\na.button {\n  border: 0;\n  background: #f9f9f9;\n  color: #1d1d1d;\n  padding: 0;\n  line-height: 1;\n  font-size: 1.5rem;\n  padding: 1rem;\n  display: inline-block;\n  transition: all 0.2s;\n}\n.button:hover,\na.button:hover {\n  background: #f2f2f2;\n}\n.button + .button,\na.button + .button {\n  margin-left: 1rem;\n}\n.button .icon,\na.button .icon {\n  border-right: 1px solid #e4e4e4;\n  padding-right: 0.5rem;\n  margin-right: 0.5rem;\n}\nfigure,\nfigcaption {\n  font-size: 10px;\n  text-align: right;\n}\n.wrapper--text ul,\n.wrapper--text ol {\n  list-style: square;\n}\n.wrapper--text strong {\n  font-weight: 900;\n}\n.wrapper--text h1 {\n  font-size: 50px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.wrapper--text h2 {\n  font-size: 40px;\n}\n.wrapper--text h1,\n.wrapper--text h2 {\n  padding-bottom: 10px;\n  border-bottom: 2px solid #f1c15d;\n}\n.wrapper--text a {\n  color: #1d1d1d;\n  border-bottom: 1px solid #f1c15d;\n}\n.subscribe__link a:focus {\n  outline-color: #f1c15d;\n}\n");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map