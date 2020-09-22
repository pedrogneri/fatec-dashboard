import React from 'react';
import { myAccount } from 'api';

const Home = ({ name, disciplines }) => {
  return (
    <div>
      <h1>Olá {name}</h1>
      {disciplines.map(({ name, grade }) => (
        <div key={name}>
          <span>Nome: {name}</span>
          <br/>
          <span>Nota: {grade}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const name = await myAccount?.getName();
  const schoolGrade = await myAccount?.getSchoolGrade();
  const disciplines = JSON.parse(JSON.stringify(schoolGrade.semesters[0].disciplines));

  return {
    props: { name, disciplines },
  }
}

export default Home;
