// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ArwserBox from './ArwserBox';

function Arwser({ arwser1, arwser2 }) {
  return (
    <div className="Arwser">
      <ArwserBox arwser={arwser1} />
      <ArwserBox arwser={arwser2} />
    </div>
  );
}
Arwser.propTypes = {
  arwser1: PropTypes.string.isRequired,
  arwser2: PropTypes.string.isRequired,
};
export default Arwser;
