import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import leftBtn from './../../assets/arrow left header.svg';
import { userEdit } from '../../reducers/userReducer';

const ProfileHeader = ({ title, callback }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="profile-header">
      <div className="back-btn">
        <button
          className="header-btn"
          onClick={() => {
            navigate('/main');
          }}
        >
          <img src={leftBtn} />
        </button>
        {'Назад  '}
      </div>

      <div>{title}</div>
      {user.isEdit && (
        <button className="header-btn" form="profile-form" type="submit">
          Готово
        </button>
      )}
      {!user.isEdit && (
        <button className="header-btn" onClick={() => dispatch(userEdit())}>
          Изменить
        </button>
      )}
    </div>
  );
};

export default ProfileHeader;
