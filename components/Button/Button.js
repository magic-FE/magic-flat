import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { classnamesPrefix } from '../_utils_/prefix';
import RippleEnhance from '../Ripple';
import './button.less';

const noop = () => { };

class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'warning',
      'primary',
      'danger',
      'success',
      'inverse',
      'info',
      'default'
    ]),
    children: PropTypes.any,
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'lg',
      'hg'
    ]),
    ghost: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
  }
  static defaultProps = {
    type: 'default',
    children: '',
    size: 'lg',
    ghost: false,
    disabled: false,
    onClick: noop,
    onMouseDown: noop,
    onMouseUp: noop,
    style: {},
    className: ''
  }
  render() {
    const {
      type,
      children,
      size,
      ghost,
      disabled,
      onClick,
      onMouseDown,
      onMouseUp,
      style,
      className
    } = this.props;
    const cls = classnames(
      'btn',
      `btn-${type}`,
      { 'btn-ghost': ghost },
      { [`btn-${size}`]: !!size }
    );
    return (
      <button
        className={classnamesPrefix(cls, [className])}
        disabled={disabled}
        onClick={disabled ? null : onClick}
        onMouseDown={disabled ? null : onMouseDown}
        onMouseUp={disabled ? null : onMouseUp}
        style={style}
      >
        {children}
      </button>
    );
  }
}
export default RippleEnhance()(Button);
