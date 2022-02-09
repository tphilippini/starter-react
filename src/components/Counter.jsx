import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../elements/Button';

const Count = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 1em 0;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count>{count}</Count>
      <Button primary onClick={() => setCount((count) => count - 1)}>
        Decrement
      </Button>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
    </>
  );
};

export default Counter;
