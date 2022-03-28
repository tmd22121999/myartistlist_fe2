// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionTitle from './QuestionTitle';
import Answer from './Answer';
import '../../styles/WouldYouRather.css';

function WouldYouRather() {
  const wyrs = useSelector((state) => state.test);
  wyrs.sort(() => 0.5 - Math.random());
  const wyr = wyrs[0];
  return (
    <div className="WouldYouRather">
      <QuestionTitle Question={wyr.question} />
      <Answer answer1={wyr.answer1} answer2={wyr.answer2}>a</Answer>
    </div>
  );
}

export default WouldYouRather;
