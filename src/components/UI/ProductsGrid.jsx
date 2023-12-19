import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductMini from './ProductMini';
import styles from './productsGrid.module.css';

const ProductsGrid = () => {
  const products = useSelector((state) => state.product.products.results);
  const dispatch = useDispatch();
  const lazy = new Array(32)
    .fill(0)
    .map((val, ind) => <ProductMini key={ind} />);

  return (
    <div className={styles.wrapper}>
      {products
        ? products.map((product) => (
            <ProductMini
              key={product.id}
              img={product.images[0].image}
              title={product.name}
              price={product.price}
              likes={product.like_count}
              liked={product.liked_by_current_user}
            ></ProductMini>
          ))
        : lazy}
    </div>
  );
};

export default ProductsGrid;
