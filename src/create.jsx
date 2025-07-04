import React from 'react';
/*import { useState } from 'react';
import config from './config';
import { Link } from 'react-router-dom';
*/

import { useNavigate } from 'react-router-dom';
import './create.css';

const Create = () => {
  const navigate = useNavigate();

  const GoHTGrape = () => {
    navigate('/createGrape');
    /*바꾸기*/
  };
  const GoHTWM = () => {
    navigate('/main');
    /*바꾸기*/
  };

  return (
    <div className="main-container">
      <main className="main-content">
        {/*로그인 확인해서 다르게 보여줘야 함*/}
        <div className="create-box">
          <img
            src="/create_grapes.jpg"
            alt="grape"
            className="create-grapes"
            onClick={GoHTGrape}
          ></img>
          <img
            src="/create_wm.jpg"
            alt="wm"
            className="create-wm"
            onClick={GoHTWM}
          ></img>
        </div>
      </main>
    </div>
  );
};

export default Create;
