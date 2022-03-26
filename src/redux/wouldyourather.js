const GET_FILMS1 = 'GET_FILMS1';

const FILMS_URL = 'https://myartistlist99.herokuapp.com/v1/artist';

const initialState = [];

export const getFilmsAction = (payload) => ({
  type: GET_FILMS1,
  payload,
});

const test = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS1:
      return [...action.payload];
    default:
      return state;
  }
};

export default test;

export const getFilmsApi1 = () => async (dispatch) => {
  const response = await fetch(FILMS_URL);
  const films = await response.json();
  const formatFilmData = films.map((e) => {
    const obj = {
      filmKey: e.id,
      title: e.name,
      originalTitle: e.original_title,
      romanisedTitle: e.original_title_romanised,
      image: e.other_links,
      release: e.score,
    };
    return obj;
  });
  dispatch(getFilmsAction(formatFilmData));
};
