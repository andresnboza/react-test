import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from './product.constants';

interface IProduct {
  id: string; 
  name: string;
  sku: string;
  ean: string;
}

interface ProductsState {
  loading: boolean;
  products: IProduct[];
  product: IProduct | null;
  error: string | null;
}

const products: IProduct[] = [
  { id: '1', name: 'Product A', sku: 'SKU123', ean: 'EAN1234567890' },
  { id: '2', name: 'Product B', sku: 'SKU124', ean: 'EAN1234567891' },
  { id: '3', name: 'Product C', sku: 'SKU125', ean: 'EAN1234567892' },
  { id: '4', name: 'Product D', sku: 'SKU126', ean: 'EAN1234567893' },
  { id: '5', name: 'Product E', sku: 'SKU127', ean: 'EAN1234567894' },
  { id: '6', name: 'Product F', sku: 'SKU128', ean: 'EAN1234567895' },
  { id: '7', name: 'Product G', sku: 'SKU129', ean: 'EAN1234567896' },
  { id: '8', name: 'Product H', sku: 'SKU130', ean: 'EAN1234567897' },
  { id: '9', name: 'Product I', sku: 'SKU131', ean: 'EAN1234567898' },
  { id: '10', name: 'Product J', sku: 'SKU132', ean: 'EAN1234567899' },
];

const initialState: ProductsState = {
  loading: false,
  products: products,
  error: null,
  product: null
};

const productsReducer = (state = initialState, action: any): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productsReducer;
