import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Content, Background } from './styles';
import { Input, Button } from '../../components/index';

export const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();

  const submit = obj => {
    console.log(obj);
  };

  return (
    <Container>
      <Background />
      <Content>
        <form onSubmit={handleSubmit(submit)}>
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
