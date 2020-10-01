import React, { useMemo } from 'react';

import fetch from 'lib/fetch';
import { useRouter } from 'next/router';
import { Container, GradeList, GradeItem } from 'styles/home';
import useSWR from 'swr';

const Home = () => {
  const { data, error } = useSWR('/api/account', fetch);
  const router = useRouter();

  if (error || data?.error) {
    router.push('/');
  }

  const capitalizedName = (data?.name || '')
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return (
    <Container>
      {!data || data?.error ? (
        <h2>loading...</h2>
      ) : (
        <>
          <h2>{capitalizedName}</h2>
          <span>{`RA: ${data.profile.code}`}</span>
          <GradeList>
            {data.semesters[0].disciplines.map(({ name, grade }) => (
              <GradeItem key={name}>
                <span>Nome: {name}</span>
                <span>Nota: {grade}</span>
              </GradeItem>
            ))}
          </GradeList>
        </>
      )}
    </Container>
  );
};

export default Home;
