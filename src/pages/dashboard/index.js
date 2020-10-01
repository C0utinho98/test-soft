import React, { useEffect, useState } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Info, Content, DivInput, EmptyState } from './styles';
import { Creators as actionsBook } from '../../store/ducks/books';

import { Container, Button, Input, Tooltip } from '../../components/index';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [localBooks, setLocalBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { books } = useSelector(state => state.book);

  useEffect(() => {
    dispatch(actionsBook.clearState());
  }, []);

  useEffect(() => {
    setLocalBooks(books);
  }, [books]);

  useEffect(() => {
    if (searchTerm.length) {
      const results = localBooks.filter(book =>
        book.name.toLowerCase().includes(searchTerm)
      );
      setLocalBooks(results);
    } else {
      setLocalBooks(books);
    }
  }, [searchTerm]);

  const history = useHistory();
  return (
    <Container>
      <header>
        <h1>Livros</h1>
        <Button onClick={() => history.push('/register')}>
          Adicionar Livro
        </Button>
      </header>
      <DivInput>
        <Input
          placeholder="Buscar livro"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </DivInput>
      <Content>
        {localBooks.length ? (
          localBooks.map(book => (
            <ul key={`book-${book.id}`}>
              <Info>
                <strong>{book.name}</strong>
                <Tooltip title="Mais detalhes">
                  <FiArrowRightCircle
                    size={20}
                    onClick={() => history.push(`/detail/${book.id}`)}
                  />
                </Tooltip>
              </Info>
            </ul>
          ))
        ) : (
          <EmptyState>
            <span>Não há livros cadastrados</span>
            <BsBook size={80} />
          </EmptyState>
        )}
      </Content>
    </Container>
  );
};
