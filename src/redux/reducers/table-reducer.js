import { SET_DATA_TABLE, SET_LOADING } from '../../constants';

const initialState = {
  data: [],
  isLoading: false,
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TABLE:
      return { ...state, data: action.data };
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
