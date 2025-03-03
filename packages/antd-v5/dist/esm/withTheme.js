function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { defaultTheme } from '@ant-design/compatible';
import { ConfigProvider as ConfigProvider5 } from 'antd-v5';
import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export function withTheme(Component) {
  var customTheme = _objectSpread({}, defaultTheme);

  // 创建带主题的组件
  var ThemedComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/_jsx(ConfigProvider5, {
      prefixCls: "antv5",
      theme: customTheme,
      children: /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, props), {}, {
        ref: ref
      }))
    });
  });

  // 设置显示名称
  var displayName = Component.displayName || Component.name || 'Component';
  ThemedComponent.displayName = "Themed".concat(displayName);

  // 安全地复制所有静态属性
  hoistNonReactStatics(ThemedComponent, Component);
  // 使用类型断言返回组件
  return ThemedComponent;
}
//# sourceMappingURL=withTheme.js.map