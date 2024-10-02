import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const editAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      editAlert("Dark mode is enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      editAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm editAlert={editAlert} heading="Enter the Text" mode={mode} />
    </>
  );
}

export default App;
