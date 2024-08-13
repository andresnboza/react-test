import { AppState } from '../store';

export const selectSplashScreenStatus = (state: AppState) => state.general.splashScreenStatus;
export const selectDarkMode = (state: AppState) => state.general.darkMode;