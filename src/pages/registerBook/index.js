import React, { useState } from 'react';
import {
  FiClipboard,
  FiUser,
  FiCalendar,
  FiMap,
  FiFeather,
  FiGlobe,
} from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Button, Input } from '../../components/index';
import { Content, Footer } from './styles';

export const RegisterBook = () => {
  const { register, errors, handleSubmit } = useForm();
  const [key, setKey] = useState('');
  console.log(errors.yearOfEdition);
  const submit = () => {};

  const validateYear = value => {
    return value.length === 4 && value <= new Date().getFullYear();
  };

  return (
    <Container>
      <header>
        <h1>Cadastar Livro</h1>
        <Button>Realizar devolução</Button>
      </header>
      <Content
        autoComplete="off"
        onSubmit={handleSubmit(submit)}
        key={`key-form-${key}`}
      >
        <Input
          Icon={FiClipboard}
          placeholder="Nome"
          name="name"
          inputRef={register({ required: true })}
          msgError="Campo obrigatorio"
          error={errors?.name}
        />
        <Input
          Icon={FiUser}
          placeholder="Autor"
          name="author"
          inputRef={register({ required: true })}
          msgError="Campo obrigatorio"
          error={errors?.author}
        />
        <Input
          Icon={FiCalendar}
          placeholder="Ano de edição"
          name="yearOfEdition"
          type="number"
          inputRef={register({
            required: true,
            validate: {
              validateYear: validateYear,
            },
          })}
          msgError={
            errors?.yearOfEdition?.type === 'required'
              ? 'Campo obrigatorio'
              : 'Ano não pode ser maior que o ano atual'
          }
          error={errors?.yearOfEdition}
        />
        <Input
          Icon={FiMap}
          placeholder="Idioma"
          name="language"
          inputRef={register({ required: true })}
          msgError="Campo obrigatorio"
          error={errors?.language}
        />
        <Input
          Icon={FiFeather}
          placeholder="Genero"
          name="genre"
          inputRef={register({ required: true })}
          msgError="Campo obrigatorio"
          error={errors?.genre}
        />
        <Input
          Icon={FiGlobe}
          placeholder="Editora"
          name="publishingCompany"
          inputRef={register({ required: true })}
          msgError="Campo obrigatorio"
          error={errors?.publishingCompany}
        />
        <Footer>
          <u onClick={() => setKey(Math.random())}>Limpar</u>
          <Button type="submit">Salvar</Button>
        </Footer>
      </Content>
    </Container>
  );
};
