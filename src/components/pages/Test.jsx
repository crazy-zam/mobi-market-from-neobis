import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './test.css';

import {
  addPhone,
  changePassword,
  forgotPassword,
  refreshTokens,
  logout,
  getMyProfile,
  updateUser,
  resetPassword,
  verifyPhone,
} from './../../actions/user';

const Test = () => {
  const [files, setFiles] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const helper = () => {
    console.log(
      dispatch(
        updateUser(
          'Test1111',
          'Test1111',
          'Test1111',
          '2000-10-10',
          'Test1111@test.com',
          files[0],
          user.currentUser.access,
        ),
      ),
    );
  };
  return (
    <div className={styles.profile}>
      <div className={styles.profileContent}>
        Test page
        <div className="userData">
          <div>first_name {user.currentUser.first_name}</div>
          <div>last_name {user.currentUser.last_name}</div>
          <div>username {user.currentUser.username}</div>
          <div>birth_date {user.currentUser.birth_date}</div>
          <div>phone {user.currentUser.phone}</div>
          <div>email {user.currentUser.email}</div>

          <button onClick={helper}>Test button </button>
          <input
            onChange={(event) => {
              setFiles([...event.target.files]);
              console.log(files[0].name);
            }}
            type="file"
            id="upload-input"
            className={styles.uploadInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
