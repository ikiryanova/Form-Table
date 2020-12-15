import _ from 'lodash';

import { SET_DATA_TABLE, SET_SUM_NUMBERS, SET_LOADING } from '../constants';
import { serverData, serverUpdateData } from '../../server/server';

export const setDataTable = (data) => ({ type: SET_DATA_TABLE, data });
export const setSumNumbers = (sum) => ({ type: SET_SUM_NUMBERS, sum });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const setTable = () => async (dispatch) => {
  dispatch(setLoading(true));
  const data = await serverData();
  dispatch(setLoading(false));
  dispatch(setDataTable(data));
  dispatch(setSumNumbers(sumNumbers(data)));
};

export const submitDataTable = (dataForm) => async (dispatch) => {
  const data = await serverUpdateData(dataForm);
  dispatch(setDataTable(data));
  dispatch(setSumNumbers(sumNumbers(data)));
};

 const sumNumbers = (data) => {
  const arrNumbers = [];
  const arrArgs = [];

  data.rows.forEach((row, index) => {
    arrNumbers.push(row.numbers);
    arrArgs.push(`row${index}`);
  });

  const result = _.zipWith(...arrNumbers, function (...arrArgs) {
    let result = 0;
    arrArgs.forEach((item) => {
      result += Number(item);
    });
    return result;
  });
  return result;
};
