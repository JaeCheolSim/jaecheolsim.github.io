import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import styles from '../styles/index.scss';

const Wrapper = styled.div`
  display: flex;
  .contents {
    width: 100%;
  }
  @media screen and (max-width: 1500px) {
    .contents {
      margin-right: 250px;
    }
  }
  @media screen and (max-width: 1080px) {
    .contents {
      margin: 100px 0;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <main className="contents">{children}</main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
