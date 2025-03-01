import { defaultTheme } from '@ant-design/compatible';
import { ConfigProvider as ConfigProvider5 } from 'antd-v5';
import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';

export function withTheme<T extends React.ComponentType<any>>(Component: T): T {
  const customTheme = {
    token: { colorPrimary: 'red' },
    ...defaultTheme,
  };

  // 创建带主题的组件
  const ThemedComponent = React.forwardRef<
    unknown,
    React.ComponentPropsWithRef<T>
  >((props, ref) => (
    <ConfigProvider5 prefixCls="antv5" theme={customTheme}>
      <Component {...props} ref={ref} />
    </ConfigProvider5>
  ));

  // 设置显示名称
  const displayName = Component.displayName || Component.name || 'Component';
  ThemedComponent.displayName = `Themed${displayName}`;

  // 安全地复制所有静态属性
  hoistNonReactStatics(ThemedComponent, Component);
  // 使用类型断言返回组件
  return ThemedComponent as unknown as T;
}
