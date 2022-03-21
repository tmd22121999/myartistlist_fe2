// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function QuestionTitle({
  Question,
}) {
  return (
    <div className="QuestionTitle">
      <h1>{Question}</h1>
    </div>
  );
}

QuestionTitle.propTypes = {
  Question: PropTypes.string.isRequired,
};
export default QuestionTitle;
