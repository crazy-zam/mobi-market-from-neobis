import React from 'react';
import './button.module.css';
import leftArrow from './../../assets/arrow left.svg';
import rightArrow from './../../assets/arrow right.svg';

function Button({
  callback = () => {
    console.log('test');
  },
  type = '',
  fill,
}) {
  let text;
  text = type.includes('pageBtnArrow') ? (
    <img src={fill === 'previous' ? leftArrow : rightArrow} />
  ) : (
    fill
  );
  return (
    <button className={type} onClick={callback}>
      {text}
    </button>
  );
}

export default Button;
