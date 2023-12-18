import React from 'react';
import arrow from './../../assets/profile arrow.svg';
import imgLiked from './../../assets/profile liked.svg';
import imgExit from './../../assets/profile exit.svg';
import imgMyProducts from './../../assets/profile my products.svg';
import './UI.css';

const ProfileSidebarBtn = ({ type, text }) => {
  const types = {
    liked: imgLiked,
    products: imgMyProducts,
    exit: imgExit,
  };
  return (
    <div
      className="profile-sidebar-btn
    "
    >
      <div
        className="profile-sidebar-btn-group
    "
      >
        <img src={types[type]} />
        <div>{text}</div>
      </div>

      <img src={arrow} />
    </div>
  );
};

export default ProfileSidebarBtn;
