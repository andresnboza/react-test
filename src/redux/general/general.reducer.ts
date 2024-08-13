import {
  SHOW_HIDE_SPLASH_SCREEN,
  TOGGLE_DARK_MODE
} from './general.constants';

interface IGeneralState {
  splashScreenStatus: boolean;
  darkMode: boolean;
}

const initialState: IGeneralState = {
  splashScreenStatus: true,
  darkMode: false,
};

const productsReducer = (state = initialState, action: any): IGeneralState => {
  switch (action.type) {
    case SHOW_HIDE_SPLASH_SCREEN:
      return {
        ...state,
        splashScreenStatus: action.payload,
      };
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    default:
      return state;
  }
};

export default productsReducer;
