import { useState } from 'react';

import GobalStyle from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GobalStyle />
    </>
  );
}

export default App;
