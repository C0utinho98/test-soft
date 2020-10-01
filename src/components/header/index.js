import React from 'react';
import { MdLocalLibrary } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators as actionAuth } from '../../store/ducks/auth';

import { Container, Content } from './styles';

export const Header = ({ children }) => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const history = useHistory();
  return (
    <>
      <Container>
        <Content>
          <MdLocalLibrary
            size={20}
            onClick={() => history.push('/dashboard')}
          />

          <div>
            <span>{name}</span>
            <ImExit
              size={20}
              onClick={() => {
                dispatch(actionAuth.signOut());
                history.push('/');
              }}
            />
          </div>
        </Content>
      </Container>
      {children}
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
