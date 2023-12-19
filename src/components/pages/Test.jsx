import React from 'react';
import { ToastContainer } from 'react-toastify';
import ProfileSidebar from '../UI/ProfileSidebar';
import SmallPopupWindow from '../UI/SmallPopupWindow';
import styles from './test.css';

const Test = () => {
  return (
    <div className={styles.profile}>
      <SmallPopupWindow
        type="small"
        content="delete"
        title="test"
      ></SmallPopupWindow>
      <ProfileSidebar></ProfileSidebar>
      <div className="profile-content">
        <ToastContainer className="toast" />
      </div>
    </div>
  );
};

export default Test;
