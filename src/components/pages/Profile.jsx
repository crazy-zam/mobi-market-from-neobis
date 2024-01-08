import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ProfileSidebar from '../UI/ProfileSidebar';
import ProfileHeader from './../UI/ProfileHeader';
import FormAcceptPhone from '../UI/FormAcceptPhone';
import ProductAddForm from './../UI/ProductAddForm';
import PageButtonGroup from '../UI/PageButtonGroup';
import ProductGrid from './../UI/ProductsGrid';
import ProfileDescription from '../UI/ProfileDescription';
import ProductCard from '../UI/ProductCard';
import SmallPopupWIndow from '../UI/SmallPopupWindow';
import styles from './profile.module.css';

const Profile = () => {
  const app = useSelector((state) => state.app);
  const isSmallPopupVisible = useSelector(
    (state) => state.app.smallPopup.isVisible,
  );
  const pages = {
    profile: 'Профиль',
    liked: 'Понравившиеся',
    myProducts: 'Мои товары',
  };
  return (
    <div className={styles.profile}>
      <ProfileSidebar></ProfileSidebar>

      <div className="profile-content">
        <ProfileHeader title={pages[app.currentPage]}></ProfileHeader>
        {app.currentPage == 'profile' ? (
          <ProfileDescription></ProfileDescription>
        ) : (
          <div className={styles.content}>
            <ProductGrid type={app.currentPage}></ProductGrid>
            <PageButtonGroup type={app.currentPage}></PageButtonGroup>
          </div>
        )}
        {app.isPopupVisible && (
          <ProductCard
            id={app.currentProd.id}
            img={app.currentProd.images}
            liked={app.currentProd.liked_by_current_user}
            likes={app.currentProd.like_count}
            price={app.currentProd.price}
            title={app.currentProd.name}
            shortDescription={app.currentProd.short_description}
            fullDescription={app.currentProd.full_description}
          />
        )}
        {app.isAddProdPopupVisible && (
          <ProductAddForm prod={app.currentProd}></ProductAddForm>
        )}
        {/* <FormAcceptPhone></FormAcceptPhone> */}
        <ToastContainer className="toast" />
        {isSmallPopupVisible && <SmallPopupWIndow></SmallPopupWIndow>}
      </div>
    </div>
  );
};

export default Profile;
