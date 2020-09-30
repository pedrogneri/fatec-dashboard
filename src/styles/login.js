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

export const Error = styled.span`
  font-size: 12px;
  color: #d15858;
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
  font-weight: 600;
  min-height: 36px;
  position: relative;
  width: 100%;
  cursor: pointer;

  &:hover div {
    height: 100%;
    color: #fff;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: #000;

  z-index: 3;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0%;
  background-color: #000;
  position: absolute;
  transition: height 0.4s;
  left: 0;
  top: 0;
  z-index: 2;
`;
