'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reducers = require('./reducers');

var _Calendar = require('./components/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _initialState = require('./initialState');

var initialState = _interopRequireWildcard(_initialState);

var _index = require('./actions/index');

var actions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.mainReducer, initialState);

var calendar = _react2.default.createElement(_Calendar2.default, { store: store });

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(calendar, document.getElementById('container'));
});