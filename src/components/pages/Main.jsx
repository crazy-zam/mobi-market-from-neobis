import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../actions/product';
import Header from '../UI/Header';
import ProductsGrid from '../UI/ProductsGrid';
import PageButtonGroup from '../UI/PageButtonGroup';
import './pages.css';
import ProductMini from '../UI/ProductMini';
import ProductCard from '../UI/ProductCard';

const Main = () => {
  const user = useSelector((state) => state.user.currentUser);
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const token = user.access;
  useEffect(() => {
    dispatch(getAllProducts(token));
  }, []);
  return (
    <div className="main">
      <Header></Header>
      <ProductsGrid type="main"></ProductsGrid>
      <PageButtonGroup type="main"></PageButtonGroup>
      {app.isPopupVisible && (
        <ProductCard
          id={app.currentProd.id}
          img={app.currentProd.images}
          liked={app.currentProd.liked_by_current_user}
          likes={app.currentProd.like_count}
          price={app.currentProd.price}
          title={app.currentProd.name}
          shortDescription={app.currentProd.short_description}
          fullDescription={app.currentProd.full_description}
        />
      )}
    </div>
  );
};

export default Main;
