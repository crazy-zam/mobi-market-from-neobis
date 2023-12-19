import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ProfileSidebar from '../UI/ProfileSidebar';
import FormAcceptPhone from '../UI/FormAcceptPhone';
import ProductGrid from './../UI/ProductsGrid';
import ProfileDescription from '../UI/ProfileDescription';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [page, setPage] = useState('main');
  const app = useSelector((state) => state.app);
  return (
    <div className="profile">
      <ProfileSidebar></ProfileSidebar>
      <div className="profile-content">
        {app.currentPage == 'profile' ? (
          <ProfileDescription></ProfileDescription>
        ) : (
          <ProductGrid></ProductGrid>
        )}

        <FormAcceptPhone></FormAcceptPhone>
        <ToastContainer className="toast" />
      </div>
    </div>
  );
};

export default Profile;
