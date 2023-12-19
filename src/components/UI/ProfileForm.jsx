import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from './ProfileHeader';
import { updateUser } from '../../actions/user';

const ProfileForm = ({}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthDay: '',
      email: '',
    },
    onSubmit: ({ firstName, lastName, birthDay, email }) => {
      console.log('submit', firstName, lastName, birthDay, email);
      dispatch(
        updateUser(
          firstName,
          lastName,
          user.currentUser.username,
          birthDay,
          user.currentUser.email,
          user.currentUser.access,
        ),
      );
    },
  });

  return (
    <div>
      <ProfileHeader title="Профиль"></ProfileHeader>
      <form onSubmit={formik.handleSubmit} id="profile-form">
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName || ''}
          placeholder={'Имя'}
          disabled={!user.isEdit}
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName || ''}
          placeholder="Фамилия"
          disabled={!user.isEdit}
        />
        <div>Username</div>
        <input
          id="birthDay"
          name="birthDay"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birthDay || ''}
          placeholder="гггг-мм-дд"
          disabled={!user.isEdit}
        />
        <div>
          <button type="button">Добавить номер</button>0(000)000 000
        </div>
        <div>Email</div>
      </form>
    </div>
  );
};

export default ProfileForm;
