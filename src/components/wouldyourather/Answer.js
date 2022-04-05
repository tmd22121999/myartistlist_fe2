// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import AnswerBox from './AnswerBox';

function Answer({
  quesID,
  answer1,
  answer2,
  CountAnswer1,
  CountAnswer2,
}) {
  const [isFlipped, flip] = useState(false);
  const [disable, setDisable] = React.useState(false);

  // PUT request using fetch with async/await
  async function updatePost(num) {
    const countAnswer1 = CountAnswer1 + (num % 2);
    const countAnswer2 = CountAnswer2 + ((num + 1) % 2);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ countAnswer1, countAnswer2 }),
    };
    console.log(requestOptions);
    console.log(quesID);
    const response = await fetch(`http://localhost:8080/v1/wouldyourather/${quesID}`, requestOptions);
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();
  }
  const flipAction = (num) => {
    flip(true);
    updatePost(num);
  };
  const percent1 = (CountAnswer1 * 100) / (CountAnswer1 + CountAnswer2);
  const percent2 = 100 - percent1;
  return (
    <div className="Answer">
      <Button disabled={disable} className="AnswerBox AnswerBoxleft" onClick={(e) => { flipAction(1, e); setDisable(true); }}>
        <AnswerBox
          answer={answer1}
          countAnswer={CountAnswer1}
          percent={percent1}
          isFlipped={isFlipped}
        />
      </Button>
      <Button disabled={disable} className="AnswerBox AnswerBoxright" onClick={(e) => { flipAction(2, e); setDisable(true); }}>
        <AnswerBox
          answer={answer2}
          countAnswer={CountAnswer2}
          percent={percent2}
          isFlipped={isFlipped}
        />
      </Button>
    </div>
  );
}
Answer.propTypes = {
  answer1: PropTypes.string.isRequired,
  answer2: PropTypes.string.isRequired,
  quesID: PropTypes.number.isRequired,
  CountAnswer1: PropTypes.number.isRequired,
  CountAnswer2: PropTypes.number.isRequired,
};
export default Answer;
