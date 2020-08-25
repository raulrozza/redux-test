import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

// Styles
import Container from '../../styles/Container';
import { Form } from './styles';

// Services
import api from '../../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { push } = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await api.post('/users', {
        name,
        email,
        password,
      });

      toast.success('Cadastro efetuado com sucesso.');

      return push('/login');
    } catch (error) {
      if (error.isAxiosError) {
        const { errors } = error.response.data;

        toast.error('Cadastro não efetuado.');
        return errors.forEach(error => toast.error(error));
      }
      return toast.error('Houve um problema.');
    }
  };

  return (
    <Container>
      <h1>Crie sua conta</h1>
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
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
};

export default Register;
