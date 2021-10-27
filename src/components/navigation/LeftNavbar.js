import React from "react";
import "./navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import { VideoCameraOutlined, PlaySquareOutlined } from "@ant-design/icons";
import userIcon from "../../assets/images/userIcon.png";
import {
  handleHomeScreenSection,
  handleAccountScreenSection,
} from "../../actions/actions";
const LeftNavbar = () => {
  const screenSection = useSelector((state) => state.homeScreenSection);
  const screen = useSelector((state) => state.mainScreen);
  const dispatch = useDispatch();
  let MoreNavbarDetails = () => (
    <div className="leftNavbar__userSection">
      <div className="leftNavbar__userSection--userActivity">
        <div
          onClick={() => dispatch(handleHomeScreenSection("create"))}
          className={`${screenSection === "create" ? "active" : ""}`}
        >
          <VideoCameraOutlined
            style={
              screenSection === "create"
                ? { color: "#3860AD" }
                : { color: "rgba(0,0,0,.1)" }
            }
          />
        </div>
        <div
          onClick={() => dispatch(handleHomeScreenSection("saved"))}
          className={`${screenSection === "saved" ? "active" : ""}`}
        >
          <PlaySquareOutlined
            style={
              screenSection === "saved"
                ? { color: "#3860AD" }
                : { color: "rgba(0,0,0,.1)" }
            }
          />
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(handleHomeScreenSection("account"));
          dispatch(handleAccountScreenSection("profile"));
        }}
        className="leftNavbar__userSection--userAccount"
      >
        <img src={userIcon} />
      </div>
    </div>
  );
  return (
    <div className="leftNavbar__wrapper">
      <img src={logo} />
      {screen === "main" && <MoreNavbarDetails />}
    </div>
  );
};

export default LeftNavbar;
