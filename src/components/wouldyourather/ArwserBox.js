// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function ArwserBox({ arwser }) {
  return (
    <div className="ArwserBox">
      <p>{arwser}</p>
    </div>
  );
}
ArwserBox.propTypes = {
  arwser: PropTypes.string.isRequired,
};
export default ArwserBox;
