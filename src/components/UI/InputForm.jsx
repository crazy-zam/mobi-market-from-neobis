import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { auth } from '../../actions/user';

const notify = (mess) =>
  toast.error(`${mess}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    closeButton: false,
  });

const InputForm = ({ callback, type = 'empty' }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstField: '',
      secondField: '',
    },
    onSubmit: (values) => {
      dispatch(auth(values.firstField, values.secondField));
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
