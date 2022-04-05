// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import QuestionTitle from './QuestionTitle';
import Answer from './Answer';
import '../../styles/WouldYouRather.css';

function WouldYouRather() {
  const [active, nextques] = useState(0);
  const wyrs = useSelector((state) => state.test);
  return (
    <div className="WouldYouRather">
      {
        wyrs.map((wyr, index) => (
          // eslint-disable-next-line react/jsx-key
          <div key={wyr.questionKey} className={`${active === index ? 'qactive' : 'qdisable'}`}>
            <QuestionTitle Question={wyr.question} />
            <Answer
              quesID={wyr.questionKey}
              answer1={wyr.answer1}
              answer2={wyr.answer2}
              CountAnswer1={wyr.countAnswer1}
              CountAnswer2={wyr.countAnswer2}
            />
            <Button className="NextButton" onClick={() => nextques(Math.floor(Math.random() * wyrs.length))}>
              Next Question
            </Button>
          </div>
        ))
      }
    </div>
  );
}

export default WouldYouRather;
