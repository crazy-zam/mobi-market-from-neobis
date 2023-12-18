import React from 'react';
import './UI.css';

function Button({
  callback = () => {
    console.log('test');
  },
  type = '',
  fill,
}) {
  let text;
  text = type.includes('pageBtnArrow') ? <img src={fill} /> : fill;
  return (
    <button className={type} onClick={callback}>
      {text}
    </button>
  );
}

export default Button;
