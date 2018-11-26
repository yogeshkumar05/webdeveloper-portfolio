'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progressbar = function (_Component) {
    _inherits(Progressbar, _Component);

    function Progressbar(props) {
        _classCallCheck(this, Progressbar);

        return _possibleConstructorReturn(this, (Progressbar.__proto__ || Object.getPrototypeOf(Progressbar)).call(this, props));
    }

    _createClass(Progressbar, [{
        key: 'render',
        value: function render() {
            var config = this.props.config;
            var containerStyle = config.containerStyle,
                progressStyle = config.progressStyle,
                stripe = config.stripe,
                animate = config.animate,
                showLabel = config.showLabel,
                width = config.width,
                label = config.label;
            //className will be a string and style will be an object

            var containerClass = 'progress-container' + ' ' + (typeof containerStyle === 'string' && containerStyle);
            var progressClass = 'progress-indicator' + ' ' + (stripe && 'striped') + ' ' + (animate && 'animate') + ' ' + (typeof progressStyle === 'string' && progressStyle) + ' ';
            var progressLabel = label ? label : width + '%';
            return _react2.default.createElement(
                'div',
                { className: containerClass, style: (typeof containerStyle === 'undefined' ? 'undefined' : _typeof(containerStyle)) === 'object' ? containerStyle : {} },
                _react2.default.createElement(
                    'div',
                    { className: progressClass, style: (typeof progressStyle === 'undefined' ? 'undefined' : _typeof(progressStyle)) === 'object' ? progressStyle : {} },
                    showLabel && progressLabel
                )
            );
        }
    }]);

    return Progressbar;
}(_react.Component);

;
exports.default = Progressbar;