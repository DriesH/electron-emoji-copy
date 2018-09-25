import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  background: papayawhip;
  padding: 10px;
  box-sizing: border-box;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li + li {
    margin-left: 10px;
  }
`;

const Nav = () => (
  <Navigation>
    <ul>
      <li>
        <Link to="/">Application</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </Navigation>
);

export default Nav;
