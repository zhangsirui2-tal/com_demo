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
      <AButton children="点击" />
    </>
  );
};
export default AButtonExample;

//ci
