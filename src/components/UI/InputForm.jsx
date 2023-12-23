import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

const InputForm = ({ type = 'empty' }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstField: '',
      secondField: '',
    },
    onSubmit: (values) => {
      dispatch(login(values.firstField, values.secondField));
    },
  });
  const helpNotation = {
    login: ['Имя пользователя', 'Пароль'],
    register: ['Имя пользователя', 'Почта'],
    passwordConfirm: ['Пароль', 'Повторите пароль'],
    empty: ['', ''],
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.values.firstField && (
        <label htmlFor="firstField" className="input-help">
          {helpNotation[type][0]}
        </label>
      )}
      <input
        id="firstField"
        name="firstField"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstField || ''}
        placeholder={helpNotation[type][0]}
      />
      {formik.values.secondField && (
        <label htmlFor="secondField" className="input-help">
          {helpNotation[type][1]}
        </label>
      )}
      <input
        id="secondField"
        name="secondField"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.secondField || ''}
        placeholder={helpNotation[type][1]}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
