import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.editAlert("Text set to Uppercase", "success");
  };
  const handleOnChange = (e) => { setText(e.target.value) }
  const handleDownClick = () => {
    setText(text.toLowerCase())
    props.editAlert("Text set to Lowercase", "success");
  }
  const handleClearClick = () => {
    setText("")
    props.editAlert("All text cleared", "danger");
  }
  const handleCopyClick = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.editAlert("Text copied to clipboard", "info");
  }

  return (
    <div className="container my-4" style={{ background: props.mode === 'dark' ? "#403f3f" : "white", color: props.mode === "dark" ? "white" : "black", }}>
      <div className="form-floating">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{ background: props.mode === 'dark' ? "#403f3f" : "white", color: props.mode === "dark" ? "white" : "black" }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
        <div className="my-3">
          <h5>Your Text Summary</h5>
          <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} word and {text.length} characters</p>
        </div>
        <div className="my-3">
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}