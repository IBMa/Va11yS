'use strict';

var React = require('react');
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Range = React.createClass({
  displayName: 'Range',
  propTypes: {
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    onMouseMove: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      type: 'range',
      onChange: function(){},
      onClick: function(){},
      onKeyDown: function(){},
      onMouseMove: function(){}
    };
  },
  onRangeChange: function(e) {
    this.props.onMouseMove(e);
    if (e.buttons !== 1 && e.which !== 1) return;
    this.props.onChange(e);
  },
  onRangeClick: function(e) {
    this.props.onClick(e);
    this.props.onChange(e);
  },
  onRangeKeyDown: function(e) {
    this.props.onKeyDown(e);
    this.props.onChange(e);
  },
  setRangeRef: function(ref) {
    this.range = ref;
  },
  componentWillReceiveProps: function(props) {
    this.range.value = props.value;
  },
  render: function() {
    var props = _extends({}, this.props, {
      defaultValue: this.props.value,
      onClick: this.onRangeClick,
      onKeyDown: this.onRangeKeyDown,
      onMouseMove: this.onRangeChange,
      onChange: function() {},
      ref: this.setRangeRef
    });
    delete props.value;
    return React.createElement(
      'input',
      props
    );
  }
});

module.exports = Range;
