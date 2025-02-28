import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#636290" : "white",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-4">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Welcome to TextUtils!
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a powerful yet simple tool designed to help you with
              all your text manipulation needs. Whether you're a writer, editor,
              developer, or just someone who loves working with text, TextUtils
              provides a wide range of features to make your life easier.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              What We Offer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Formatting: Quickly convert text to uppercase, lowercase, or
              sentence case. Word and Character Count: Instantly count words,
              characters, sentences, or paragraphs in your text. Remove Extra
              Spaces: Clean up your text by removing unnecessary spaces. Text
              Analysis: Get insights into the readability, sentiment, and
              complexity of your text. Conversion Tools: Convert text to Morse
              code, binary, or other formats. Secure Processing: Your data is
              processed securely and never stored or shared.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              At TextUtils, we aim to simplify text processing for everyone.
              Whether you're working on a project, preparing a document, or just
              playing around with text, our tools are here to save you time and
              effort.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
