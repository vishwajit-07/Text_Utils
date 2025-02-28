import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [color, setColor] = useState(""); // Default color is black

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.alert("Your text is converted into UPPERCASE.","success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.alert("Your text is converted into LOWERCASE.","success");
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.alert("Textbox is cleared! ","success");
  };

  const handleColor = (event) => {
    setColor(event.target.value); // Update color state based on user selection
    props.alert(`Text colour updated!`,"success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    props.alert(`Your text is copied!`,"success");
  };
  const handleExtraSPace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert(`Extra spaces are removed!`,"success");
  }

  return (
    <>
      <div className="mb-3" style={{ color : props.mode === "light" ? "black" : "white" }}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={onChangeText}
          placeholder="Enter some text here..."
          style={{ color: color, backgroundColor : props.mode === "light" ? "white" : "#636290" }} // Apply color dynamically
        ></textarea>

        <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary my-3 mx-3" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleExtraSPace}>
          Remove extra spaces
        </button>

        <br />
        <h2 className="mx-2">Change colour of text</h2>
        <input
          className="mx-3 my-1"
          type="color"
          value={color}
          id="myColor"
          onChange={handleColor} // Add onChange event for color input
        />
      </div>
      <div className="container" style={{ color : props.mode === "light" ? "black" : "white" }}>
        <h2>Summary</h2>
        <p className="form-control my-3" style={{ backgroundColor : props.mode === "light" ? "white" : "#636290",color : props.mode === "light" ? "black" : "white" }}>
          Total words :{" "}
          <b style={{ color: "green" }}>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word).length
            }
          </b>
          <br /> Total characters :{" "}
          <b style={{ color: "red" }}>{text.length}</b>
          <br />
          Computer reading speed is :{" "}
          <b style={{ color: "blue" }}>
            {0.008 *
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word).length}
          </b>
        </p>
        <h2>Preview</h2>
        <p className="form-control" style={{ color: color, backgroundColor: props.mode === "light" ? "white":"#636290" }}>
          {text.length > 0 ? text : "Enter something in above textbox to preview"}
        </p>
      </div>
    </>
  );
}
