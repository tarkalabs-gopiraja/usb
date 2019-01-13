import React from "react";

const FieldSet = ({ label, id, fn, inputType = "text", placeholder }) => {
  let Input;

  if (inputType === "textarea") {
    Input = <textarea id={id} onChange={fn} placeholder={placeholder} />;
  } else if (inputType === "text") {
    Input = <input type={inputType} id={id} onChange={fn}  placeholder={placeholder}/>;
  } else {
    Input = <input type={inputType} id={id} onChange={fn} readOnly  placeholder={placeholder}/>;
  }

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {Input}
    </div>
  );
};

export default FieldSet;
