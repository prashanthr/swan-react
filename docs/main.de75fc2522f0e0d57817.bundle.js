(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1259:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(454);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1283)],module)}.call(this,__webpack_require__(1260)(module))},1283:function(module,exports,__webpack_require__){var map={"./Button.stories.js":1284,"./Modal.stories.js":1305,"./Recaptcha.stories.js":1311};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1283},1284:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ButtonWidget",(function(){return ButtonWidget})),__webpack_require__.d(__webpack_exports__,"ButtonWidgetCustomContent",(function(){return ButtonWidgetCustomContent}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(86),__webpack_require__(41)),addSourceDecorator=(__webpack_require__(116).withSource,__webpack_require__(116).addSource),__SOURCE_PREFIX__="/Users/prash/Development/projects/own/swan-react/stories",__STORY__="import React from 'react'\nimport { action } from '@storybook/addon-actions'\nimport { Button } from '../src'\n\nexport default {\n  title: 'Button',\n  component: Button,\n}\n\nexport const ButtonWidget = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => alert('Button was clicked')}\n        value='This is a button'\n        withBorder\n      />\n    </div>\n  )\n}\n\nexport const ButtonWidgetCustomContent = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => alert('Button was clicked')}\n        value={<span style={{ color: 'red' }}>This is custom text</span>}\n        withBorder\n      />\n    </div>\n  )\n}\n\nButtonWidget.story = {\n  name: 'Button'\n}\n",__ADDS_MAP__={"button--button-widget":{startLoc:{col:28,line:10},endLoc:{col:1,line:20},startBody:{col:28,line:10},endBody:{col:1,line:20}},"button--button-widget-custom-content":{startLoc:{col:41,line:22},endLoc:{col:1,line:32},startBody:{col:41,line:22},endBody:{col:1,line:32}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react'\nimport { action } from '@storybook/addon-actions'\nimport { Button } from '../src'\n\nexport default {\n  title: 'Button',\n  component: Button,\n}\n\nexport const ButtonWidget = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => alert('Button was clicked')}\n        value='This is a button'\n        withBorder\n      />\n    </div>\n  )\n}\n\nexport const ButtonWidgetCustomContent = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => alert('Button was clicked')}\n        value={<span style={{ color: 'red' }}>This is custom text</span>}\n        withBorder\n      />\n    </div>\n  )\n}\n\nButtonWidget.story = {\n  name: 'Button'\n}\n",locationsMap:{"button--button-widget":{startLoc:{col:28,line:10},endLoc:{col:1,line:20},startBody:{col:28,line:10},endBody:{col:1,line:20}},"button--button-widget-custom-content":{startLoc:{col:41,line:22},endLoc:{col:1,line:32},startBody:{col:41,line:22},endBody:{col:1,line:32}}}}},title:"Button",component:_src__WEBPACK_IMPORTED_MODULE_2__.a};var ButtonWidget=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function onClick(){return alert("Button was clicked")},value:"This is a button",withBorder:!0}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),ButtonWidgetCustomContent=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function onClick(){return alert("Button was clicked")},value:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{color:"red"}},"This is custom text"),withBorder:!0}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});ButtonWidget.story={name:"Button"}},1299:function(module,exports,__webpack_require__){var api=__webpack_require__(184),content=__webpack_require__(1300);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1300:function(module,exports,__webpack_require__){(exports=__webpack_require__(185)(!1)).push([module.i,".swan-react-button {\n  display:block;\n  outline:none;\n}\n\n.swan-react-button-unbordered {\n  border: none;\n}\n",""]),module.exports=exports},1301:function(module,exports,__webpack_require__){var api=__webpack_require__(184),content=__webpack_require__(1302);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1302:function(module,exports,__webpack_require__){(exports=__webpack_require__(185)(!1)).push([module.i,".swan-react-modal-close {\n  float: right;\n  cursor: pointer;\n}\n\n.swan-react-modal-close-button-default {\n  width: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  border-radius: 0.25rem;\n  background-color: lightgray;\n}\n\n.swan-react-modal-close-button-default:hover {\n  background-color: darkgray;\n}\n",""]),module.exports=exports},1303:function(module,exports,__webpack_require__){var api=__webpack_require__(184),content=__webpack_require__(1304);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1304:function(module,exports,__webpack_require__){(exports=__webpack_require__(185)(!1)).push([module.i,".swan-react-modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.swan-react-model-open {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1.0);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.swan-react-modal-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 1rem 1.5rem;\n  width: 24rem;\n  border-radius: 0.5rem;\n}\n",""]),module.exports=exports},1305:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ModalWidget",(function(){return ModalWidget})),__webpack_require__.d(__webpack_exports__,"ModalCustomWidget",(function(){return ModalCustomWidget}));__webpack_require__(3),__webpack_require__(10),__webpack_require__(24),__webpack_require__(62),__webpack_require__(29),__webpack_require__(14),__webpack_require__(43),__webpack_require__(32),__webpack_require__(20),__webpack_require__(12),__webpack_require__(33),__webpack_require__(16),__webpack_require__(19);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__),_src__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__(86),__webpack_require__(41));__webpack_require__(1306);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__(116).withSource;var addSourceDecorator=__webpack_require__(116).addSource,__SOURCE_PREFIX__="/Users/prash/Development/projects/own/swan-react/stories",__STORY__="import React, { useState } from 'react'\nimport { action } from '@storybook/addon-actions'\nimport { Modal, Button } from '../src'\nimport './modal.css'\n\nexport default {\n  title: 'Modal',\n  component: Modal,\n}\n\nexport const ModalWidget = () => {\n  const [isModalOpen, toggleModal] = useState(false)\n  return (\n    <div>\n      <Button\n        onClick={() => toggleModal(!isModalOpen)}\n        value='Toggle Modal'\n        withBorder\n      />\n      <Modal\n        isOpen={isModalOpen}\n        content={'Test content'}\n        onClose={() => toggleModal(!isModalOpen)}\n      />\n    </div>\n  )\n}\n\nexport const ModalCustomWidget = () => {\n  const [isModalOpen, toggleModal] = useState(false)\n  const CustomComponent = () => (\n    <div>\n      <h1>Header 1</h1>\n      <h2>Header 2</h2>\n      <h3>Header 3</h3>\n      <p>This is a paragraph</p>\n    </div>\n  )\n  return (\n    <div>\n      <Button\n        onClick={() => toggleModal(!isModalOpen)}\n        value='Toggle Modal'\n        withBorder\n      />\n      <Modal\n        contentClassName='custom-modal-content'\n        isOpen={isModalOpen}\n        content={<CustomComponent />}\n        onClose={() => toggleModal(!isModalOpen)}\n      />\n    </div>\n  )\n}\n\nModalWidget.story = {\n  name: 'Modal'\n}\n",__ADDS_MAP__={"modal--modal-widget":{startLoc:{col:27,line:11},endLoc:{col:1,line:27},startBody:{col:27,line:11},endBody:{col:1,line:27}},"modal--modal-custom-widget":{startLoc:{col:33,line:29},endLoc:{col:1,line:54},startBody:{col:33,line:29},endBody:{col:1,line:54}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import React, { useState } from 'react'\nimport { action } from '@storybook/addon-actions'\nimport { Modal, Button } from '../src'\nimport './modal.css'\n\nexport default {\n  title: 'Modal',\n  component: Modal,\n}\n\nexport const ModalWidget = () => {\n  const [isModalOpen, toggleModal] = useState(false)\n  return (\n    <div>\n      <Button\n        onClick={() => toggleModal(!isModalOpen)}\n        value='Toggle Modal'\n        withBorder\n      />\n      <Modal\n        isOpen={isModalOpen}\n        content={'Test content'}\n        onClose={() => toggleModal(!isModalOpen)}\n      />\n    </div>\n  )\n}\n\nexport const ModalCustomWidget = () => {\n  const [isModalOpen, toggleModal] = useState(false)\n  const CustomComponent = () => (\n    <div>\n      <h1>Header 1</h1>\n      <h2>Header 2</h2>\n      <h3>Header 3</h3>\n      <p>This is a paragraph</p>\n    </div>\n  )\n  return (\n    <div>\n      <Button\n        onClick={() => toggleModal(!isModalOpen)}\n        value='Toggle Modal'\n        withBorder\n      />\n      <Modal\n        contentClassName='custom-modal-content'\n        isOpen={isModalOpen}\n        content={<CustomComponent />}\n        onClose={() => toggleModal(!isModalOpen)}\n      />\n    </div>\n  )\n}\n\nModalWidget.story = {\n  name: 'Modal'\n}\n",locationsMap:{"modal--modal-widget":{startLoc:{col:27,line:11},endLoc:{col:1,line:27},startBody:{col:27,line:11},endBody:{col:1,line:27}},"modal--modal-custom-widget":{startLoc:{col:33,line:29},endLoc:{col:1,line:54},startBody:{col:33,line:29},endBody:{col:1,line:54}}}}},title:"Modal",component:_src__WEBPACK_IMPORTED_MODULE_15__.b};var ModalWidget=addSourceDecorator((function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),isModalOpen=_useState2[0],toggleModal=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_15__.a,{onClick:function onClick(){return toggleModal(!isModalOpen)},value:"Toggle Modal",withBorder:!0}),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_15__.b,{isOpen:isModalOpen,content:"Test content",onClose:function onClose(){return toggleModal(!isModalOpen)}}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Modal.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref=react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1",null,"Header 1"),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h2",null,"Header 2"),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3",null,"Header 3"),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p",null,"This is a paragraph")),ModalCustomWidget=addSourceDecorator((function(){var _useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),isModalOpen=_useState4[0],toggleModal=_useState4[1];return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_15__.a,{onClick:function onClick(){return toggleModal(!isModalOpen)},value:"Toggle Modal",withBorder:!0}),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_15__.b,{contentClassName:"custom-modal-content",isOpen:isModalOpen,content:react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement((function CustomComponent(){return _ref}),null),onClose:function onClose(){return toggleModal(!isModalOpen)}}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Modal.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});ModalWidget.story={name:"Modal"}},1306:function(module,exports,__webpack_require__){var api=__webpack_require__(184),content=__webpack_require__(1307);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1307:function(module,exports,__webpack_require__){(exports=__webpack_require__(185)(!1)).push([module.i,".custom-modal-content {\n  background-color: black;\n  color: white;\n}\n",""]),module.exports=exports},1311:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RecaptchaWidget",(function(){return RecaptchaWidget})),__webpack_require__.d(__webpack_exports__,"RecaptchaWidgetCustomWrap",(function(){return RecaptchaWidgetCustomWrap})),__webpack_require__.d(__webpack_exports__,"RecaptchaWidgetVerfied",(function(){return RecaptchaWidgetVerfied})),__webpack_require__.d(__webpack_exports__,"RecaptchaWidgetVerfiedCustomSuccess",(function(){return RecaptchaWidgetVerfiedCustomSuccess})),__webpack_require__.d(__webpack_exports__,"RecaptchaWidget3",(function(){return RecaptchaWidget3}));var isProd,react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(86),src=__webpack_require__(41),addSourceDecorator=(__webpack_require__(116).withSource,__webpack_require__(116).addSource),__SOURCE_PREFIX__="/Users/prash/Development/projects/own/swan-react/stories",__STORY__="import React from 'react'\nimport { getRecaptchaKeys } from './utils/env'\nimport { action } from '@storybook/addon-actions'\nimport { Recaptcha } from '../src'\n\nconst { v2Key, v3Key } = getRecaptchaKeys()\n\nexport default {\n  title: 'Recaptcha',\n  component: Recaptcha,\n}\n\nexport const RecaptchaWidget = () => (\n  <Recaptcha\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nRecaptchaWidget.story = {\n  name: 'Recaptcha Widget'\n}\n\n\nexport const RecaptchaWidgetCustomWrap = () => (\n  <Recaptcha\n    wrapComponent={'Are you even human?'}\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nexport const RecaptchaWidgetVerfied = () => (\n  <Recaptcha\n    isVerified={true}\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nexport const RecaptchaWidgetVerfiedCustomSuccess = () => (\n  <Recaptcha\n    isVerified={true}\n    successComponent={'Well done, boss.'}\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nexport const RecaptchaWidget3 = () => (\n  <Recaptcha\n    version='v3'\n    recaptchaKey={v3Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\n\n\n",__ADDS_MAP__={"recaptcha--recaptcha-widget":{startLoc:{col:31,line:13},endLoc:{col:1,line:18},startBody:{col:31,line:13},endBody:{col:1,line:18}},"recaptcha--recaptcha-widget-custom-wrap":{startLoc:{col:41,line:25},endLoc:{col:1,line:31},startBody:{col:41,line:25},endBody:{col:1,line:31}},"recaptcha--recaptcha-widget-verfied":{startLoc:{col:38,line:33},endLoc:{col:1,line:39},startBody:{col:38,line:33},endBody:{col:1,line:39}},"recaptcha--recaptcha-widget-verfied-custom-success":{startLoc:{col:51,line:41},endLoc:{col:1,line:48},startBody:{col:51,line:41},endBody:{col:1,line:48}},"recaptcha--recaptcha-widget-3":{startLoc:{col:32,line:50},endLoc:{col:1,line:56},startBody:{col:32,line:50},endBody:{col:1,line:56}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},_getRecaptchaKeys={v2Key:(isProd="production"==="production".toLowerCase())?"6LcQzbgZAAAAAEqjr77TlvZhBqKtPqiUM7zFvhpU":"6LdJErAZAAAAAL9ee3o50pF1ZHbcBgNYI9U3Wo5W",v3Key:isProd?"6LcbzbgZAAAAAP8Vwzold7cyTtdMccZsfIPqHY3D":"6LdLErAZAAAAAMIx47mx57O8mHPesU2RK_1wZvdQ"},v2Key=_getRecaptchaKeys.v2Key,v3Key=_getRecaptchaKeys.v3Key,RecaptchaWidget=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react'\nimport { getRecaptchaKeys } from './utils/env'\nimport { action } from '@storybook/addon-actions'\nimport { Recaptcha } from '../src'\n\nconst { v2Key, v3Key } = getRecaptchaKeys()\n\nexport default {\n  title: 'Recaptcha',\n  component: Recaptcha,\n}\n\nexport const RecaptchaWidget = () => (\n  <Recaptcha\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nRecaptchaWidget.story = {\n  name: 'Recaptcha Widget'\n}\n\n\nexport const RecaptchaWidgetCustomWrap = () => (\n  <Recaptcha\n    wrapComponent={'Are you even human?'}\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nexport const RecaptchaWidgetVerfied = () => (\n  <Recaptcha\n    isVerified={true}\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nexport const RecaptchaWidgetVerfiedCustomSuccess = () => (\n  <Recaptcha\n    isVerified={true}\n    successComponent={'Well done, boss.'}\n    recaptchaKey={v2Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\nexport const RecaptchaWidget3 = () => (\n  <Recaptcha\n    version='v3'\n    recaptchaKey={v3Key}\n    onInteractionVerify={action('onInteractionVerify')}\n  />\n)\n\n\n\n",locationsMap:{"recaptcha--recaptcha-widget":{startLoc:{col:31,line:13},endLoc:{col:1,line:18},startBody:{col:31,line:13},endBody:{col:1,line:18}},"recaptcha--recaptcha-widget-custom-wrap":{startLoc:{col:41,line:25},endLoc:{col:1,line:31},startBody:{col:41,line:25},endBody:{col:1,line:31}},"recaptcha--recaptcha-widget-verfied":{startLoc:{col:38,line:33},endLoc:{col:1,line:39},startBody:{col:38,line:33},endBody:{col:1,line:39}},"recaptcha--recaptcha-widget-verfied-custom-success":{startLoc:{col:51,line:41},endLoc:{col:1,line:48},startBody:{col:51,line:41},endBody:{col:1,line:48}},"recaptcha--recaptcha-widget-3":{startLoc:{col:32,line:50},endLoc:{col:1,line:56},startBody:{col:32,line:50},endBody:{col:1,line:56}}}}},title:"Recaptcha",component:src.c},addSourceDecorator((function(){return react_default.a.createElement(src.c,{recaptchaKey:v2Key,onInteractionVerify:Object(dist.action)("onInteractionVerify")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Recaptcha.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}));RecaptchaWidget.story={name:"Recaptcha Widget"};var RecaptchaWidgetCustomWrap=addSourceDecorator((function(){return react_default.a.createElement(src.c,{wrapComponent:"Are you even human?",recaptchaKey:v2Key,onInteractionVerify:Object(dist.action)("onInteractionVerify")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Recaptcha.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),RecaptchaWidgetVerfied=addSourceDecorator((function(){return react_default.a.createElement(src.c,{isVerified:!0,recaptchaKey:v2Key,onInteractionVerify:Object(dist.action)("onInteractionVerify")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Recaptcha.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),RecaptchaWidgetVerfiedCustomSuccess=addSourceDecorator((function(){return react_default.a.createElement(src.c,{isVerified:!0,successComponent:"Well done, boss.",recaptchaKey:v2Key,onInteractionVerify:Object(dist.action)("onInteractionVerify")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Recaptcha.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),RecaptchaWidget3=addSourceDecorator((function(){return react_default.a.createElement(src.c,{version:"v3",recaptchaKey:v3Key,onInteractionVerify:Object(dist.action)("onInteractionVerify")})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/Recaptcha.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},41:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return src_components_button})),__webpack_require__.d(__webpack_exports__,"b",(function(){return components_modal})),__webpack_require__.d(__webpack_exports__,"c",(function(){return recaptcha}));__webpack_require__(22);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),Button=(__webpack_require__(1299),function(_ref){var withBorder=_ref.withBorder,onClick=_ref.onClick,isDisabled=_ref.isDisabled,className=_ref.className,value=_ref.value;return react_default.a.createElement("button",{onClick:onClick,className:"swan-react-button ".concat(withBorder?"":"swan-react-button-unbordered"," ").concat(className),disabled:!!isDisabled},value)});Button.displayName="Button",Button.propTypes={isDisabled:prop_types_default.a.bool,className:prop_types_default.a.string,withBorder:prop_types_default.a.bool},Button.defaultProps={isDisabled:!1,withBorder:!1,className:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isDisabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},withBorder:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};var src_components_button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/index.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/button/index.js"});__webpack_require__(1301);var DefaultCloseComponent=function(_ref){var onClose=_ref.onClose;return react_default.a.createElement(src_components_button,{onClick:onClose,className:"swan-react-modal-close-button-default",value:"x"})};DefaultCloseComponent.displayName="DefaultCloseComponent";var CloseComponent=function(_ref2){var component=_ref2.component,onClose=_ref2.onClose;return react_default.a.createElement("div",{className:"swan-react-modal-close"},component&&cloneElement(component,{onClose:onClose})||react_default.a.createElement(DefaultCloseComponent,{onClose:onClose}))};CloseComponent.displayName="CloseComponent",CloseComponent.propTypes={onClose:prop_types_default.a.func,component:prop_types_default.a.element},CloseComponent.__docgenInfo={description:"",methods:[],displayName:"CloseComponent",props:{onClose:{type:{name:"func"},required:!1,description:""},component:{type:{name:"element"},required:!1,description:""}}};var components_close=CloseComponent;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/components/close.js"]={name:"CloseComponent",docgenInfo:CloseComponent.__docgenInfo,path:"src/components/modal/components/close.js"});__webpack_require__(1303);var Modal=function(_ref){var className=_ref.className,isOpen=_ref.isOpen,onClose=_ref.onClose,closeComponent=_ref.closeComponent,contentClassName=_ref.contentClassName,content=_ref.content;return react_default.a.createElement("div",{className:"swan-react-modal ".concat(isOpen?"swan-react-model-open":""," ").concat(className)},react_default.a.createElement("div",{className:"swan-react-modal-content ".concat(contentClassName)},react_default.a.createElement(components_close,{component:closeComponent,onClose:onClose}),content))};Modal.displayName="Modal",Modal.propTypes={isOpen:prop_types_default.a.bool,className:prop_types_default.a.string,contentClassName:prop_types_default.a.string,closeComponent:prop_types_default.a.element,onClose:prop_types_default.a.func},Modal.defaultProps={isOpen:!1,className:"",contentClassName:""},Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},contentClassName:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},closeComponent:{type:{name:"element"},required:!1,description:""},onClose:{type:{name:"func"},required:!1,description:""}}};var components_modal=Modal;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/index.js"]={name:"Modal",docgenInfo:Modal.__docgenInfo,path:"src/components/modal/index.js"});var esm=__webpack_require__(455),ReactGoogleRecaptchaV2=function(_ref){var recaptchaKey=_ref.recaptchaKey,onInteractionVerify=_ref.onInteractionVerify,onInteractionExpire=_ref.onInteractionExpire,onInteractionError=_ref.onInteractionError,recaptchaType=_ref.recaptchaType,recaptchaTheme=_ref.recaptchaTheme,recaptchaLanguage=_ref.recaptchaLanguage;return react_default.a.createElement(esm.a,{sitekey:recaptchaKey,onChange:onInteractionVerify,onExpired:onInteractionExpire,onErrored:onInteractionError,type:recaptchaType,theme:recaptchaTheme,hl:recaptchaLanguage})};ReactGoogleRecaptchaV2.displayName="ReactGoogleRecaptchaV2",ReactGoogleRecaptchaV2.propTypes={recaptchaKey:prop_types_default.a.string.isRequired,onInteractionVerify:prop_types_default.a.func,onInteractionExpire:prop_types_default.a.func,onInteractionError:prop_types_default.a.func,recaptchaType:prop_types_default.a.string,recaptchaTheme:prop_types_default.a.string,recaptchaLanguage:prop_types_default.a.string},ReactGoogleRecaptchaV2.defaultProps={recaptchaTheme:"light",recaptchaType:"image"},ReactGoogleRecaptchaV2.__docgenInfo={description:"",methods:[],displayName:"ReactGoogleRecaptchaV2",props:{recaptchaTheme:{defaultValue:{value:"'light'",computed:!1},type:{name:"string"},required:!1,description:""},recaptchaType:{defaultValue:{value:"'image'",computed:!1},type:{name:"string"},required:!1,description:""},recaptchaKey:{type:{name:"string"},required:!0,description:""},onInteractionVerify:{type:{name:"func"},required:!1,description:""},onInteractionExpire:{type:{name:"func"},required:!1,description:""},onInteractionError:{type:{name:"func"},required:!1,description:""},recaptchaLanguage:{type:{name:"string"},required:!1,description:""}}};var recaptcha_v2=ReactGoogleRecaptchaV2;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/recaptcha/widget/recaptcha-v2.js"]={name:"ReactGoogleRecaptchaV2",docgenInfo:ReactGoogleRecaptchaV2.__docgenInfo,path:"src/components/recaptcha/widget/recaptcha-v2.js"});var react_google_recaptcha_v3_esm=__webpack_require__(287),ReactGoogleRecaptchaV3=function(_ref){var recaptchaLanguage=_ref.recaptchaLanguage,recaptchaKey=_ref.recaptchaKey,onInteractionVerify=_ref.onInteractionVerify;return react_default.a.createElement(react_google_recaptcha_v3_esm.b,{reCaptchaKey:recaptchaKey,language:recaptchaLanguage},react_default.a.createElement(react_google_recaptcha_v3_esm.a,{onVerify:onInteractionVerify}))};ReactGoogleRecaptchaV3.displayName="ReactGoogleRecaptchaV3",ReactGoogleRecaptchaV3.propTypes={recaptchaKey:prop_types_default.a.string.isRequired,onInteractionVerify:prop_types_default.a.func,language:prop_types_default.a.string},ReactGoogleRecaptchaV3.__docgenInfo={description:"",methods:[],displayName:"ReactGoogleRecaptchaV3",props:{recaptchaKey:{type:{name:"string"},required:!0,description:""},onInteractionVerify:{type:{name:"func"},required:!1,description:""},language:{type:{name:"string"},required:!1,description:""}}};var recaptcha_v3=ReactGoogleRecaptchaV3;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/recaptcha/widget/recaptcha-v3.js"]={name:"ReactGoogleRecaptchaV3",docgenInfo:ReactGoogleRecaptchaV3.__docgenInfo,path:"src/components/recaptcha/widget/recaptcha-v3.js"});var GoogleRecaptchaWidget=function(_ref){var version=_ref.version,recaptchaKey=_ref.recaptchaKey,onInteractionVerify=_ref.onInteractionVerify,onInteractionExpire=_ref.onInteractionExpire,onInteractionError=_ref.onInteractionError,recaptchaLanguage=(_ref.recaptchaType,_ref.recaptchaTheme,_ref.recaptchaLanguage);switch(version){case"v3":case"3":return react_default.a.createElement(recaptcha_v3,{recaptchaLanguage:recaptchaLanguage,recaptchaKey:recaptchaKey,onInteractionVerify:onInteractionVerify});case"v2":case"2":default:return react_default.a.createElement(recaptcha_v2,{recaptchaLanguage:recaptchaLanguage,recaptchaKey:recaptchaKey,onInteractionVerify:onInteractionVerify,onInteractionExpire:onInteractionExpire,onInteractionError:onInteractionError})}};GoogleRecaptchaWidget.propTypes={version:prop_types_default.a.string.isRequired,recaptchaKey:prop_types_default.a.string.isRequired,onInteractionVerify:prop_types_default.a.func,onInteractionExpire:prop_types_default.a.func,onInteractionError:prop_types_default.a.func,recaptchaType:prop_types_default.a.string,recaptchaTheme:prop_types_default.a.string,recaptchaLanguage:prop_types_default.a.string},GoogleRecaptchaWidget.defaultProps={version:"v2"},GoogleRecaptchaWidget.__docgenInfo={description:"",methods:[],displayName:"GoogleRecaptchaWidget",props:{version:{defaultValue:{value:"'v2'",computed:!1},type:{name:"string"},required:!1,description:""},recaptchaKey:{type:{name:"string"},required:!0,description:""},onInteractionVerify:{type:{name:"func"},required:!1,description:""},onInteractionExpire:{type:{name:"func"},required:!1,description:""},onInteractionError:{type:{name:"func"},required:!1,description:""},recaptchaType:{type:{name:"string"},required:!1,description:""},recaptchaTheme:{type:{name:"string"},required:!1,description:""},recaptchaLanguage:{type:{name:"string"},required:!1,description:""}}};var widget=GoogleRecaptchaWidget;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/recaptcha/widget/index.js"]={name:"GoogleRecaptchaWidget",docgenInfo:GoogleRecaptchaWidget.__docgenInfo,path:"src/components/recaptcha/widget/index.js"});var default_success=react_default.a.createElement("div",null,"You've successfully solved the re-captcha, human."),default_wrap=react_default.a.createElement(react.Fragment,null,react_default.a.createElement("br",null),react_default.a.createElement("span",{className:"default-wrap-component"},"Just checking if you're a  ",react_default.a.createElement("span",{role:"img","aria-label":"person"},"👤")," or  ",react_default.a.createElement("span",{role:"img","aria-label":"robot"},"🤖"),"..."),react_default.a.createElement("br",null),react_default.a.createElement("br",null)),Recaptcha=function(_ref){var version=_ref.version,recaptchaKey=_ref.recaptchaKey,isVerified=_ref.isVerified,onInteractionVerify=_ref.onInteractionVerify,onInteractionError=_ref.onInteractionError,onInteractionExpire=_ref.onInteractionExpire,recaptchaType=_ref.recaptchaType,recaptchaTheme=_ref.recaptchaTheme,recaptchaLanguage=_ref.recaptchaLanguage,wrapComponent=_ref.wrapComponent,successComponent=_ref.successComponent;_ref.failureComponent;return isVerified?successComponent||default_success:react_default.a.createElement("div",null,wrapComponent||default_wrap,react_default.a.createElement(widget,{version:version,recaptchaKey:recaptchaKey,onInteractionVerify:onInteractionVerify,onInteractionError:onInteractionError,onInteractionExpire:onInteractionExpire,recaptchaType:recaptchaType,recaptchaTheme:recaptchaTheme,recaptchaLanguage:recaptchaLanguage}))};Recaptcha.displayName="Recaptcha",Recaptcha.propTypes={recaptchaKey:prop_types_default.a.string.isRequired,isVerified:prop_types_default.a.bool,recaptchaType:prop_types_default.a.string,recaptchaTheme:prop_types_default.a.string,recaptchaLanguage:prop_types_default.a.string,wrapComponent:prop_types_default.a.element,successComponent:prop_types_default.a.element,failureComponent:prop_types_default.a.element,onInteractionVerify:prop_types_default.a.func.isRequired,onInteractionError:prop_types_default.a.func,onInteractionExpire:prop_types_default.a.func},Recaptcha.defaultProps={isVerified:!1,version:"v2",recaptchaType:"image",recaptchaTheme:"light"},Recaptcha.__docgenInfo={description:"",methods:[],displayName:"Recaptcha",props:{isVerified:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},version:{defaultValue:{value:"'v2'",computed:!1},required:!1},recaptchaType:{defaultValue:{value:"'image'",computed:!1},type:{name:"string"},required:!1,description:""},recaptchaTheme:{defaultValue:{value:"'light'",computed:!1},type:{name:"string"},required:!1,description:""},recaptchaKey:{type:{name:"string"},required:!0,description:""},recaptchaLanguage:{type:{name:"string"},required:!1,description:""},wrapComponent:{type:{name:"element"},required:!1,description:""},successComponent:{type:{name:"element"},required:!1,description:""},failureComponent:{type:{name:"element"},required:!1,description:""},onInteractionVerify:{type:{name:"func"},required:!0,description:""},onInteractionError:{type:{name:"func"},required:!1,description:""},onInteractionExpire:{type:{name:"func"},required:!1,description:""}}};var recaptcha=Recaptcha;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/recaptcha/index.js"]={name:"Recaptcha",docgenInfo:Recaptcha.__docgenInfo,path:"src/components/recaptcha/index.js"})},456:function(module,exports,__webpack_require__){__webpack_require__(457),__webpack_require__(604),__webpack_require__(605),__webpack_require__(1258),module.exports=__webpack_require__(1259)},521:function(module,exports){}},[[456,1,2]]]);
//# sourceMappingURL=main.de75fc2522f0e0d57817.bundle.js.map