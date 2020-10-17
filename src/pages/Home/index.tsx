/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React, { useState, FormEvent } from 'react';

import { FiStar, FiTrash } from 'react-icons/fi';
import api from '../../services/api';
import { Form, Title, Repositories } from './styles';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
}

const Home: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  async function handleAddUsers(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`users/${newUser}`);

    const user = response.data;

    setUsers([...users, user]);
    setNewUser('');
  }

  return (
    <>
      <Title>Adicionar Repositórios do GitHub</Title>
      <Form onSubmit={handleAddUsers}>
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Digite aqui"
        />
        <button type="submit">Adicionar</button>
      </Form>

      <Repositories>
        {users.map(user => (
          <div key={user.id} id="container">
            <div id="users">
              <a href="teste">
                <img src={user.avatar_url} alt={user.login} />
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.login}</p>
                </div>
              </a>
            </div>
            <div id="buttons_icon">
              <button className="button1">
                <FiStar size={30} />
              </button>
              <button className="button2">
                <FiTrash size={30} />
              </button>
            </div>
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Home;
