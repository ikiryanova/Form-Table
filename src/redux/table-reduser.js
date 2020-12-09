import { server } from "../server/server";

const SET_DATA_TABLE = 'SET_DATA_TABLE'; 

const inicialState = {
  data: [],
  isLoading: false
};

const tableReduser = (state = inicialState, action) => {
  switch (action.type) {
    case SET_DATA_TABLE: 
      return { ...state, data: action.data, isLoading: true };
    default: return state;
  }
};

export default tableReduser;

export const setDataTable = (data) => ({ type: SET_DATA_TABLE, data });

export const setTable = () => async(dispatch) => {
  const data = await server();
  dispatch(setDataTable(data));
}
