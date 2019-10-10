import React from "react";

export function Label(props) {
  return (
    <label {...props}>
      <div className="search-label-logo"></div>
    </label>
  );
}

export function Input(props) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}