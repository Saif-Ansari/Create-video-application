import React from "react";
import "./myAccount.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  handleAccountScreenSection,
  handleMainScreen,
} from "../../actions/actions";
import { message } from "antd";
import AccountBilling from "./AccountBilling";
import PlanCards from "./PlanCards";
import Profile from "./Profile";

const MyAccount = () => {
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.accountScreenSection);
  let handleAccountScreen = () => {
    switch (currentSection) {
      case "profile":
        return <Profile />;
      case "plan":
        return <PlanCards />;
      case "billing":
        return <AccountBilling />;
      default:
        return null;
    }
  };
  return (
    <div className="myAccount">
      <nav>
        <h2>My Account</h2>
        <a
          onClick={() => {
            dispatch(handleMainScreen("login"));
            message.success("Logged out successfully");
          }}
        >
          logout
        </a>
      </nav>
      <div className="myAccount__details">
        <div className="myAccount__details--navbar">
          <span
            onClick={() => dispatch(handleAccountScreenSection("profile"))}
            className={`${currentSection === "profile" ? "active" : ""}`}
          >
            Profile
          </span>
          <span
            onClick={() => dispatch(handleAccountScreenSection("plan"))}
            className={`${currentSection === "plan" ? "active" : ""}`}
          >
            My Plan
          </span>
          <span
            onClick={() => dispatch(handleAccountScreenSection("billing"))}
            className={`${currentSection === "billing" ? "active" : ""}`}
          >
            Billing
          </span>
        </div>
        <div className="myAccount__details--section">
          {handleAccountScreen()}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
