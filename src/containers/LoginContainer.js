import React from "react";
import { useSelector } from "react-redux";
import LeftNavbar from "../components/navigation/LeftNavbar";
import Login from "../components/loginComponents/Login";
import SignUp from "../components/loginComponents/SignUp";
const LoginContainer = () => {
  const screen = useSelector((state) => state.mainScreen);
  let handleComponent = () => {
    switch (screen) {
      case "login":
        return <Login />;
      case "signUp":
        return <SignUp />;
      default:
        return null;
    }
  };
  return handleComponent();
};

export default LoginContainer;
