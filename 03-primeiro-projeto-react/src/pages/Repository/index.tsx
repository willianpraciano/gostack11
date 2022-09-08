import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

export function Repository() {
  const { repository } = useParams();
  return <h1>aaa {repository}</h1>;
}

export default Repository;
