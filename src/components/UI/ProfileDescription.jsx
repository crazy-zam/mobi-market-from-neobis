import React from 'react';
import { useDispatch } from 'react-redux';
import ProfileForm from './ProfileForm';
import defaultProfileLogo from './../../assets/profile default.svg';

const ProfileDescription = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={defaultProfileLogo} />
      <ProfileForm></ProfileForm>
    </div>
  );
};

export default ProfileDescription;
