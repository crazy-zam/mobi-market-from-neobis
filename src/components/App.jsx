import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../actions/user';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import Test from './pages/Test';
import './App.css';
import Profile from './pages/Profile';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        {!isAuth ? (
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
