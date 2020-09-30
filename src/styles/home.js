import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #000;
  margin: 8px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  margin-top: 16px;
  border: 1px solid #000;
  background-color: transparent;
  width: 100%;
  padding: 10px;
  cursor: pointer;
`;
