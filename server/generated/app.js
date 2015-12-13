module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _redux = __webpack_require__(3);

	__webpack_require__(4);

	var _MessageList = __webpack_require__(8);

	var _MessageList2 = _interopRequireDefault(_MessageList);

	var _MessageEntryBox = __webpack_require__(9);

	var _MessageEntryBox2 = _interopRequireDefault(_MessageEntryBox);

	var _messageActions = __webpack_require__(10);

	var messageActionCreators = _interopRequireWildcard(_messageActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _react2.default.createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_MessageList2.default, { userId: this.props.userId, messages: this.props.messages }),
	      _react2.default.createElement(_MessageEntryBox2.default, {
	        value: this.props.currentMessage,
	        userId: this.props.userId,
	        onChange: this.props.updateMessage,
	        onSubmit: this.props.addMessage })
	    );
	  }

	});

	function mapStateToProps(state) {
	  return {
	    userId: state.userId,
	    messages: state.messages,
	    currentMessage: state.currentMessage
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(messageActionCreators, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'MessageList',

	  render: function render() {
	    var _this = this;

	    return _react2.default.createElement(
	      'ol',
	      { className: 'message-list' },
	      this.props.messages.map(function (message, index) {
	        var messageClass = message.userId !== _this.props.userId ? 'is-response' : '';
	        return _react2.default.createElement(
	          'li',
	          { key: 'message-' + index, className: 'message-item' },
	          _react2.default.createElement(
	            'p',
	            { className: 'message ' + messageClass },
	            message.text
	          )
	        );
	      })
	    );
	  }

	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'MessageEntryBox',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'message-entry-box' },
	      _react2.default.createElement('textarea', {
	        name: 'message',
	        placeholder: 'Say what?!?!',
	        value: this.props.value,
	        onChange: this.handleChange,
	        onKeyPress: this.handleKeyPress })
	    );
	  },

	  handleChange: function handleChange(ev) {
	    this.props.onChange(ev.target.value);
	  },
	  handleKeyPress: function handleKeyPress(ev) {
	    if (ev.which === 13) {
	      var trimmedMessage = this.props.value.trim();

	      if (trimmedMessage) {
	        this.props.onSubmit({
	          text: trimmedMessage,
	          userId: this.props.userId
	        });
	      }

	      ev.preventDefault();
	    }
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateMessage = updateMessage;
	exports.addMessage = addMessage;
	exports.addResponse = addResponse;
	exports.setUserId = setUserId;
	var UPDATE_MESSAGE = exports.UPDATE_MESSAGE = 'update-message';
	var ADD_MESSAGE = exports.ADD_MESSAGE = 'add-message';
	var ADD_RESPONSE = exports.ADD_RESPONSE = 'add-response';
	var SET_USER_ID = exports.SET_USER_ID = 'setUserId';

	function updateMessage(message) {
	  return { type: UPDATE_MESSAGE, message: message };
	}

	function addMessage(message) {
	  return { type: ADD_MESSAGE, message: message };
	}

	function addResponse(message) {
	  return { type: ADD_RESPONSE, message: message };
	}

	function setUserId(userId) {
	  return { type: SET_USER_ID, userId: userId };
	}

/***/ }
/******/ ]);