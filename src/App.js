import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Join from './join';
import Login from './login';
import Main from './main';
import Layout from './layout';
import Create from './create';
import CreateGrape from './createGrape';
import HTGrape from './HTGrape';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 공통 레이아웃 없음*/}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Join />} />
          <Route path="/login" element={<Login />} />

          {/* 공통 레이아웃 적용 */}
          <Route element={<Layout />}>
            <Route path="main" element={<Main />} />
            <Route path="create" element={<Create />} />
            <Route path="createGrape" element={<CreateGrape />} />
            <Route path="HTGrape" element={<HTGrape />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
