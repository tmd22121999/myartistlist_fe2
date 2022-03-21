// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Banner from '../../assets/topImage.png';
import QuestionTitle from './QuestionTitle';

function WouldYouRather() {
  const question = 'name';
  return (
    <div className="WouldYouRather">
      <div className="BannerDiv">
        <img src={Banner} alt="Ghibli Logo" className="GhibliLogo" />
      </div>
      <QuestionTitle Question={question} />
    </div>
  );
}

export default WouldYouRather;
