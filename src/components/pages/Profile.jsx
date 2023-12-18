import React from 'react';
import ProfileSidebar from '../UI/ProfileSidebar';
import ProfileHeader from '../UI/ProfileHeader';
import ProfileDescription from '../UI/ProfileDescription';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileSidebar></ProfileSidebar>
      <div className="profile-content">
        <ProfileDescription></ProfileDescription>
      </div>
    </div>
  );
};

export default Profile;
