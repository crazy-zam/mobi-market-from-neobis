import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ProfileSidebar from '../UI/ProfileSidebar';
import FormAcceptPhone from '../UI/FormAcceptPhone';
import PageButtonGroup from '../UI/PageButtonGroup';
import ProductGrid from './../UI/ProductsGrid';
import ProfileDescription from '../UI/ProfileDescription';

import styles from './profile.module.css';

const Profile = () => {
  const app = useSelector((state) => state.app);
  return (
    <div className={styles.profile}>
      <ProfileSidebar></ProfileSidebar>
      <div className="profile-content">
        {app.currentPage == 'profile' ? (
          <ProfileDescription></ProfileDescription>
        ) : (
          <div>
            <ProductGrid type={app.currentPage}></ProductGrid>
            <PageButtonGroup type={app.currentPage}></PageButtonGroup>
          </div>
        )}

        {/* <FormAcceptPhone></FormAcceptPhone> */}
        <ToastContainer className="toast" />
      </div>
    </div>
  );
};

export default Profile;
