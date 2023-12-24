import React from 'react';
import styles from './productCard.module.css';
import './carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from 'react-redux';
import { hidePopupProd } from '../../reducers/appReducer';

const ProductCard = ({
  id,
  img,
  title,
  price,
  likes,
  liked,
  shortDescription,
  fullDescription,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={styles.background}
        onClick={(e) => {
          if (e.target.className.toString().includes('background')) {
            dispatch(hidePopupProd());
          }
        }}
      >
        <div className={styles.card}>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(hidePopupProd())}
          ></button>
          <div className={styles.carousel}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              width={532}
            >
              {img.map((image, index) => (
                <div key={index}>
                  <img src={image.image} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={styles.price}>{`${price.slice(0, -3)} сом`}</div>
          <div className={styles.phone}>880005553535</div>
          <div className={styles.likes}>
            <div className={styles.userLike}>{liked}</div>
            <div className={styles.totalLikes}>{likes}</div>
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.shortDescription}>{shortDescription}</div>
          <div className={styles.fullDescriptionLabel}>Детальное описание</div>
          <div className={styles.fullDescription}>{fullDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
