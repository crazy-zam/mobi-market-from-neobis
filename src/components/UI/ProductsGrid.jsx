import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductMini from './ProductMini';
import styles from './productsGrid.module.css';

const ProductsGrid = ({ type = 'main' }) => {
  console.log('grid ', type);
  const types = {
    main: (state) => state.product.products.results,
    liked: (state) => state.product.liked.results,
    myProducts: (state) => state.product.myProducts.results,
  };
  const lazy = new Array(32)
    .fill(0)
    .map((val, ind) => <ProductMini key={ind} />);
  const products = useSelector(types[type]);

  return (
    <div className={styles.wrapper}>
      {products
        ? products.map((product) => (
            <ProductMini
              id={product.id}
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
