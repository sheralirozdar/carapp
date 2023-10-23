import { SELECT_CAR_TYPE } from '../actions/types';

const initialState = {
  selectedCarType: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CAR_TYPE:
      return {
        ...state,
        selectedCarType: action.payload,
      };
    default:
      return state;
  }
};
