import React from 'react';
import styled from 'styled-components';

import Counter from './components/Counter';
import { GlobalStyles } from './styles/GlobalStyles';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: palevioletred;
  margin-top: 1em;
`;

const Subtitle = styled.p`
  font-size: 12px;
  margin-bottom: 1em;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Starter React App</Title>
        <Subtitle>with Vite.js, React.js, Styled-Components</Subtitle>
        <Counter />
      </Container>
    </>
  );
};

export default App;
