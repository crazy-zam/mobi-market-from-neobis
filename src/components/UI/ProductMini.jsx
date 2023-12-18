import React from 'react';
import defaultImg from './../../assets/productImg.png';
import likeRed from './../../assets/like red.svg';
import likeGrey from './../../assets/like grey.svg';
import './UI.css';

const ProductMini = ({
  img = defaultImg,
  title = 'Title',
  price = '100$',
  likes = '200',
  liked = false,
}) => {
  return (
    <div className="product-card">
      <img className="productImg" src={img} />
      <div className="prodcutPrice">{title}</div>
      <div className="productTitle">{price}</div>
      <div className="likes">
        <img className="like" src={liked ? likeRed : likeGrey} />
        <div className="productLikes">{likes}</div>
      </div>
    </div>
  );
};

export default ProductMini;
