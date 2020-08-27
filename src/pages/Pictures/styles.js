import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #eee;
    border: 2px dashed ${colors.primaryColor};
    border-radius: 50%;

    margin: 24px auto;
    cursor: pointer;

    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input {
    display: none;
  }
`;
