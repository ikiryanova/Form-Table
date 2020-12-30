import { SET_DATA_TABLE, SET_LOADING } from '../../constants';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

export const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATA_TABLE:
      return { ...state, data: action.data };
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
