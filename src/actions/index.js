import { SELECT_CAR_TYPE } from './types';

export const selectCarType = (carType) => {
  return {
    type: SELECT_CAR_TYPE,
    payload: carType,
  };
};
