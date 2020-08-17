import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Routes from './routes/index.routes';

import history from './services/history';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
