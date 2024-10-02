import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      editAlert("Light mode is enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm editAlert={editAlert} heading="Enter the Text" mode={mode} />
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm editAlert={editAlert} heading="Enter the Text" mode={mode} />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
