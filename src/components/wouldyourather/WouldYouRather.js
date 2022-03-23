// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import QuestionTitle from './QuestionTitle';
import Answer from './Answer';
import '../../styles/WouldYouRather.css';

function WouldYouRather() {
  const question = 'name';
  const answer = { a1: 'a1', a2: 'a2' };
  return (
    <div className="WouldYouRather">
      <QuestionTitle Question={question} />
      <Answer answer1={answer.a1} answer2={answer.a2}>a</Answer>
    </div>
  );
}

export default WouldYouRather;
