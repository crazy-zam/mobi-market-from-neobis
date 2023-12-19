import React, { useState } from 'react';
import PhoneInput from './PhoneInput';
import phoneImg from './../../assets/phone icon.svg';

const FormAcceptPhone = () => {
  const [phone, setPhone] = useState('');
  const handleInput = ({ target: { value } }) => setPhone(value);
  return (
    <div className="form-accept-phone">
      <div className="title"> Введите номер телефона</div>

      <img className="phone-img" src={phoneImg} />
      <label htmlFor="">Введите номер телефона</label>
      <label htmlFor="">Мы отправим вам СМС с кодом подтверждения</label>
      <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
      <button>Далее</button>
    </div>
  );
};

export default FormAcceptPhone;
