const increaseNumber = payload => ({
  type: 'INC_NUMBER',
  payload,
});

const decreaseNumber = payload => ({
  type: 'DEC_NUMBER',
  payload,
});

export {increaseNumber, decreaseNumber};
