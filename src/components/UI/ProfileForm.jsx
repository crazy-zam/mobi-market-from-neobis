import React from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

const ProfileForm = ({}) => {
  const user = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthDay: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <ProfileHeader
        title="Профиль"
        callback={() => updateUser()}
      ></ProfileHeader>
      <form onSubmit={formik.handleSubmit} id="profile-form">
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName || ''}
          placeholder={'Имя'}
          disabled={user.isEdit}
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName || ''}
          placeholder="Фамилия"
          disabled={user.isEdit}
        />
        <div>Username</div>
        <input
          id="birthDay"
          name="birthDay"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birthDay || ''}
          placeholder="гггг-мм-дд"
          disabled={user.isEdit}
        />
        <div>
          <button type="submit">Добавить номер</button>0(000)000 000
        </div>
        <div>Email</div>
      </form>
    </div>
  );
};

export default ProfileForm;
