import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductMini from './ProductMini';
import classNames from 'classnames';
import styles from './productsGrid.module.css';

const ProductsGrid = ({ type = 'main' }) => {
  console.log('grid ', type);
  const types = {
    main: {
      state: (state) => state.product.products.results,
      grid: 32,
      style: styles.gridMain,
    },
    liked: {
      state: (state) => state.product.liked.results,
      grid: 16,
      style: styles.gridSmall,
    },
    myProducts: {
      state: (state) => state.product.myProducts.results,
      grid: 16,
      style: styles.gridSmall,
    },
  };
  const lazy = new Array(types[type].grid)
    .fill(0)
    .map((val, ind) => <ProductMini key={ind} />);
  const products = useSelector(types[type].state);
  let style = '';
  if (type === 'main') {
    style = styles.gridMain;
  } else {
    style = styles.gridSmall;
  }

  return (
    <div className={styles[`${type == 'main' ? 'wrapper' : 'gridSmall'}`]}>
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
