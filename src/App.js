import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './features/auth/Login';
import { Register } from './features/auth/Register';
import { Logout } from './features/auth/Logout';
import { useSelector } from 'react-redux';

import './App.scss';

function App() {
  const authState = useSelector((state) => state.auth);
  const { isAuthenticated } = authState;

  if (!isAuthenticated)
    return (
      <>
        <Header isAuthenticated={isAuthenticated} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </main>
      </>
    );
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
