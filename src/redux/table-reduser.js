import { serverData } from '../server/server';
import _ from 'lodash';

const SET_DATA_TABLE = 'SET_DATA_TABLE'; 
const SET_SUM_NUMBERS = 'SET_SUM_NUMBERS';
const SERVER_LOADING = 'SERVER__LOADING';

const inicialState = {
  data: {},
  sum: [],
  isLoading: false,
  serverLoading: false
};

const tableReduser = (state = inicialState, action) => {
  switch (action.type) {
    case SET_DATA_TABLE:
      return { ...state, data: action.data, isLoading: true };
    case SET_SUM_NUMBERS:
      return { ...state, sum: action.sum };
    case SERVER_LOADING:
      return { ...state, serverLoading: action.serverLoading };
    default:
      return state;
  }
};

export default tableReduser;

// action-creater
export const setDataTable = (data) => ({ type: SET_DATA_TABLE, data });
export const setSumNumbers = (sum) => ({ type: SET_SUM_NUMBERS, sum });
export const serverLoading = (serverLoading) => ({ type: SERVER_LOADING, serverLoading }); 

// redux-thunk
export const setTable = () => async(dispatch) => {
  const data = await serverData();
  dispatch(setDataTable(data));
}

export const submitDataTable = (dataForm) => async(dispatch) => {
  dispatch(serverLoading(true));
  const response = await serverData(dataForm);
  dispatch(setDataTable(response));
  dispatch(setSumNumbers(sumNumbers(response)));
  dispatch(serverLoading(false));
}

// sum of numbers
const sumNumbers = (data) => {
  const arrNumbers = [];
  const arrArgs = [];

  data.users.forEach((user, index) => {
    arrNumbers.push(user.numbers);
    arrArgs.push(`user${index}`);
  });

  const result = _.zipWith(...arrNumbers, function(...arrArgs) {
    let result = 0;
    arrArgs.forEach(item => {
      result += Number(item);
    });
    return result;
  });
  return result;
};


