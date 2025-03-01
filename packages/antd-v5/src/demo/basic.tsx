import { Button } from '@zsrcom/antd-v5';
import type { FC } from 'react';
const AButtonExample: FC<any> = (props) => {
  const {
    children,
    className,
    type = 'default',
    size = 'default',
    ...resetProps
  } = props;

  return (
    <>
      {' '}
      <Button children="点击" className="sadsad" />
    </>
  );
};
export default AButtonExample;

//ci
