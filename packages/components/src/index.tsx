import { defaultTheme } from '@ant-design/compatible';
import { Button, ConfigProvider } from 'antd';
import type { FC, PropsWithChildren } from 'react';
const AButton: FC<PropsWithChildren<any>> = (props) => {
  const {
    children,
    className,
    type = 'default',
    size = 'default',
    ...resetProps
  } = props;
  console.log('defaultTheme', defaultTheme);

  return (
    <ConfigProvider prefixCls="ant5" theme={defaultTheme}>
      <Button className={className} {...resetProps}>
        {children}
      </Button>
    </ConfigProvider>
  );
};
export default AButton;

//ci
