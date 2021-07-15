import { FETCH_PLACEHOLDER } from '../actions/types';

export const placeholderReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_PLACEHOLDER:
      return action.payload;
    default:
      return state;
  }
};
