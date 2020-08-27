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
