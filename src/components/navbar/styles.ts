import styled from 'styled-components';

export const Nav = styled.nav`
  
  width: 100%;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--secondary);
`;

export const SearchBar = styled.input`
  
  width: 20%;

  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;

  padding: 6px;
  border: none;
  border-radius: 3px;
  appearance: none;
  outline: none;
  background-color: var(--primary);
`;
