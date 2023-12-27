import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import styles from './inputImages.module.css';
import addImgBtn from './../../assets/image-add.svg';
import trash from './../../assets/trash.svg';
const InputImages = ({ images, setImages }) => {
  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="ImageUploadForm">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
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
            <button
              className={styles.addBtn}
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img src={addImgBtn} />
              <div className={styles.addBtnDescription}>Добавить фото</div>
            </button>
            {imageList.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img className={styles.imageItem} src={image['data_url']} />
                <div
                  className={styles.mask}
                  onClick={() => onImageUpdate(index)}
                >
                  Заменить фото
                </div>
                <button
                  className={styles.imageDelete}
                  onClick={() => onImageRemove(index)}
                  onMouseOver={() => {}}
                >
                  <img src={trash} />
                </button>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default InputImages;
