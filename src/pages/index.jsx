import React, { useState } from 'react';

import fetch from 'lib/fetch';
import { useRouter } from 'next/router';
import { Container, StyledInput, StyledButton, Form, Error, Overlay, Text } from 'styles/login';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.trim() && password.trim()) {
      fetch('/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          password,
        }),
      })
        .then((res) => {
          if (!res.error) {
            router.push('/home');
          } else {
            setError(res.error);
          }
        })
        .catch(() => {
          setError('Falha no servidor');
        });
    }
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <StyledInput name="user" onChange={handleChangeUser} placeholder="Usuário" />
        <StyledInput name="password" onChange={handleChangePassword} type="password" placeholder="Senha" />
        <Error>{error}</Error>
        <StyledButton type="submit">
          <Text>Confirmar</Text>
          <Overlay></Overlay>
        </StyledButton>
      </Form>
    </Container>
  );
};

export default Login;
