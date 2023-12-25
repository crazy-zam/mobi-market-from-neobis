import React, { useState } from 'react';
import styles from './productAddForm.module.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { hidePopupProd } from '../../reducers/appReducer';
import TextareaAutosize from 'react-textarea-autosize';
import InputImages from './InputImages';

const ProductAddForm = ({}) => {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      price: '',
      title: '',
      shortDescripton: '',
      fullDescription: '',
      images: [],
    },
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.card}>
      <div className={styles.imageUploader}>
        <InputImages images={images} setImages={setImages}></InputImages>
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
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title || ''}
        placeholder="Название"
      />
      <TextareaAutosize
        className={styles.input}
        id="shortDescripton"
        name="shortDescripton"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.shortDescripton || ''}
        placeholder="Краткое описание"
      ></TextareaAutosize>
      <TextareaAutosize
        className={styles.input}
        id="fullDescription"
        name="fullDescription"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullDescription || ''}
        placeholder="Полное описание"
      ></TextareaAutosize>

      <button
        className={styles.submit}
        disabled={
          !!!formik.values.price ||
          !!!formik.values.title ||
          !!!formik.values.shortDescripton ||
          !!!formik.values.fullDescription
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
