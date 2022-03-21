// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function AnswerBox({ answer }) {
  return (
    <div className="AnswerBox">
      <p>{answer}</p>
    </div>
  );
}
AnswerBox.propTypes = {
  answer: PropTypes.string.isRequired,
};
export default AnswerBox;
