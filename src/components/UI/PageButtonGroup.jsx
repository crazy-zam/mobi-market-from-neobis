import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
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
  // const products = useSelector((state) => state.product.products);
  console.log(products);
  const changePageHandler = types[type].callback;
  // const changePageHandler = (page) => {
  //   dispatch(getAllProducts(user.access, page));
  // };

  const currPage = products.page;
  const pages = new Array();

  if (!!products.previous)
    pages.push(
      { type: 'pageBtn pageBtnArrow', title: 'previous' },
      { type: 'pageBtn', title: currPage - 1 },
    );
  pages.push({ type: 'pageBtnCurrent pageBtn', title: currPage });
  if (!!products.next)
    pages.push(
      { type: 'pageBtn', title: currPage + 1 },
      {
        type: 'pageBtn pageBtnArrow',
        title: 'next',
      },
    );

  return (
    <div>
      {pages.map(({ type, title }) => (
        <Button
          key={title}
          type={type}
          fill={title}
          callback={
            typeof title == 'number' && title != currPage
              ? () => changePageHandler(title)
              : () =>
                  changePageHandler(
                    title === 'previous' ? currPage - 1 : currPage + 1,
                  )
          }
        />
      ))}
    </div>
  );
};

export default PageButtonGroup;
