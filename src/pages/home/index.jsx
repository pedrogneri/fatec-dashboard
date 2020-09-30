import React from 'react';
import useSWR from 'swr'
import fetch from 'lib/fetch'
import { useRouter } from 'next/router';

const Home = () => {
  const { data, error } = useSWR('/api/account', fetch);
  const router = useRouter();

  if (!data) return <div>loading...</div>
  if (error || data?.error) router.push('/')

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
