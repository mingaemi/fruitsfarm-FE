import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import config from './config';
import './layout.css';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(config.serverURL + '/api/v1/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'applicatin/json' },
        credentials: 'include',
      });

      if (!response.ok) {
        console.error('로그아웃 실패');
        throw new Error('로그아웃 실패');
      }

      alert('로그아웃 되었습니다.');
      navigate('/login');
    } catch (error) {
      console.log('오류가 발생했습니다.', error);
    }
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <Link to="/main">
            <img className="logo-img" src="h_logo.png" alt="h_logo" />
          </Link>
        </div>
        <div className="nav-buttons">
          <Link to="/create" className="nav-button">
            <button className="nav-button">생성</button>
          </Link>
          <button onClick={handleLogout} className="nav-button">
            로그아웃
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
