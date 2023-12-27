import React from 'react';
import styles from './productCard.module.css';
import './carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { hidePopupProd } from '../../reducers/appReducer';
import { productLike } from '../../actions/product';
import likeRed from './../../assets/like red.svg';
import likeGrey from './../../assets/like grey.svg';
import redHeart from './../../assets/red heart.svg';
import { showSmallPopup } from '../../reducers/appReducer';
import { likeCurrentProd, unlikeCurrentProd } from '../../reducers/appReducer';

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
  const token = useSelector((state) => state.user.currentUser.access);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        onClick={(e) => {
          if (e.target.className.toString().includes('background')) {
            dispatch(hidePopupProd());
          }
        }}
      ></div>
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
          {/* <div className={styles.userLike}>{liked}</div>
          <div className={styles.totalLikes}>{likes}</div> */}
          <img
            className="heart"
            src={liked ? likeRed : likeGrey}
            onClick={() => {
              liked
                ? dispatch(
                    showSmallPopup({
                      img: redHeart,
                      title:
                        'Вы действительно хотите удалить из понравившихся?',
                      button: 'Удалить',
                      type: 'unlikeCurrent',
                      id: id,
                    }),
                  )
                : dispatch(productLike(token, id)).then(
                    dispatch(likeCurrentProd()),
                  );
            }}
          />

          <div className="productLikes">{likes}</div>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.shortDescription}>{shortDescription}</div>
        <div className={styles.fullDescriptionLabel}>Детальное описание</div>
        <div className={styles.fullDescription}>{fullDescription}</div>
      </div>
    </div>
  );
};

export default ProductCard;
