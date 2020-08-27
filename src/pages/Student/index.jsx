import React, { useState, useEffect } from 'react';

// Libs
import { useRouteMatch, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

// Components
import Loading from '../../components/Loading';

// Styles
import Container from '../../styles/Container';
import { Form } from './styles';

// Services
import api from '../../services/api';

const Student = () => {
  const { params } = useRouteMatch();
  const { push } = useHistory();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return setLoading(false);

    (async () => {
      try {
        const { data } = await api.get(`/students/${params.id}`);

        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
        setAge(data.age);
        setHeight(data.height);

        setLoading(false);
      } catch (error) {
        if (error.isAxiosError) {
          const { errors } = error.response.data;

          toast.error('Houve um erro ao buscar os estudantes.');
          errors.forEach(error => toast.error(error));
        } else toast.error('Houve um problema.');

        push('/');
      }
    })();
  }, [params.id, push]);

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    try {
      if (params.id) {
        await api.put(`/students/${params.id}`, {
          firstname,
          lastname,
          email,
          age: age && Number(age),
          height: height && Number(height),
        });

        toast.success('Dados alterados com sucesso!');

        setLoading(false);
      } else {
        await api.post('/students', {
          firstname,
          lastname,
          email,
          age: Number(age),
          height: Number(height),
        });

        toast.success('Aluno criado com sucesso!');

        setLoading(false);

        return push('/');
      }
    } catch (error) {
      if (error.isAxiosError) {
        const { errors } = error.response.data;

        toast.error('Houve um erro processar as informações.');
        errors.forEach(error => toast.error(error));
      } else toast.error('Houve um problema.');

      return setLoading(false);
    }
  };

  return (
    <Container>
      <h1>{params.id ? 'Editar aluno' : 'Criar aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstname}
          onChange={event => setFirstname(event.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={lastname}
          onChange={event => setLastname(event.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="E-Mail"
        />
        <input
          type="text"
          value={age}
          onChange={event => setAge(event.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={height}
          onChange={event => setHeight(event.target.value)}
          placeholder="Altura"
        />

        <button type="submit">Enviar</button>
      </Form>

      <Loading isLoading={loading} />
    </Container>
  );
};

export default Student;
