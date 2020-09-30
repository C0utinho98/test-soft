import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Info, Content, DivInput } from './styles';
import { Container, Button, Input, Tooltip } from '../../components/index';

export const Dashboard = () => {
  return (
    <Container>
      <header>
        <h1>Livros</h1>
        <Button>Adicionar Livro</Button>
      </header>
      <DivInput>
        <Input placeholder="Buscar livro" />
      </DivInput>
      <Content>
        <ul>
          <Info>
            <strong>aaaa</strong>
            <Tooltip title="Mais detalhes">
              <FiArrowRightCircle size={20} />
            </Tooltip>
          </Info>
        </ul>
        <ul>
          <Info>
            <strong>aaaa</strong>
            <Tooltip title="Mais detalhes">
              <FiArrowRightCircle size={20} />
            </Tooltip>
          </Info>
        </ul>
        <ul>
          <Info>
            <strong>aaaa</strong>
            <Tooltip title="Mais detalhes">
              <FiArrowRightCircle size={20} />
            </Tooltip>
          </Info>
        </ul>
      </Content>
    </Container>
  );
};
