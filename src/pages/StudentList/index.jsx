import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Loading from '../../components/Loading';

// Icons
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

// Libs
import { get } from 'lodash';

// Services
import api from '../../services/api';

// Styles
import Container from '../../styles/Container';
import { StudentContainer, ProfilePicture } from './styles';

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
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <StudentContainer>
        {students.map(student => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'pictures[0].url', null) ? (
                <img src={student.pictures[0].url} alt={student.firstname} />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{student.firstname}</span>
            <span>{student.email}</span>

            <Link to={`/student/${student.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/student/${student.id}/delete`}>
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
