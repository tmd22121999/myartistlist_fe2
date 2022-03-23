// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

function AnswerBox({ answer, pos }) {
  return (
    <Button className={`AnswerBox AnswerBox${pos}`}>
      {answer}
    </Button>
  );
}
AnswerBox.propTypes = {
  answer: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
};
export default AnswerBox;
