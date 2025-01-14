import type { FC, PropsWithChildren } from 'react';
const Button: FC<PropsWithChildren<any>> = (props) => {
  const {
    children,
    className,
    type = 'default',
    size = 'default',
    ...resetProps
  } = props;
  return (
    <button className="sss" {...resetProps}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
