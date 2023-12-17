import React from 'react';
import Button from './Button';
import logo from '../../assets/logo.svg';
import './UI.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <Button></Button>
      <div className="user">User data</div>
    </div>
  );
};

export default Header;
