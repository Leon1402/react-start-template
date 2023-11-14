"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[771],{"./src/stories/AddToCartButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,InputWithCounter:()=>InputWithCounter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Button$parameters,_Button$parameters2,_Button$parameters2$d,_InputWithCounter$par,_InputWithCounter$par2,_InputWithCounter$par3,_components_buttons_AddToCartButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/buttons/AddToCartButton.tsx");__webpack_require__("./src/index.css");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Example/AddToCartButton",component:_components_buttons_AddToCartButton__WEBPACK_IMPORTED_MODULE_0__.a,tags:["autodocs"],argTypes:{counter:{defaultValue:0}}};var Button={args:{counter:0}},InputWithCounter={args:{counter:1}};Button.parameters=_objectSpread(_objectSpread({},Button.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Button$parameters=Button.parameters)||void 0===_Button$parameters?void 0:_Button$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    counter: 0\n  }\n}"},null===(_Button$parameters2=Button.parameters)||void 0===_Button$parameters2||null===(_Button$parameters2$d=_Button$parameters2.docs)||void 0===_Button$parameters2$d?void 0:_Button$parameters2$d.source)})}),InputWithCounter.parameters=_objectSpread(_objectSpread({},InputWithCounter.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InputWithCounter$par=InputWithCounter.parameters)||void 0===_InputWithCounter$par?void 0:_InputWithCounter$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    counter: 1\n  }\n}"},null===(_InputWithCounter$par2=InputWithCounter.parameters)||void 0===_InputWithCounter$par2||null===(_InputWithCounter$par3=_InputWithCounter$par2.docs)||void 0===_InputWithCounter$par3?void 0:_InputWithCounter$par3.source)})});var __namedExportsOrder=["Button","InputWithCounter"]},"./src/components/buttons/AddToCartButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>AddToCartButton});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var buttonStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  transition: all 0.3s ease-out;\n  padding: 10px;\n  border-radius: 5px;\n"]))),StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  border-radius: 10px;\n  ","\n  background: #005bff;\n  color: white;\n  &:hover {\n    background: #005bdd;\n  }\n"])),buttonStyle),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  display: flex;\n"]))),CounterInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  width: 30px;\n  text-align: center;\n  border: none;\n  border: 1px solid rgba(0, 150, 255, 0.08);\n  border-left: none;\n  border-right: none;\n"]))),CounterButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n  color: #005bff;\n  background: rgba(0, 150, 255, 0.08);\n  &:hover {\n    background: rgba(0, 150, 255, 0.2);\n  }\n  padding: 10px;\n  ","\n"])),buttonStyle,(function(_ref){return _ref.$left?{borderTopRightRadius:0,borderBottomRightRadius:0}:{borderTopLeftRadius:0,borderBottomLeftRadius:0}})),Button=function Button(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{children:"add to cart"})};Button.displayName="Button";var InputWithCounter=function InputWithCounter(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CounterButton,{$left:!0,children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CounterInput,{defaultValue:10}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CounterButton,{children:"+"})]})};InputWithCounter.displayName="InputWithCounter";var AddToCartButton=function AddToCartButton(_ref2){return _ref2.counter?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputWithCounter,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button,{})};try{AddToCartButton.displayName="AddToCartButton",AddToCartButton.__docgenInfo={description:"",displayName:"AddToCartButton",props:{counter:{defaultValue:null,description:"",name:"counter",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/AddToCartButton.tsx#AddToCartButton"]={docgenInfo:AddToCartButton.__docgenInfo,name:"AddToCartButton",path:"src/components/buttons/AddToCartButton.tsx#AddToCartButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    border: none;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n        monospace;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT;;oCAEgC;IAChC,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,UAAU;IACV,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI;iBACa;AACjB",sourcesContent:["body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    border: none;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n        monospace;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/index.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_index_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/index.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_index_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_index_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_index_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_index_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);