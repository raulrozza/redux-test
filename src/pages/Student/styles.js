import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  input {
    height: 42px;
    font-size: 16px;
    border: 1px solid #ddd;
    padding: 0 12px;
    border-radius: 4px;
    margin-bottom: 4px;

    &:focus {
      border-color: ${colors.primaryColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
