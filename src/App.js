import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about.js";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000327";
      showAlert("Dark mode is activated", "success");
      document.title = "Text Utils-Dark Mode";
      // setInterval(() => {
      //   document.title="Upgrade to premium";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Text Utils Now!";
      // }, 1200);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is activated", "success");
      document.title = "Text Utils-Light Mode";
      // setInterval(() => {
      //   document.title="Upgrade to premium";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Text Utils Now!";
      // }, 1500);
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const capitalize = (word) => {
    const text = word.toLowerCase();
    return text.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      <Router>
        <Navbar title="Text Utilis" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} capital={capitalize} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  alert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
