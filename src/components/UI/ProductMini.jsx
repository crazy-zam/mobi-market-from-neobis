import React from 'react';
import productImg from './../../assets/productImg.png';
const ProductMini = () => {
  return (
    <div className="product-card">
      <img src={productImg} />
      <div className="productTitle">Product card title</div>
      <div className="prodcutPrice">1000$</div>
      <div className="productLikes">200 likes</div>
    </div>
  );
};

export default ProductMini;
