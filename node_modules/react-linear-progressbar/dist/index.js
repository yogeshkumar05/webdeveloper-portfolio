'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/index.scss');

var _Progressbar = require('./components/Progressbar');

var _Progressbar2 = _interopRequireDefault(_Progressbar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainContainer = function MainContainer() {
    var progressWidth = 40;
    var myConfig = {
        containerStyle: {},
        progressStyle: {},
        stripe: true,
        animate: true,
        showLabel: true,
        width: progressWidth,
        label: progressWidth + '%'
    };
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Progressbar2.default, { config: myConfig })
    );
};
exports.default = MainContainer;