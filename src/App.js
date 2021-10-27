import React from "react";
import { useSelector } from "react-redux";
import LoginContainer from "./containers/LoginContainer";
import LeftNavbar from "./components/navigation/LeftNavbar";
import MainContainer from "./containers/MainContainer";

function App() {
  const screen = useSelector((state) => state.mainScreen);

  return (
    <div className="App">
      <LeftNavbar />
      <div className="containers__wrap">
        {screen === "main" ? <MainContainer /> : <LoginContainer />}
      </div>
    </div>
  );
}

export default App;
