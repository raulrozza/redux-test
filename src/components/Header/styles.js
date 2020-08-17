import styled from 'styled-components';
import colors from '../../config/colors';

export const Nav = styled.nav`
  background: ${colors.primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
  }
`;
