import axios from 'axios';
import {
  setAllProducts,
  setLikedProducts,
  likeProduct,
  unlikeProduct,
  setMyProducts,
} from '../reducers/productReducer';
import { API_URL } from '../config';

export function getAllProducts(token, page = 1) {
  console.log(token);
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
      const formData = new FormData();

      formData.append('name', title);
      formData.append('price', price);
      formData.append('short_description', shortDescription);
      formData.append('full_description', fullDescription);
      uploadedImages.forEach((file) => {
        console.log(file);
        formData.append('uploaded_images', file, file.name);
      });
      const product = await axios.post(`${API_URL}/products/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return product;
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

export function getLikedProducts(token, page = 1) {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${API_URL}/products/liked/`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: page, limit: 16 },
      });

      dispatch(setLikedProducts(products.data));
      return products.data;
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

      dispatch(setMyProducts(products.data));
      return products.data;
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
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProduct(id, token) {
  return async () => {
    try {
      const product = await axios.get(`${API_URL}/products/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateProduct(
  id,
  title,
  price,
  shortDescription,
  fullDescription,
  uploadedImages,
  deletedImages,
  token,
) {
  return async () => {
    try {
      const formData = new FormData();
      formData.append('name', title);
      formData.append('price', price);
      formData.append('short_description', shortDescription);
      formData.append('full_description', fullDescription);
      uploadedImages.forEach((file) => {
        formData.append('uploaded_images', file, file.name);
      });
      deletedImages.forEach((id) => {
        formData.append('deleted_images', id);
      });
      const product = await axios.put(`${API_URL}/products/${id}/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(product);
      return product;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(id, token) {
  return async () => {
    try {
      const response = await axios.delete(`${API_URL}/products/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}
