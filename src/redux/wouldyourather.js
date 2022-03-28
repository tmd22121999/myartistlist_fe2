const GET_QUESTION = 'GET_QUESTION';

const WYR_URL = 'https://myartistlist99.herokuapp.com/v1/wouldyourather';

const initialState = [];

export const getQuestionAction = (payload) => ({
  type: GET_QUESTION,
  payload,
});

const test = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return [...action.payload];
    default:
      return state;
  }
};

export default test;

export const getQuestionApi = () => async (dispatch) => {
  const response = await fetch(WYR_URL);
  const wyrs = await response.json();
  const formatWYRData = wyrs.map((e) => {
    const obj = {
      questionKey: e.id,
      question: e.question,
      answer1: e.answer1,
      answer2: e.answer2,
      countAnswer1: e.countAnswer1,
      countAnswer2: e.countAnswer2,
    };
    return obj;
  });
  dispatch(getQuestionAction(formatWYRData));
};
