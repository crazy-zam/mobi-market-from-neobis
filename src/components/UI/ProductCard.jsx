import React from 'react';
import styles from './productCard.module.css';

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
  return (
    <div>
      {' '}
      <div className={styles.background}></div>
      <div className={styles.card}>
        <button className={styles.closeBtn}>Х</button>
        <img src="" alt="" className={styles.images} />
        <div className={styles.price}>{price}</div>
        <div className={styles.phone}>880005553535</div>
        <div className={styles.likes}>
          <div className={styles.userLike}>{liked}</div>
          <div className={styles.totalLikes}>{likes}</div>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.shortDescription}>{shortDescription}</div>
        <div className="label">Детальное описание</div>
        <div className={styles.fullDescription}>{fullDescription}</div>
      </div>
    </div>
  );
};

export default ProductCard;
