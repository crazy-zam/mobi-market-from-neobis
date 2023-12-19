import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { getAllProducts } from '../../actions/product';

import leftArrow from './../../assets/arrow left.svg';
import rightArrow from './../../assets/arrow right.svg';

const PageButtonGroup = () => {
  const user = useSelector((state) => state.user.currentUser);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const changePageHandler = (page) => {
    dispatch(getAllProducts(user.access, page));
  };

  const currPage = 1;
  const pages = new Array();

  if (!!products.previous)
    pages.push(
      { type: 'pageBtn pageBtnArrow', title: leftArrow },
      { type: 'pageBtn', title: currPage - 1 },
    );
  pages.push({ type: 'pageBtnCurrent pageBtn', title: currPage });
  if (!!products.next)
    pages.push(
      { type: 'pageBtn', title: currPage + 1 },
      {
        type: 'pageBtn pageBtnArrow',
        title: rightArrow,
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
              : () => console.log(title)
          }
        />
      ))}
    </div>
  );
};

export default PageButtonGroup;
