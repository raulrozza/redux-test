import React, { useState, useEffect } from 'react';

// Components
import Loading from '../../components/Loading';

// Redux
import * as actions from '../../store/modules/auth/actions';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Container from '../../styles/Container';
import { Form } from './styles';

const Register = () => {
  const { isLoggedIn, user, isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [isLoggedIn, user]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (isLoggedIn) {
      const payload = {
        name,
        email,
        id: user.id,
      };

      if (password) payload.password = password;

      dispatch(actions.editRequest(payload));
    } else dispatch(actions.registerRequest({ name, email, password }));
  };

  return (
    <Container>
      <h1>{isLoggedIn ? 'Editar dados' : 'Crie sua conta'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required={!isLoggedIn}
          />
        </label>

        <button type="submit">
          {isLoggedIn ? 'Salvar' : 'Criar minha conta'}
        </button>
      </Form>

      <Loading isLoading={isLoading} />
    </Container>
  );
};

export default Register;
