import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setInputText(value);
  }

  return (
    <div className="form">
      <input
        autoComplete="off"
        onChange={handleChange}
        value={inputText}
        name="inputName"
        type="text"
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
