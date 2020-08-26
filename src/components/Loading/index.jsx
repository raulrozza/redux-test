import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Loading({ isLoading = false }) {
  if (!isLoading) return <></>;

  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loading;
