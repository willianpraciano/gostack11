import { useState } from 'react';

import GobalStyle from './styles/global';

import { SignIn } from './pages/Signin';

function App() {
  return (
    <>
      <SignIn />
      <GobalStyle />
    </>
  );
}

export default App;
