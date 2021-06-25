

export const tideReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TIDES':
      return action.payload;
    default:
      return state;
  };

};