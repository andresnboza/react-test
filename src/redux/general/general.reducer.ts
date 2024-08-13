import {
  SHOW_HIDE_SPLASH_SCREEN
} from './general.constants';

interface IGeneralState {
  splashScreenStatus: boolean;
}

const initialState: IGeneralState = {
  splashScreenStatus: false,
};

const productsReducer = (state = initialState, action: any): IGeneralState => {
  switch (action.type) {
    case SHOW_HIDE_SPLASH_SCREEN:
      return {
        ...state,
        splashScreenStatus: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
