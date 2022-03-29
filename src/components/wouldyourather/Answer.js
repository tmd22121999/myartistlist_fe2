// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import AnswerBox from './AnswerBox';

function Answer({
  answer1,
  answer2,
  countAnswer1,
  countAnswer2,
}) {
  const [isFlipped, flip] = useState(false);
  const flipAction = () => {
    flip(true);
  };
  const percent1 = (countAnswer1 * 100) / (countAnswer1 + countAnswer2);
  const percent2 = 100 - percent1;
  return (
    <div className="Answer">

      <Button className="AnswerBox AnswerBoxleft" onClick={flipAction}>
        <AnswerBox
          answer={answer1}
          countAnswer={countAnswer1}
          percent={percent1}
          isFlipped={isFlipped}
        />
      </Button>
      <Button className="AnswerBox AnswerBoxright" onClick={flipAction}>
        <AnswerBox
          answer={answer2}
          countAnswer={countAnswer2}
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
  countAnswer1: PropTypes.number.isRequired,
  countAnswer2: PropTypes.number.isRequired,
};
export default Answer;
