import styled, { css } from 'styled-components';

import { Cloudy } from '../../../styles/Icons'

export const Container = styled.div`

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60%;
  height: 70vh;
  display: flex;
  flex-direction: row;

  background-color: var(--main);
  border-radius: 20px;
`;

export const Left = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Right = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
`

const iconCSS = css`
  width: 10em;
  height: 10em;
  color: var(--primary);
`;

export const WeatherIcon = styled(Cloudy)`
  ${iconCSS}
`;

export const Description = styled.div`

  width: 60%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
`

export const City = styled.span`

  font-size: 1em;
`

export const Short = styled.span`

  font-size: 2em;
  font-weight: 500;
`

export const Others = styled.div`

  flex: 1;
  display: flex;
  flex-direction: row;

  margin-top: 1.5em;
`

export const Titles = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {  
    color: var(--primary);

    padding-right: 1em;
  }
`

export const Statistics = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span { 
    color: var(--black);
  }
`

const span = css`

  color: var(--black);
`
