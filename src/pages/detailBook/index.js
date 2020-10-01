import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Content, Detail, Footer } from './styles';
import { Button, Container, Tooltip } from '../../components/index';
import { Creators as actionsBook } from '../../store/ducks/books';
import { FiShoppingBag, FiChevronsLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

export const DetailBook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const { bookSelected = {} } = useSelector(state => state.book);

  useEffect(() => {
    dispatch(actionsBook.selectBook(id));
  }, []);

  const handleAction = () => {
    if (bookSelected?.rented) {
      dispatch(actionsBook.rentBook(id));
    } else {
      history.push(`/edit/${id}`);
    }
  };
  return (
    <Container>
      <header>
        <h1>{bookSelected?.name}</h1>
        <Button onClick={handleAction}>
          {bookSelected?.rented ? 'Realizar devolução' : 'Editar'}
        </Button>
      </header>
      <Content>
        <Detail>
          <strong>Autor</strong>
          <span>{bookSelected?.author}</span>
        </Detail>
        <Detail>
          <strong>Ano De Edição</strong>
          <span>{bookSelected?.yearOfEdition}</span>
        </Detail>
        <Detail>
          <strong>Idioma</strong>
          <span>{bookSelected?.language}</span>
        </Detail>
        <Detail>
          <strong>Genero</strong>
          <span>{bookSelected?.genre}</span>
        </Detail>
        <Detail>
          <strong>Editora</strong>
          <span>{bookSelected?.publishingCompany}</span>
        </Detail>
        <Detail>
          <strong>Alugado</strong>
          <span>{bookSelected?.rented ? 'Sim' : 'Não'}</span>
        </Detail>
        <Footer>
          <div onClick={() => history.push('/dashboard')}>
            <FiChevronsLeft size={25} />
            <u>Voltar</u>
          </div>
          {!bookSelected?.rented && (
            <Tooltip title="Alugar">
              <FiShoppingBag
                size={40}
                className="second"
                onClick={() => dispatch(actionsBook.rentBook(id))}
              />
            </Tooltip>
          )}
        </Footer>
      </Content>
    </Container>
  );
};
