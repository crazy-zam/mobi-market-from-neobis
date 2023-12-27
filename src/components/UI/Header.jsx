import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import logo from '../../assets/logo.svg';
import profileLogodefault from './../../assets/profile default.svg';
import styles from './header.module.css';
import { openProfileAction } from '../../actions/app';

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <img src={logo} />
      <Button fill="Подать объявление"></Button>
      <div
        className="user"
        onClick={() => {
          dispatch(openProfileAction());
          navigate('/profile');
        }}
      >
        <img
          className={styles.profileLogo}
          src={user.photo ? user.photo : profileLogodefault}
        />
        <div>
          <div>{user.username}</div>
          <div>{user.first_name}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
