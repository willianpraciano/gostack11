import { useState } from 'react';

import GobalStyle from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import AuthContext from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Diego' }}>
        <SignIn />
      </AuthContext.Provider>
      <GobalStyle />
    </>
  );
}

export default App;
