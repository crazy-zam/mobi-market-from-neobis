import React from 'react';
import { ToastContainer } from 'react-toastify';
import ProfileSidebar from '../UI/ProfileSidebar';
import SmallPopupWindow from '../UI/SmallPopupWindow';
import styles from './test.css';
import { addProduct } from '../../actions/product';
import { useSelector } from 'react-redux';
import img from './../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Test = () => {
  const token = useSelector((state) => state.user.currentUser.access);
  let formData = new FormData();
  formData.append('icon', img);
  return (
    <div className={styles.profile}>
      {/* <SmallPopupWindow
        type="small"
        content="delete"
        title="test"
      ></SmallPopupWindow> */}
      <ProfileSidebar></ProfileSidebar>
      <div className="profile-content">
        <button
          onClick={addProduct(
            'test',
            '500',
            'short description',
            'full description',
            [formData],
            token,
          )}
        >
          Test
        </button>
        <Link to="/main">Main</Link>
        <ToastContainer className="toast" />
      </div>
    </div>
  );
};

export default Test;
