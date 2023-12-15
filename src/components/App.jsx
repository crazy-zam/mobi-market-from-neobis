import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import './App.css';

function App() {
  return (
    // <Login />
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
