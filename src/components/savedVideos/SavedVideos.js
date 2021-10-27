import React from "react";
import SubjectButton from "./Button";
import { Button } from "antd";
import "./savedVideos.scss";
const SavedVideos = () => {
  return (
    <div className="savedVideoWrap">
      <nav>
        <h2>My Account</h2>
        <Button
          style={{
            backgroundColor: "#46B13D",
            color: "#fff",
            marginTop: "1rem",
            width: "200px",
          }}
        >
          Create New
        </Button>
      </nav>
      <div className="savedVideoWrap__content">
        <img
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          }
          width="360px"
        />
        <h4>Say Hi to users!</h4>
        <div className="savedVideoWrap__content--subjectsWrap">
          {["Email", "Marketing", "Greeting"].map((data) => (
            <SubjectButton title={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedVideos;
