import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

export function Dashboard() {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>;
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="">
          <img
            src="https://avatars.githubusercontent.com/u/28768280?v=4"
            alt="Willian S. Praciano"
          />
          <div>
            <strong>unform</strong>
            <p>Esta é uma super descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars.githubusercontent.com/u/28768280?v=4"
            alt="Willian S. Praciano"
          />
          <div>
            <strong>unform</strong>
            <p>Esta é uma super descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars.githubusercontent.com/u/28768280?v=4"
            alt="Willian S. Praciano"
          />
          <div>
            <strong>unform</strong>
            <p>Esta é uma super descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}
