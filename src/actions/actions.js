import * as types from "../constants/actionTypes";

export const handleMainScreen = (data) => ({
  type: types.HANDLE_MAIN_SCREEN,
  payload: data,
});

export const setCurrentUserDetails = (data) => ({
  type: types.SET_CURRENT_USER_DETAILS,
  payload: data,
});

export const handleHomeScreenSection = (data) => ({
  type: types.HANDLE_HOME_SCREEN_SECTION,
  payload: data,
});

export const handleAccountScreenSection = (data) => ({
  type: types.HANDLE_ACCOUNT_SCREEN_SECTION,
  payload: data,
});

export const handleSubContentScreenSection = (data) => ({
  type: types.HANDLE_SUBCONTENT_SCREEN_SECTION,
  payload: data,
});
