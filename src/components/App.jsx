import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import './App.css';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <BrowserRouter>
      <div className="app">
        {!isAuth ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
