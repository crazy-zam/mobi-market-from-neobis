import React from 'react';

function Input(props) {
  return (
    <div>
      {props.value && <div className="input-help">{props.placeholder}</div>}
      <input
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
