import {
  SHOW_HIDE_SPLASH_SCREEN,
  TOGGLE_DARK_MODE
} from './general.constants';

export const setSplashScreen = (status: boolean) => ({
  type: SHOW_HIDE_SPLASH_SCREEN,
  payload: status,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});