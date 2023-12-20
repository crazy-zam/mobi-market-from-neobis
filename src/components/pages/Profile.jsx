import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ProfileSidebar from '../UI/ProfileSidebar';
import FormAcceptPhone from '../UI/FormAcceptPhone';
import ProductGrid from './../UI/ProductsGrid';
import ProfileDescription from '../UI/ProfileDescription';
import { useSelector } from 'react-redux';
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
          <ProductGrid type={app.currentPage}></ProductGrid>
        )}

        <FormAcceptPhone></FormAcceptPhone>
        <ToastContainer className="toast" />
      </div>
    </div>
  );
};

export default Profile;
