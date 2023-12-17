import axios from 'axios';
import { setAllProducts } from '../reducers/productReducer';
import { API_URL } from '../config';

export function getAllProducts(token) {
  return async (dispatch) => {
    try {
      console.log(token);
      const products = await axios.get(`${API_URL}/products/`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: 1, limit: 32 },
      });
      console.log(products.data.results);
      dispatch(setAllProducts(products.data.results));
    } catch (error) {
      console.log(error);
    }
  };
}
