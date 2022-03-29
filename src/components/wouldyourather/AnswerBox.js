// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ReactCardFlip from 'react-card-flip';

function AnswerBox({
  answer,
  countAnswer,
  percent,
  isFlipped,
}) {
  return (
    <ReactCardFlip
      flipDirection="vertical"
      isFlipped={isFlipped}
    >
      <div>
        <div>{answer}</div>
      </div>
      <div>
        <div>
          {percent}
          %
        </div>
        <div>
          với
          {` ${countAnswer} `}
          người đồng ý chọn
          <br />
          {answer}
        </div>
      </div>
    </ReactCardFlip>
  );
}
AnswerBox.propTypes = {
  answer: PropTypes.string.isRequired,
  countAnswer: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  isFlipped: PropTypes.bool.isRequired,
};
export default AnswerBox;
