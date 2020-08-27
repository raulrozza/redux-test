import React, { useState, useEffect } from 'react';

// Components
import Loading from '../../components/Loading';

// Libs
import { useHistory, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';

// Styles
import Container from '../../styles/Container';
import { Form } from './styles';
import api from '../../services/api';

const Pictures = () => {
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null);

  const { push } = useHistory();
  const { params } = useRouteMatch();

  useEffect(() => {
    if (!params.id) return push('/');

    setLoading(true);

    (async () => {
      try {
        const { data } = await api.get(`/students/${params.id}`);

        if (data.Pictures && data.Pictures[0] && data.Pictures[0].url)
          setPicture(data.Pictures[0].url);
      } catch (error) {
        if (error.isAxiosError) {
          const { errors } = error.response.data;

          toast.error('Houve ao obter a imagem.');
          errors.forEach(error => toast.error(error));
        } else toast.error('Houve um problema.');
      } finally {
        setLoading(false);
      }
    })();
  }, [params.id, push]);

  const handleChange = async event => {
    const newPic = event.target.files[0];
    const url = URL.createObjectURL(newPic);

    setPicture(url);

    try {
      const formData = new FormData();

      formData.append('student_id', params.id);
      formData.append('file', newPic);

      await api.post('/pictures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Imagem enviada');
    } catch (error) {
      if (error.isAxiosError) {
        const { errors } = error.response.data;

        toast.error('Erro ao enviar a imagem.');
        errors.forEach(error => toast.error(error));
      } else toast.error('Houve um problema.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>Fotos</h1>

      <Form>
        <label htmlFor="picture">
          {picture ? <img src={picture} alt="Foto" /> : 'Selecionar'}
          <input
            type="file"
            name="picture"
            id="picture"
            onChange={handleChange}
          />
        </label>
      </Form>

      <Loading isLoading={loading} />
    </Container>
  );
};

export default Pictures;
