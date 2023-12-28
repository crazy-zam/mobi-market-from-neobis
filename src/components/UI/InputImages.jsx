import React, { useEffect, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import styles from './inputImages.module.css';
import addImgBtn from './../../assets/image-add.svg';
import trash from './../../assets/trash.svg';
const InputImages = ({
  images,
  setImages,
  existedImages,
  imagesToDelete,
  setImagesToDelete,
}) => {
  const maxNumber = 10;
  console.log(existedImages, imagesToDelete);
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
              type="button"
              className={styles.addBtn}
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img src={addImgBtn} />
              <div className={styles.addBtnDescription}>Добавить фото</div>
            </button>
            {existedImages.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img className={styles.imageItem} src={image.image} />
                <div
                  className={styles.mask}
                  onClick={() => {
                    setImagesToDelete([...imagesToDelete, image]);
                    console.log('before', existedImages);
                    existedImages.splice(
                      existedImages.findIndex((item) => {
                        console.log(item.id, image.id);
                        return item.id === image.id;
                      }),
                      1,
                    );
                    console.log('after', existedImages);
                    onImageUpload();
                  }}
                >
                  Заменить фото
                </div>
                <button
                  className={styles.imageDelete}
                  onClick={() => {}}
                  onMouseOver={() => {}}
                >
                  <img src={trash} />
                </button>
              </div>
            ))}
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
