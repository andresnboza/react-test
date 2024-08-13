import { AppState } from '../store';

export const selectProducts = (state: AppState) => state.products.products;
export const selectProductById = (state: AppState, productId: number) => state.products.products.find(product => product.id === productId);
export const selectLoading = (state: AppState) => state.products.loading;
export const selectError = (state: AppState) => state.products.error;
