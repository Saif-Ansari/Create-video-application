import React from "react";
import MyAccount from "..//components/accountDetails/MyAccount";
import { useSelector } from "react-redux";
import SavedVideos from "../components/savedVideos/SavedVideos";
import MainScreen from "../components/homeScreen/MainScreen";

const MainContainer = () => {
  const currentHomeScreen = useSelector((state) => state.homeScreenSection);
  let handleHomeScreens = () => {
    switch (currentHomeScreen) {
      case "create":
        return <MainScreen />;
      case "saved":
        return <SavedVideos />;
      case "account":
        return <MyAccount />;
      default:
        return null;
    }
  };
  return <>{handleHomeScreens()}</>;
};

export default MainContainer;
