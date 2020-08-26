import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background: #000a;
  }

  span {
    z-index: 2;
  }
`;
