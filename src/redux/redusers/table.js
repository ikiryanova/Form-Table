import { SET_DATA_TABLE, SET_SUM_NUMBERS, SET_LOADING } from '../constants';

const inicialState = {
  data: [],
  sum: [],
  isLoading: false
};

const tableReduser = (state = inicialState, action) => {
  switch (action.type) {
    case SET_DATA_TABLE:
      return { ...state, data: action.data };
    case SET_SUM_NUMBERS:
      return { ...state, sum: action.sum };
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default tableReduser;




