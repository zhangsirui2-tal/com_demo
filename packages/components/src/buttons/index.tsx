import { Button } from 'antd-v5';
import type { FC, PropsWithChildren } from 'react';

import './index.scss';
const AButton: FC<PropsWithChildren<any>> = (props) => {
  const {
    children,
    className,
    type = 'default',
    size = 'default',
    ...resetProps
  } = props;

  return (
    <div className="container">
      <Button className={className} type={type} size={size} {...resetProps}>
        {children}
      </Button>
    </div>
  );
};
export default AButton;

//ci
