import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import InputForm from '../../components/InputForm';
import SelectForm from '../../components/SelectForm';
import ButtonForm from '../../components/ButtonForm';
import UsersList from '../../components/UsersList';
import ErrorCard from '../../components/ErrorCard';
import { isValidRegister } from '../../utils';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [options] = useState(['customer', 'seller', 'administrator']);
  const [role, setRole] = useState('Customer');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { token: authorization } = JSON.parse(localStorage.getItem('user'));

  const disabled = !isValidRegister({ email, password, name });
  const END_POINT = '/admin/manage';
  const CONFLICT = 409;
  const BAD_REQUEST = 401;

  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const createUser = async (user) => {
    try {
      await instance
        .post(END_POINT, user, { headers: { authorization } });
    } catch (e) {
      if (e.response.status === CONFLICT) {
        setError(true);
        setErrorMessage(e.response.data.message);
      }
      if (e.response.status === BAD_REQUEST) {
        setError(true);
        setErrorMessage(e.response.data.message);
      }
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await instance.get(END_POINT, {
        headers: { authorization },
      });
      setUsers(data);
    };
    fetchUsers();
  }, [authorization, users]);
  return (
    <>
      <NavBar />
      <h1>Cadastrar novo usuário</h1>
      <InputForm
        placeholder="Nome e sobrenome"
        testid="admin_manage__input-name"
        value={ name }
        set={ setName }
      />
      <InputForm
        placeholder="seu-email@site.com.br"
        testid="admin_manage__input-email"
        value={ email }
        set={ setEmail }
      />
      <InputForm
        placeholder="*********"
        testid="admin_manage__input-password"
        value={ password }
        set={ setPassword }
      />
      <SelectForm
        testid="admin_manage__select-role"
        options={ options }
        value={ role }
        set={ setRole }
      />
      <ButtonForm
        disabled={ disabled }
        testid="admin_manage__button-register"
        type="submit"
        value="Cadastrar"
        click={ () => createUser({ name, email, password, role }) }
      />
      <UsersList
        users={ users }
      />
      {error && <ErrorCard
        setError={ setError }
        testid="admin_manage__element-invalid-register"
        message={ errorMessage }
      />}

    </>
  );
}
