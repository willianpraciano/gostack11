import { useState } from 'react';

import GobalStyle from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <>
      <SignIn />
      <GobalStyle />
    </>
  );
}

export default App;
