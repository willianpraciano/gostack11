import { useState } from 'react';

import GobalStyle from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import { ToastContainer } from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />

      <GobalStyle />
    </>
  );
}

export default App;
