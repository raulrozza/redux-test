import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Loading from '../../components/Loading';

// Libs
import { get } from 'lodash';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

// Styles
import Container from '../../styles/Container';
import { Form } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.auth.isLoading);

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

      <Loading isLoading={isLoading} />
    </Container>
  );
};

export default Login;
