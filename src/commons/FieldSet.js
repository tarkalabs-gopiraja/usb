import React from "react";

const FieldSet = ({ label, id, fn, inputType = "text" }) => {
  let Input;

  if (inputType === "textarea") {
    Input = <textarea id={id} onChange={fn} />;
  } else if (inputType === "text") {
    Input = <input type={inputType} id={id} onChange={fn} />;
  } else {
    Input = <input type={inputType} id={id} onChange={fn} readOnly />;
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {Input}
    </div>
  );
};

export default FieldSet;
