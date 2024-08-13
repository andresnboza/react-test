import { AppState } from '../store';

export const selectSplashScreenStatus = (state: AppState) => state.general.splashScreenStatus;
