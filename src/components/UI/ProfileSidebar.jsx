import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import profileLogodefault from './../../assets/profile default.svg';
import ProfileSidebarBtn from './ProfileSidebarBtn';
import styles from './profileSidebar.module.css';

const ProfileSidebar = (callback) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className={styles.sidebar}>
      <div className="profile-sidebar-head">
        <img src={user.photo ? user.photo : profileLogodefault} />
        <div>
          <div>{user.username}</div>
          <div>{user.first_name}</div>
        </div>
      </div>
      <Link to="/test">Test</Link>
      <ProfileSidebarBtn type="liked" text={'Понравившиеся'} />
      <ProfileSidebarBtn type="products" text={'Мои товары'} />
      <ProfileSidebarBtn type="exit" text={'Выйти'} />
    </div>
  );
};

export default ProfileSidebar;
