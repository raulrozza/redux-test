import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

import api from '../../services/api';

import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import Container from '../../styles/Container';
import { StudentContainer, ProfilePicture } from './styles';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/students');

        console.log(data);

        setStudents(data);
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
    </Container>
  );
};

export default StudentList;
