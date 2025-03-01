import { AButton } from '@zsrcom/components';
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
      <AButton children="点击qq" className="sadsad" />
    </>
  );
};
export default AButtonExample;

//ci
