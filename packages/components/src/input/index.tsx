// import { defaultTheme } from '@ant-design/compatible';
import { ConfigProvider, Input } from 'antd';
import type { FC, PropsWithChildren } from 'react';
const AInput: FC<PropsWithChildren<any>> = (props) => {
  const {
    children,
    className,
    type = 'default',
    size = 'default',
    ...resetProps
  } = props;
  // console.log('defaultTheme', defaultTheme);

  return (
    <ConfigProvider prefixCls="ant5">
      <Input className={className} {...resetProps}>
        {children}
      </Input>
    </ConfigProvider>
  );
};
export default AInput;

//ci
