import { Button } from '@zsrcom/antd-v5';
import type { FC, PropsWithChildren } from 'react';
const AButton: FC<PropsWithChildren<any>> = (props) => {
  const {
    children,
    className,
    type = 'default',
    size = 'default',
    ...resetProps
  } = props;

  return (
    <Button className={className} type={type} size={size} {...resetProps}>
      {children}
    </Button>
  );
};
export default AButton;

//ci
