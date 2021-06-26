export const mockWeatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_MOCK_WEATHER':
      return action.payload;
    default:
      return state;
  };
};
