import axios from 'axios';
import {
  setAllProducts,
  setLikedProducts,
  likeProduct,
  unlikeProduct,
} from '../reducers/productReducer';
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

export function getLikedProducts(token, page = 1) {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${API_URL}/products/liked/`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: page, limit: 16 },
      });

      dispatch(setLikedProducts(products.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getMyProducts(token, page = 1) {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${API_URL}/products/my-products/`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: page, limit: 16 },
      });

      dispatch(setLikedProducts(products.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function productLike(token, product) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/products/like/${product}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(response);
      dispatch(likeProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
}

export function productUnlike(token, product) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${API_URL}/products/unlike/${product}/`,

        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(response);
      dispatch(unlikeProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addProduct(
  title,
  price,
  shortDescription,
  fullDescription,
  uploadedImages,
  token,
) {
  return async () => {
    try {
      const product = await axios.post(
        `${API_URL}/products/`,
        {
          name: title,
          price: price,
          short_description: shortDescription,
          full_description: fullDescription,
          uploaded_images: uploadedImages,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProduct(id, token) {
  return async () => {
    const product = await axios.get(
      `${API_URL}/products/${id}/`,

      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateProduct() {
  return async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct() {
  return async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
}
