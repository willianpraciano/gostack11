import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GobalStyle from './styles/global';

import { Routes } from './routes';

import { AppProvider } from './hooks/';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GobalStyle />
    </Router>
  );
}

export default App;
