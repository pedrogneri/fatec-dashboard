import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
`;

export const DisciplineList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  list-style-type: none;
`;

export const Discipline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  max-width: 320px;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;

export const Grade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  font-size: 12px;
  color: #fff;
  padding: 5px;
  border-radius: 100%;
  background-color: #000;
  margin-left: auto;
`;
