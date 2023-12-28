import React, { useState } from 'react';
import styles from './productAddForm.module.css';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopupProd, hideAddProdPopup } from '../../reducers/appReducer';
import { addProduct } from '../../actions/product';
import TextareaAutosize from 'react-textarea-autosize';
import InputImages from './InputImages';

const ProductAddForm = ({ prod }) => {
  console.log(prod);
  const [images, setImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.currentUser.access);
  if (!!prod) {
  }
  const formik = useFormik({
    initialValues: {
      price: prod.price || '',
      name: prod.name || '',
      short_description: prod.short_description || '',
      full_description: prod.full_description || '',
      images: [],
    },
    onSubmit: (values) => {
      console.log(values);
      console.log();
      const formData = new FormData();
      Object.entries(values).forEach(([key, val]) => formData.append(key, val));
      images.forEach((file) => {
        console.log(file);
        formData.append('uploaded_images', file.file, file.file.name);
      });
      // dispatch(addProduct(formData, token));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.card}>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={() => dispatch(hideAddProdPopup())}
      ></button>
      <div className={styles.imageUploader}>
        <InputImages
          images={images}
          setImages={setImages}
          existedImages={[...prod.images]}
          imagesToDelete={imagesToDelete}
          setImagesToDelete={setImagesToDelete}
        ></InputImages>
      </div>
      <input
        className={styles.input}
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price || ''}
        placeholder="Цена"
      />

      <input
        className={styles.input}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name || ''}
        placeholder="Название"
      />
      <TextareaAutosize
        className={styles.input}
        id="short_description"
        name="short_description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.short_description || ''}
        placeholder="Краткое описание"
      ></TextareaAutosize>
      <TextareaAutosize
        className={styles.input}
        id="full_description"
        name="full_description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.full_description || ''}
        placeholder="Полное описание"
      ></TextareaAutosize>

      <button
        className={styles.submit}
        disabled={
          !!!formik.values.price ||
          !!!formik.values.name ||
          !!!formik.values.short_description ||
          !!!formik.values.full_description
        }
        onClick={() => {}}
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
};

export default ProductAddForm;
