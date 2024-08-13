import { configureStore } from '@reduxjs/toolkit';

// reducers
import productsReducer from './product/product.reducer';
import generalReducer from './general/general.reducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    general: generalReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
