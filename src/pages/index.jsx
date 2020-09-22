import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, StyledInput, StyledButton, Form } from 'styles/login';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(user.trim() && password.trim()) {
      fetch('/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          password,
        }),
      }).then(() => {
        router.push('/home');
      }).catch((err) => {
        console.log("Falha: ", err);
      })
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

        <StyledButton type="submit">Confirmar</StyledButton>
      </Form>
    </Container>
  )
}

export default Login;
