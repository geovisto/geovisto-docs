"use strict";
(self["webpackChunkgeovisto_docu"] = self["webpackChunkgeovisto_docu"] || []).push([[10862],{

/***/ 15680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 1335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EditThisPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_dcUD"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){let{className,...restProps}=_ref;return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.A)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){let{editUrl}=_ref;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:lib/* ThemeClassNames */.GN.common.editThisPage},/*#__PURE__*/react.createElement(IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

/***/ }),

/***/ 50039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_mojV","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_R0VQ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnchorHeading(_ref){let{as:As,id,...props}=_ref;const{navbar:{hideOnScroll}}=(0,lib/* useThemeConfig */.pN)();if(!id){return/*#__PURE__*/react.createElement(As,props);}return/*#__PURE__*/react.createElement(As,(0,esm_extends/* default */.A)({},props,{className:(0,clsx_m/* default */.A)('anchor',hideOnScroll?styles_module.anchorWithHideOnScrollNavbar:styles_module.anchorWithStickyNavbar),id:id}),props.children,/*#__PURE__*/react.createElement("a",{className:"hash-link",href:`#${id}`,title:(0,Translate/* translate */.T)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));}function Heading(_ref2){let{as,...props}=_ref2;if(as==='h1'){return/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.A)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children);}return/*#__PURE__*/react.createElement(AnchorHeading,(0,esm_extends/* default */.A)({as:as},props));}

/***/ }),

/***/ 82026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(15680);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Head.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){if(element?.props?.mdxType&&element?.props?.originalType){const{mdxType,originalType,...newProps}=element.props;return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}function MDXHead(props){const unwrappedChildren=react.Children.map(props.children,child=>unwrapMDXElement(child));return/*#__PURE__*/react.createElement(Head/* default */.A,props,unwrappedChildren);}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(61258);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ const dist = (Highlight);


// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(text,_temp){let{target=document.body}=_temp===void 0?{}:_temp;if(typeof text!=='string'){throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);}const element=document.createElement('textarea');const previouslyFocusedElement=document.activeElement;element.value=text;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
const selection=document.getSelection();const originalRange=selection.rangeCount>0&&selection.getRangeAt(0);target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=text.length;let isSuccess=false;try{isSuccess=document.execCommand('copy');}catch{}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"copyButton":"copyButton_eDfN","copyButtonCopied":"copyButtonCopied_ljy5","copyButtonIcons":"copyButtonIcons_W9eQ","copyButtonIcon":"copyButtonIcon_XEyF","copyButtonSuccessIcon":"copyButtonSuccessIcon_i9w9"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CopyButton(_ref){let{code}=_ref;const[isCopied,setIsCopied]=(0,react.useState)(false);const copyTimeout=(0,react.useRef)(undefined);const handleCopyCode=(0,react.useCallback)(()=>{copyTextToClipboard(code);setIsCopied(true);copyTimeout.current=window.setTimeout(()=>{setIsCopied(false);},1000);},[code]);(0,react.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current),[]);return/*#__PURE__*/react.createElement("button",{type:"button","aria-label":isCopied?(0,Translate/* translate */.T)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.T)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),title:(0,Translate/* translate */.T)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'}),className:(0,clsx_m/* default */.A)(styles_module.copyButton,'clean-btn',isCopied&&styles_module.copyButtonCopied),onClick:handleCopyCode},/*#__PURE__*/react.createElement("span",{className:styles_module.copyButtonIcons,"aria-hidden":"true"},/*#__PURE__*/react.createElement("svg",{className:styles_module.copyButtonIcon,viewBox:"0 0 24 24"},/*#__PURE__*/react.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),/*#__PURE__*/react.createElement("svg",{className:styles_module.copyButtonSuccessIcon,viewBox:"0 0 24 24"},/*#__PURE__*/react.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CodeBlock_styles_module = ({"codeBlockContainer":"codeBlockContainer_I0IT","codeBlockContent":"codeBlockContent_wNvx","codeBlockTitle":"codeBlockTitle_BvAR","codeBlock":"codeBlock_jd64","codeBlockStandalone":"codeBlockStandalone_csWH","codeBlockLines":"codeBlockLines_mRuA"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlock(_ref){let{children,className:blockClassName='',metastring,title,language:languageProp}=_ref;const{prism}=(0,lib/* useThemeConfig */.pN)();const[mounted,setMounted]=(0,react.useState)(false);// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
(0,react.useEffect)(()=>{setMounted(true);},[]);// We still parse the metastring in case we want to support more syntax in the
// future. Note that MDX doesn't strip quotes when parsing metastring:
// "title=\"xyz\"" => title: "\"xyz\""
const codeBlockTitle=(0,lib/* parseCodeBlockTitle */.wt)(metastring)||title;const prismTheme=(0,lib/* usePrismTheme */.Ai)();// <pre> tags in markdown map to CodeBlocks and they may contain JSX children.
// When the children is not a simple string, we just return a styled block
// without actually highlighting.
if(react.Children.toArray(children).some(el=>/*#__PURE__*/(0,react.isValidElement)(el))){return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.A)({},defaultProps,{key:String(mounted),theme:prismTheme,code:"",language:'text'}),_ref2=>{let{className,style}=_ref2;return/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.A)(className,CodeBlock_styles_module.codeBlockStandalone,'thin-scrollbar',CodeBlock_styles_module.codeBlockContainer,blockClassName,lib/* ThemeClassNames */.GN.common.codeBlock),style:style},/*#__PURE__*/react.createElement("code",{className:CodeBlock_styles_module.codeBlockLines},children));});}// The children is now guaranteed to be one/more plain strings
const content=Array.isArray(children)?children.join(''):children;const language=languageProp??(0,lib/* parseLanguage */.Op)(blockClassName)??prism.defaultLanguage;const{highlightLines,code}=(0,lib/* parseLines */.Li)(content,metastring,language);return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.A)({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language??'text'}),_ref3=>{let{className,style,tokens,getLineProps,getTokenProps}=_ref3;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(CodeBlock_styles_module.codeBlockContainer,blockClassName,{[`language-${language}`]:language&&!blockClassName.includes(`language-${language}`)},lib/* ThemeClassNames */.GN.common.codeBlock)},codeBlockTitle&&/*#__PURE__*/react.createElement("div",{style:style,className:CodeBlock_styles_module.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react.createElement("div",{className:CodeBlock_styles_module.codeBlockContent,style:style},/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.A)(className,CodeBlock_styles_module.codeBlock,'thin-scrollbar')},/*#__PURE__*/react.createElement("code",{className:CodeBlock_styles_module.codeBlockLines},tokens.map((line,i)=>{if(line.length===1&&line[0].content==='\n'){line[0].content='';}const lineProps=getLineProps({line,key:i});if(highlightLines.includes(i)){lineProps.className+=' docusaurus-highlight-code-line';}return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.A)({key:i},lineProps),line.map((token,key)=>/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.A)({key:key},getTokenProps({token,key})))),/*#__PURE__*/react.createElement("br",null));}))),/*#__PURE__*/react.createElement(CopyButton,{code:code})));});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXCode(props){const inlineElements=['a','b','big','i','span','em','strong','sup','sub','small'];const shouldBeInline=react.Children.toArray(props.children).every(el=>typeof el==='string'&&!el.includes('\n')||/*#__PURE__*/(0,react.isValidElement)(el)&&inlineElements.includes(el.props.mdxType));return shouldBeInline?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/A.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXA(props){return/*#__PURE__*/react.createElement(Link/* default */.A,props);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){return/*#__PURE__*/react.createElement(CodeBlock// If this pre is created by a ``` fenced codeblock, unwrap the children
,/*#__PURE__*/(0,react.isValidElement)(props.children)&&props.children.props.originalType==='code'?props.children?.props:{...props});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_BAp3"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details(_ref){let{...props}=_ref;return/*#__PURE__*/react.createElement(lib/* Details */.B_,(0,esm_extends/* default */.A)({},props,{className:(0,clsx_m/* default */.A)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){const items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
const summary=items.find(item=>item?.props?.mdxType==='summary');const children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(item=>item!==summary));return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.A)({},props,{summary:summary}),children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(50039);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXHeading(props){return/*#__PURE__*/react.createElement(Heading/* default */.A,props);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Ul.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Ul_module = ({"contains-task-list":"contains-task-list_tsSF"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Ul.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const containsClassListLocalClass=Ul_module['contains-task-list'];function transformUlClassName(className){return (0,clsx_m/* default */.A)(className,// This class is set globally by GitHub/MDX
// We keep the global class, but apply scoped CSS
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
className?.includes('contains-task-list')&&containsClassListLocalClass);}function MDXUl(props){return/*#__PURE__*/react.createElement("ul",(0,esm_extends/* default */.A)({},props,{className:transformUlClassName(props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Img.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Img_module = ({"img":"img_E7b_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/Img.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx_m/* default */.A)(className,Img_module.img);}function MDXImg(props){return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/alt-text
react.createElement("img",(0,esm_extends/* default */.A)({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const MDXComponents={head:MDXHead,code:MDXCode,a:MDXA,pre:MDXPre,details:MDXDetails,ul:MDXUl,img:MDXImg,h1:props=>/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.A)({as:"h1"},props)),h2:props=>/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.A)({as:"h2"},props)),h3:props=>/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.A)({as:"h3"},props)),h4:props=>/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.A)({as:"h4"},props)),h5:props=>/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.A)({as:"h5"},props)),h6:props=>/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.A)({as:"h6"},props))};/* harmony default export */ const theme_MDXComponents = (MDXComponents);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent(_ref){let{children}=_ref;return/*#__PURE__*/react.createElement(esm/* MDXProvider */.xA,{components:theme_MDXComponents},children);}

/***/ }),

/***/ 15058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75489);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:"pagination-nav__link",to:permalink},subLabel&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__sublabel"},subLabel),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__label"},title));}

/***/ }),

/***/ 62610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_hD8n","tagRegular":"tagRegular_D6E_","tagWithCount":"tagWithCount_i0QQ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(props){const{permalink,name,count}=props;return/*#__PURE__*/react.createElement(Link/* default */.A,{href:permalink,className:(0,clsx_m/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular)},name,count&&/*#__PURE__*/react.createElement("span",null,count));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TagsListInline_styles_module = ({"tags":"tags_XVD_","tag":"tag_JSN8"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){let{tags}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.A)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm')},tags.map(_ref2=>{let{label,permalink:tagPermalink}=_ref2;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:TagsListInline_styles_module.tag},/*#__PURE__*/react.createElement(Tag,{name:label,permalink:tagPermalink}));})));}

/***/ })

}]);