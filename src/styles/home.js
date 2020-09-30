import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
`;

export const GradeList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  min-width: 50%;
  list-style-type: none;
`;

export const GradeItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;
