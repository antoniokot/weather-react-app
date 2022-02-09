import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60%;
  height: 70vh;

  background-color: var(--main);
  border-radius: 20px;
`;