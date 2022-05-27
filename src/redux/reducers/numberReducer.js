const INITIAL_STATE = 0;

const numberReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INC_NUMBER':
      return state + action.payload;
    case 'DEC_NUMBER':
      return state - action.payload;
    default:
      return state;
  }
};

export default numberReducer;
