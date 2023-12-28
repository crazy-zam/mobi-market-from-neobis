import React from 'react';
import { useDispatch } from 'react-redux';
import ProfileForm from './ProfileForm';
import ProfileHeader from './ProfileHeader';
import defaultProfileLogo from './../../assets/profile default.svg';

const ProfileDescription = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <ProfileHeader title="Профиль"></ProfileHeader> */}
      <ProfileForm></ProfileForm>
    </div>
  );
};

export default ProfileDescription;
