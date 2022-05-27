const INITIAL_STATE = [];
const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LİST':
      return [...state, action.payload];
    default:
      return state;
  }
};
export default listReducer;
