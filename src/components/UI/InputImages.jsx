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
  const [currentImages, setCurrentImages] = useState(existedImages);

  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
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
            {currentImages.map((image, index) => {
              return (
                <div key={index} className={styles.imageWrapper}>
                  <img className={styles.imageItem} src={image.image} />
                  <div
                    className={styles.mask}
                    onClick={() => {
                      onImageUpload();
                      setImagesToDelete([...imagesToDelete, image]);

                      currentImages.splice(
                        currentImages.findIndex((item) => item.id === image.id),
                        1,
                      );
                    }}
                  >
                    Заменить фото
                  </div>
                  <button
                    className={styles.imageDelete}
                    onClick={() => {
                      setImagesToDelete([...imagesToDelete, image]);

                      currentImages.splice(
                        currentImages.findIndex((item) => item.id === image.id),
                        1,
                      );
                    }}
                    onMouseOver={() => {}}
                  >
                    <img src={trash} />
                  </button>
                </div>
              );
            })}
            {/* {currentImages.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img className={styles.imageItem} src={image.image} />
                <div
                  className={styles.mask}
                  onClick={() => {
                    setImagesToDelete([...imagesToDelete, image]);
                    setCurrentImages(
                      currentImages.splice(
                        existedImages.findIndex((item) => {
                          console.log(item.id, image.id);
                          return item.id === image.id;
                        }),
                        1,
                      ),
                    );
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
            ))} */}
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
