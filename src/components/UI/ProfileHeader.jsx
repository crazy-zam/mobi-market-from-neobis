import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import leftBtn from './../../assets/arrow left header.svg';
import { userEdit, stopUserEdit } from '../../reducers/userReducer';
import { updateUser } from '../../actions/user';
import './UI.css';

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
      <button
        className="header-btn"
        onClick={
          user.isEdit ? () => dispatch(callback) : () => dispatch(userEdit())
        }
      >
        {user.isEdit ? 'Готово' : 'Изменить'}
      </button>
    </div>
  );
};

export default ProfileHeader;
