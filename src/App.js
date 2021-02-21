import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import SigninSignupScreen from "./screens/signin-signup-screen.component";

function App() {
  return (
    <div className="App">
      <Header />
      <SigninSignupScreen />
    </div>
  );
}

export default App;
