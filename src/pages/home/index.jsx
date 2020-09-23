import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAccount } from 'pages/api/account';

const Home = ({ name, disciplines, error }) => {
  const router = useRouter();

  useEffect(() => {
    if(error) {
      router.push('/');
    }
  }, [error]);

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

export async function getInitialProps(context) {
  const { name, disciplines, error } = await getAccount();

  return {
    props: { name, disciplines, error },
  }
}

export default Home;
