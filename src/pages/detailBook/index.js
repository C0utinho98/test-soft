import React from 'react';
import { Content, Detail } from './styles';
import { Button, Container } from '../../components/index';

export const DetailBook = () => {
  return (
    <Container>
      <header>
        <h1>Livro 1</h1>
        <Button>Realizar devolução</Button>
      </header>
      <Content>
        <Detail>
          <strong>Autor</strong>
          <span>KATHRYN TAYLOR</span>
        </Detail>
        <Detail>
          <strong>Ano De Edição</strong>
          <span>2019</span>
        </Detail>
        <Detail>
          <strong>Idioma</strong>
          <span>Portugues</span>
        </Detail>
        <Detail>
          <strong>Genero</strong>
          <span>Romance</span>
        </Detail>
        <Detail>
          <strong>Editora</strong>
          <span>Panini</span>
        </Detail>
        <Detail>
          <strong>Alugado</strong>
          <span>Sim</span>
        </Detail>
      </Content>
    </Container>
  );
};
