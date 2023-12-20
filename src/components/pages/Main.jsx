import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../actions/product';
import Header from '../UI/Header';
import ProductsGrid from '../UI/ProductsGrid';
import PageButtonGroup from '../UI/PageButtonGroup';
import './pages.css';

const Main = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const token = user.access;
  console.log('main render');
  useEffect(() => {
    dispatch(getAllProducts(token));
  }, []);
  return (
    <div className="main">
      <Header></Header>
      <ProductsGrid type="main"></ProductsGrid>
      <PageButtonGroup></PageButtonGroup>
    </div>
  );
};

export default Main;
