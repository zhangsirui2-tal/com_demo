// import { defaultTheme } from '@ant-design/compatible';
import { Button, ConfigProvider } from 'antd';
import type { FC, PropsWithChildren } from 'react';
import { AButton } from '../../../components/src';
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
      <Button className={className} {...resetProps}>
        {children}
      </Button>
      <AButton />
    </ConfigProvider>
  );
};
export default AInput;

//ci
