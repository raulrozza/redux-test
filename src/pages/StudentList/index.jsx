import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Loading from '../../components/Loading';

// Icons
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

// Libs
import { get } from 'lodash';
import { toast } from 'react-toastify';

// Services
import api from '../../services/api';

// Styles
import Container from '../../styles/Container';
import { StudentContainer, ProfilePicture, NewStudent } from './styles';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const { data } = await api.get('/students');

        setStudents(data);
        setIsLoading(false);
      } catch (error) {
        if (error.isAxiosError) {
          const { errors } = error.response.data;

          toast.error('Houve um erro ao buscar os estudantes.');
          return errors.forEach(error => toast.error(error));
        }
        return toast.error('Houve um problema.');
      }
    })();
  }, []);

  const handleDelete = async (event, id) => {
    event.preventDefault();

    if (id === undefined) return;

    if (!window.confirm('Deseja mesmo excluir?')) return;

    try {
      setStudents(students.filter(student => student.id !== id));

      await api.delete(`/students/${id}`);

      toast.success('Aluno removido com sucesso.');
    } catch (error) {
      if (error.isAxiosError) {
        const { errors } = error.response.data;

        toast.error('Houve um erro ao buscar os estudantes.');
        return errors.forEach(error => toast.error(error));
      }
      return toast.error('Houve um problema.');
    }
  };

  return (
    <Container>
      <h1>Alunos</h1>
      <NewStudent to="/student">Novo aluno</NewStudent>

      <StudentContainer>
        {students.map(student => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'Pictures[0].url', null) !== null ? (
                <img src={student.Pictures[0].url} alt={student.firstname} />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{student.firstname}</span>
            <span>{student.email}</span>

            <Link to={`/student/${student.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link onClick={event => handleDelete(event, student.id)} to="">
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentContainer>

      <Loading isLoading={isLoading} />
    </Container>
  );
};

export default StudentList;
