import React from 'react';
import useSWR from 'swr'
import fetch from 'lib/fetch'

const Home = () => {
  const { data, error } = useSWR('/api/account', fetch);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>Olá {data.name}</h1>
      {(data.disciplines || []).map(({ name, grade }) => (
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

export default Home;
