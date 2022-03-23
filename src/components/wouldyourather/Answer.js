// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import AnswerBox from './AnswerBox';

function Answer({ answer1, answer2 }) {
  return (
    <div className="Answer">
      <AnswerBox answer={answer1} pos="left" />
      <AnswerBox answer={answer2} pos="right" />
    </div>
  );
}
Answer.propTypes = {
  answer1: PropTypes.string.isRequired,
  answer2: PropTypes.string.isRequired,
};
export default Answer;
