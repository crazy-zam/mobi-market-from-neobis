import InputMask from 'react-input-mask';

const PhoneInput = ({ value, onChange }) => {
  return (
    <InputMask
      className="phone-input"
      mask="0 (999) 999 999"
      maskChar={'0'}
      value={value}
      onChange={onChange}
    ></InputMask>
  );
};

export default PhoneInput;
