import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./mainScreen.scss";
import "./subContentComponents/subContent.scss";
import CurrentActor from "./CurrentActor";
import ImageCards from "./subContentComponents/ImageCards";
import { actorsData, backgroundData } from "../../constants/subContentData";
import { handleSubContentScreenSection } from "../../actions/actions";
import VoiceCards from "./subContentComponents/VoiceCards";
import Alignment from "./subContentComponents/Alignment";
const MainScreen = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("Say Hi to my Customers");
  const activeSubTab = useSelector((state) => state.subContentCurrentScreen);
  const handleSubContentComponent = () => {
    switch (activeSubTab) {
      case "actors":
        return <ImageCards data={actorsData} />;
      case "voice":
        return <VoiceCards />;
      case "align":
        return <Alignment />;
      case "background":
        return <ImageCards data={backgroundData} />;
      default:
        return null;
    }
  };
  return (
    <div className="mainScreenWrapper">
      <nav>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
        />
        <div className="btnWrap">
          <Button
            style={{
              backgroundColor: "#f1f1f1",
              color: "#999999",
              marginTop: "1rem",
              width: "120px",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#46B13D",
              color: "#fff",
              marginTop: "1rem",
              width: "120px",
            }}
          >
            Save
          </Button>
        </div>
      </nav>
      <div className="mainScreenWrapper__mainContent">
        <CurrentActor />
        <div className="mainScreenWrapper__mainContent--subContent">
          <div className="subContentNav">
            <span
              onClick={() => dispatch(handleSubContentScreenSection("actors"))}
              className={`${activeSubTab === "actors" ? "activetab" : ""}`}
            >
              Actor
            </span>
            <span
              onClick={() => dispatch(handleSubContentScreenSection("voice"))}
              className={`${activeSubTab === "voice" ? "activetab" : ""}`}
            >
              Voice
            </span>
            <span
              onClick={() => dispatch(handleSubContentScreenSection("align"))}
              className={`${activeSubTab === "align" ? "activetab" : ""}`}
            >
              Alignment
            </span>
            <span
              onClick={() =>
                dispatch(handleSubContentScreenSection("background"))
              }
              className={`${activeSubTab === "background" ? "activetab" : ""}`}
            >
              Background
            </span>
          </div>
          <div className="subContentWrapper">{handleSubContentComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
