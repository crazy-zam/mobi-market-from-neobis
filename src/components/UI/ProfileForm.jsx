import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ImageUploading from 'react-images-uploading';
import trash from './../../assets/trash.svg';
import { updateUser } from '../../actions/user';
import styles from './profileForm.module.css';
import profileDefault from './../../assets/profile default.svg';

const ProfileForm = ({}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthDay: '',
      email: '',
    },
    onSubmit: ({ firstName, lastName, birthDay, email }) => {
      console.log('submit', firstName, lastName, birthDay, email);
      // dispatch(
      //   updateUser(
      //     firstName,
      //     lastName,
      //     user.currentUser.username,
      //     birthDay,
      //     user.currentUser.email,
      //     user.currentUser.access,
      //   ),
      // );
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        id="profile-form"
        className={styles.form}
      >
        <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className={styles.uploadImageWrapper}>
              <div key={0} className={styles.imageWrapper}>
                <img
                  className={styles.imageItem}
                  src={
                    imageList.length ? imageList[0]['data_url'] : profileDefault
                  }
                />
                {!!imageList.length && (
                  <div className={styles.mask} onClick={() => onImageUpdate(0)}>
                    Заменить фото
                  </div>
                )}
                {!!imageList.length && (
                  <button
                    className={styles.imageDelete}
                    onClick={() => onImageRemove(0)}
                    onMouseOver={() => {}}
                  >
                    <img src={trash} />
                  </button>
                )}
              </div>
              {!imageList.length && (
                <button
                  className={styles.addBtn}
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Выбрать фотографию
                </button>
              )}
            </div>
          )}
        </ImageUploading>

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
        <button type="submit">Закончить регистрацию</button>
      </form>
    </div>
  );
};

export default ProfileForm;
