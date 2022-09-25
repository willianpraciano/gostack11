import { useState } from 'react';

import GobalStyle from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import { AppProvider } from './hooks/';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GobalStyle />
    </>
  );
}

export default App;
