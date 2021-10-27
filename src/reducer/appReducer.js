import * as types from "../constants/actionTypes";

const initialState = {
  mainScreen: "login",
  currentUserDetails: {},
  homeScreenSection: "create",
  accountScreenSection: "profile",
  subContentCurrentScreen: "actors",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_MAIN_SCREEN:
      return {
        ...state,
        mainScreen: action.payload,
      };
    case types.SET_CURRENT_USER_DETAILS:
      return {
        ...state,
        currentUserDetails: action.payload,
      };
    case types.HANDLE_HOME_SCREEN_SECTION:
      return {
        ...state,
        homeScreenSection: action.payload,
      };
    case types.HANDLE_ACCOUNT_SCREEN_SECTION:
      return {
        ...state,
        accountScreenSection: action.payload,
      };
    case types.HANDLE_SUBCONTENT_SCREEN_SECTION:
      console.log(action.payload);
      return {
        ...state,
        subContentCurrentScreen: action.payload,
      };
    default:
      return state;
  }
};
