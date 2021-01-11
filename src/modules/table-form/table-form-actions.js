import { SET_DATA_TABLE, SET_LOADING } from '../../constants';
import { serverUpdateData } from '../../server';
import { getFormData } from './table-form-selectors';

export const setDataTable = (data) => ({ type: SET_DATA_TABLE, data });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const setTable = () => async (dispatch) => {
  dispatch(setLoading(true));
  const data = await serverUpdateData();
  dispatch(setLoading(false));
  dispatch(setDataTable(data));
};

export const submitDataTable = () => (dispatch, getState) => {
  const state = getState();
  const dataForm = getFormData(state);
  serverUpdateData(dataForm);
};
