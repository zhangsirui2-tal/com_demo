// import { defaultTheme } from '@ant-design/compatible';
import { ConfigProvider, Input } from 'antd';
import type { FC, PropsWithChildren } from 'react';

import './index.scss';
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
    <div className="container">
      <div>1</div>
      <div>2</div>
      <ConfigProvider prefixCls="ant5">
        <Input className={className} {...resetProps}>
          {children}
        </Input>
      </ConfigProvider>
    </div>
  );
};
export default AInput;

//ci
