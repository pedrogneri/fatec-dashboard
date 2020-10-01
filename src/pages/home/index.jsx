import React, { useMemo } from 'react';

import fetch from 'lib/fetch';
import { useRouter } from 'next/router';
import { Container, DisciplineList, Discipline, Grade } from 'styles/home';
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
          <DisciplineList>
            {data.semesters[0].disciplines.map(({ name, grade }) => (
              <Discipline key={name}>
                <span>{name}</span>
                <Grade>{grade}</Grade>
              </Discipline>
            ))}
          </DisciplineList>
        </>
      )}
    </Container>
  );
};

export default Home;
