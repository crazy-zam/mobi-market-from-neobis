import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import leftBtn from './../../assets/arrow left header.svg';
import { userEdit } from '../../reducers/userReducer';
import styles from './profileHeader.module.css';

const ProfileHeader = ({ title, callback }) => {
  const app = useSelector((state) => state.app);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.profileHeader}>
      <div className={styles.btnWrapper}>
        <button
          className={styles.backBtn}
          onClick={() => {
            navigate('/main');
          }}
        >
          <img src={leftBtn} />
        </button>
        {'Назад  '}
      </div>

      <div className={styles.title}>{title}</div>
      {app.currentPage === 'profile' &&
        (user.isEdit === true ? (
          <button
            className={styles.headerBtn}
            form="profile-form"
            type="submit"
          >
            Готово
          </button>
        ) : (
          <button
            className={styles.headerBtn}
            onClick={() => dispatch(userEdit())}
          >
            Изменить
          </button>
        ))}
      {/* {user.isEdit && (
        <button className="header-btn" form="profile-form" type="submit">
          Готово
        </button>
      )}
      {!user.isEdit && (
        <button className="header-btn" onClick={() => dispatch(userEdit())}>
          Изменить
        </button>
      )} */}
    </div>
  );
};

export default ProfileHeader;
