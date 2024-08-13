import { IProduct } from '../../interfaces/product.interface';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from './product.constants';
import { Dispatch } from 'redux';


export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await fetch('/api/products');
      const data: IProduct[] = await response.json();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error: error.message });
    }
  };
};


export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: any[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const addProduct = (product: any) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product: any) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId: number) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
