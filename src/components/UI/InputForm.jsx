import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, checkUser, registration } from '../../actions/user';
import { setNewUser } from '../../reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import styles from './inputForm.module.css';
import { useEffect, useState } from 'react';
import hideIcon from './../../assets/eye open.svg';
import showIcon from './../../assets/eye closed.svg';
import phoneIcon from './../../assets/phone icon.svg';
import { showPhonePopup } from '../../reducers/appReducer';

const InputForm = ({ type = 'empty', setConfigurePass }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showFirstField, setShowFirstField] = useState(false);
  const [showSecondField, setShowSecondField] = useState(false);
  const newUser = useSelector((state) => state.user.newUser);
  const formik = useFormik({
    initialValues: {
      firstField: '',
      secondField: '',
    },
    onSubmit: (values) => {
      if (type === 'login') {
        dispatch(login(values.firstField, values.secondField));
      } else if (type === 'register') {
        dispatch(
          checkUser(values.firstField, values.secondField, setConfigurePass),
        );
        dispatch(setNewUser(values.firstField, values.secondField));
        values.firstField = '';
        values.secondField = '';
      } else if (type === 'passwordConfirm') {
        dispatch(
          registration(
            newUser.username,
            newUser.email,
            values.firstField,
            values.secondField,
          ),
        );
        setTimeout(() => {
          navigate('/login');
        }, 500);
        navigate('/login');
      }
    },
  });
  const helpNotation = {
    login: [
      ['Имя пользователя', 'Пароль'],
      [true, false],
    ],
    register: [
      ['Имя пользователя', 'Почта'],
      [true, true],
    ],
    passwordConfirm: [
      ['Пароль', 'Повторите пароль'],
      [false, false],
    ],
    empty: ['', ''],
  };
  useEffect(() => {
    setShowFirstField(helpNotation[type][1][0]);
    setShowSecondField(helpNotation[type][1][1]);
  }, []);

  return (
    <form onSubmit={formik.handleSubmit} className={styles.inputForm}>
      {formik.values.firstField && (
        <label
          htmlFor="firstField"
          className={styles.label}
          id={styles.firstLabel}
        >
          {helpNotation[type][0][0]}
        </label>
      )}
      <div className={styles.field} id={styles.firstField}>
        <input
          className={styles.input}
          id="firstField"
          name="firstField"
          type={showFirstField ? 'text' : 'password'}
          onChange={formik.handleChange}
          value={formik.values.firstField || ''}
          placeholder={helpNotation[type][0][0]}
        />
        {!helpNotation[type][1][0] && (
          <img
            src={showFirstField ? hideIcon : showIcon}
            onClick={() => setShowFirstField(!showFirstField)}
          />
        )}
      </div>

      {formik.values.secondField && (
        <label
          htmlFor="secondField"
          className={styles.label}
          id={styles.secondLabel}
        >
          {helpNotation[type][0][1]}
        </label>
      )}
      <div className={styles.field} id={styles.secondField}>
        <input
          className={styles.input}
          id="secondField"
          name="secondField"
          type={showSecondField ? 'text' : 'password'}
          onChange={formik.handleChange}
          value={formik.values.secondField || ''}
          placeholder={helpNotation[type][0][1]}
        />
        {!helpNotation[type][1][1] && (
          <img
            src={showSecondField ? hideIcon : showIcon}
            onClick={() => setShowSecondField(!showSecondField)}
          />
        )}
      </div>
      <div
        className={styles.forgotPassword}
        onClick={() => {
          dispatch(
            showPhonePopup({
              isVisible: true,
              img: phoneIcon,
              title: 'Введите номер телефона',
              firstBtn: 'Далее',
              secondBtn: false,
              type: 'phone',
            }),
          );
        }}
      >
        Забыли пароль?
      </div>
      <button
        className={styles.button}
        type="submit"
        disabled={!formik.values.firstField || !formik.values.secondField}
      >
        Войти
      </button>
    </form>
  );
};

export default InputForm;
