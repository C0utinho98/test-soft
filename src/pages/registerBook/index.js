import React, { useState, useEffect } from 'react';
import {
  FiClipboard,
  FiUser,
  FiCalendar,
  FiMap,
  FiFeather,
  FiGlobe,
  FiChevronsLeft,
} from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Button, Input } from '../../components/index';
import { Content, Footer } from './styles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as actionsBook } from '../../store/ducks/books';
import { useHistory, Redirect } from 'react-router-dom';

export const RegisterBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { bookSelected } = useSelector(state => state?.book);
  const { register, errors, handleSubmit, setValue } = useForm();
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    dispatch(actionsBook.selectBook(id));
  }, [id]);

  useEffect(() => {
    if (bookSelected?.rented) {
      history.push('/dashboard');
    }
    if (bookSelected) {
      setValue('name', bookSelected.name);
      setValue('author', bookSelected.author);
      setValue('yearOfEdition', bookSelected.yearOfEdition);
      setValue('language', bookSelected.language);
      setValue('genre', bookSelected.genre);
      setValue('publishingCompany', bookSelected.publishingCompany);
    }
  }, [bookSelected]);

  const submit = obj => {
    if (!id) {
      dispatch(actionsBook.createBook({ ...obj, id: Math.random() }));
    } else {
      dispatch(actionsBook.editBook({ ...obj, id: bookSelected.id }));
    }
    history.push('/dashboard');
  };

  const handleDelete = () => {
    dispatch(actionsBook.removeBook(bookSelected.id));
    history.push('/dashboard');
  };

  const validateYear = value => {
    return value <= new Date().getFullYear();
  };

  return (
    <Container>
      <header>
        <h1>{!id ? 'Cadastar Livro' : 'Editar Livro'}</h1>
        {id && <Button onClick={handleDelete}>Excluir Livro</Button>}
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
          <div onClick={() => history.push('/dashboard')}>
            <FiChevronsLeft size={25} />
            <u>Voltar</u>
          </div>
          <Button type="submit">Salvar</Button>
        </Footer>
      </Content>
    </Container>
  );
};
