import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Switch>
  );
}
