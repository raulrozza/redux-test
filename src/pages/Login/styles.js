import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    input {
      height: 42px;
      font-size: 16px;
      border: 1px solid #ddd;
      padding: 0 12px;
      border-radius: 4px;

      &:focus {
        border-color: ${colors.primaryColor};
      }
    }
  }
`;
