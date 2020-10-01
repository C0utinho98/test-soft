import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Content, Background } from './styles';
import { Input, Button } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as actionAuth } from '../../store/ducks/auth';
import { useHistory } from 'react-router-dom';

export const SignIn = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const submit = obj => {
    dispatch(actionAuth.signInRequest(obj.username));
    history.push('/dashboard');
  };

  return (
    <Container>
      <Background />
      <Content>
        <form onSubmit={handleSubmit(submit)} autoComplete="off">
          <h1>Faça seu login</h1>
          <Input
            Icon={FiMail}
            name="username"
            placeholder="Usuário"
            inputRef={register({ required: true })}
            msgError="Campo obrigatorio"
            error={errors?.username}
          />
          <Input
            Icon={FiLock}
            name="password"
            placeholder="Senha"
            type="password"
            inputRef={register({ required: true })}
            msgError="Campo obrigatorio"
            error={errors?.password}
          />
          <Button type="submit">Accessar</Button>
        </form>
      </Content>
    </Container>
  );
};
