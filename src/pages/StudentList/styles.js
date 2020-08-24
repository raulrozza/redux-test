import styled from 'styled-components';

export const StudentContainer = styled.div`
  margin-top: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
`;
