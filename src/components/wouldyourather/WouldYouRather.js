// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Banner from '../../assets/topImage.png';
import QuestionTitle from './QuestionTitle';
import Arwser from './Arwser';

function WouldYouRather() {
  const question = 'name';
  const arwser = { a1: 'a1', a2: 'a2' };
  return (
    <div className="WouldYouRather">
      <div className="BannerDiv">
        <img src={Banner} alt="Ghibli Logo" className="GhibliLogo" />
      </div>
      <QuestionTitle Question={question} />
      <Arwser arwser1={arwser.a1} arwser2={arwser.a2}>a</Arwser>
    </div>
  );
}

export default WouldYouRather;
