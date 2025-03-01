import { AInput } from '@zsrcom/components';
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
      <AInput />
    </>
  );
};
export default AButtonExample;

//ci
