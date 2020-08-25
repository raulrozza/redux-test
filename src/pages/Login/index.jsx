import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';

import * as actions from '../../store/modules/auth/actions';

import Container from '../../styles/Container';
import { Form } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    dispatch(
      actions.loginRequest({
        email,
        password,
        prevPath: get(location, 'state.prevPath', '/'),
      }),
    );
  };

  return (
    <Container>
      <h1>Entrar</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Seu e-mail"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Sua senha"
          required
        />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default Login;
