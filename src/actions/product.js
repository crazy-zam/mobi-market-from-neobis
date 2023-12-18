import axios from 'axios';
import { setAllProducts } from '../reducers/productReducer';
import { API_URL } from '../config';

export function getAllProducts(token, page = 1) {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${API_URL}/products/`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: page, limit: 32 },
      });

      dispatch(setAllProducts(products.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function productLike(token, product) {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${API_URL}/products/like/${product}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(products.data);
      dispatch(setAllProducts(products.data));
    } catch (error) {
      console.log(error);
    }
  };
}
