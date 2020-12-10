import { serverGetData, serverSubmitData } from '../server/server';

const SET_DATA_TABLE = 'SET_DATA_TABLE'; 

const inicialState = {
  users: [],
  isLoading: false
};

const tableReduser = (state = inicialState, action) => {
  switch (action.type) {
    case SET_DATA_TABLE: 
      return { ...state, users: action.users, isLoading: true };
    default: return state;
  }
};

export default tableReduser;

// action-creater
export const setDataTable = (users) => ({ type: SET_DATA_TABLE, users });

// redux-thunk
export const setTable = () => async(dispatch) => {
  const users = await serverGetData();
  dispatch(setDataTable(users));
}

export const submitDataTable = (dataForm) => async(dispatch) => {
  const response = await serverSubmitData(dataForm);
  dispatch(setDataTable(response));
}