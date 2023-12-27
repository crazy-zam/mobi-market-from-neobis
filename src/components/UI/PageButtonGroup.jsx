import { useDispatch, useSelector } from 'react-redux';
import leftArrow from './../../assets/arrow left.svg';
import rightArrow from './../../assets/arrow right.svg';
import styles from './pageButtonGroup.module.css';
import {
  getAllProducts,
  getLikedProducts,
  getMyProducts,
} from '../../actions/product';

const PageButtonGroup = ({ type }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const types = {
    main: {
      callback: (page) => {
        dispatch(getAllProducts(user.access, page));
      },
      product: useSelector((state) => state.product.products),
    },
    liked: {
      callback: (page) => {
        dispatch(getLikedProducts(user.access, page));
      },
      product: useSelector((state) => state.product.liked),
    },
    myProducts: {
      callback: (page) => {
        dispatch(getMyProducts(user.access, page));
      },
      product: useSelector((state) => state.product.myProducts),
    },
  };

  const products = types[type].product;
  const currPage = products.page;
  const pages = new Array();
  if (!!products.previous)
    pages.push(
      <button
        className={styles.arrow}
        onClick={() => {
          types[type].callback(currPage - 1);
        }}
      >
        <img src={leftArrow} />
      </button>,
      <button
        className={styles.page}
        onClick={() => {
          types[type].callback(currPage - 1);
        }}
      >
        {currPage - 1}
      </button>,
    );
  pages.push(<button className={styles.currentPage}>{currPage}</button>);
  if (!!products.next) {
    pages.push(
      <button
        className={styles.page}
        onClick={() => {
          types[type].callback(currPage + 1);
        }}
      >
        {currPage + 1}
      </button>,
    );
    if (products.count > (products.page + 1) * 32) {
      pages.push(
        <button
          className={styles.page}
          onClick={() => {
            types[type].callback(currPage + 2);
          }}
        >
          {currPage + 2}
        </button>,
      );
    }
    pages.push(
      <button
        className={styles.arrow}
        onClick={() => {
          types[type].callback(currPage + 1);
        }}
      >
        <img src={rightArrow} />
      </button>,
    );
  }

  return <div className={styles.wrapper}>{pages.map((btn) => btn)}</div>;
};

export default PageButtonGroup;
