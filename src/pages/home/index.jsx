import React from 'react';

import fetch from 'lib/fetch';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Home = () => {
  const { data, error } = useSWR('/api/account', fetch);
  const router = useRouter();

  if (error || data?.error) router.push('/');
  if (!data || data?.error) return <div>loading...</div>;

  return (
    <div>
      <h1>Olá {data.name}</h1>
      {(data.disciplines || []).map(({ name, grade }) => (
        <div key={name}>
          <span>Nome: {name}</span>
          <br />
          <span>Nota: {grade}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
