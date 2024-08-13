import {
  SHOW_HIDE_SPLASH_SCREEN
} from './general.constants';

export const setSplashScreen = (status: boolean) => ({
  type: SHOW_HIDE_SPLASH_SCREEN,
  payload: status,
});
