// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionTitle from './QuestionTitle';
import Answer from './Answer';
import FilmCard from '../FilmCard';
import '../../styles/WouldYouRather.css';

function WouldYouRather() {
  const films = useSelector((state) => state.test);
  const question = 'name';
  const answer = { a1: 'a1', a2: 'a2' };
  return (
    <div className="WouldYouRather">
      <QuestionTitle Question={question} />
      <Answer answer1={answer.a1} answer2={answer.a2}>a</Answer>
      <div className="FilmsContainer">
        {
          films.map((film) => (
            <FilmCard
              key={film.filmKey}
              filmKey={film.filmKey}
              title={film.title}
              release={film.release}
              image={film.image}
            />
          ))
        }
      </div>
    </div>
  );
}

export default WouldYouRather;
