import { zipWith } from 'lodash';

import { SET_DATA_TABLE, SET_SUM_NUMBERS, SET_LOADING } from '../../constants';
import { serverUpdateData, serverUpdateSum } from '../../server';

export const setDataTable = (data) => ({ type: SET_DATA_TABLE, data });
export const setSumNumbers = (sum) => ({ type: SET_SUM_NUMBERS, sum });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const setTable = () => async (dispatch) => {
  dispatch(setLoading(true));
  const data = await serverUpdateData();
  dispatch(setLoading(false));
  dispatch(setDataTable(data));
};

export const submitDataTable = (dataForm) => (dispatch, getState) => {
  // const state = getState();
  // const isLoading = getIsLoading(state);
  serverUpdateData(dataForm);
};

export const updateSumNumbers = (dataForm) => async (dispatch) => {
  const sum = sumNumbers(dataForm);
  //dispatch(setSumNumbers(sum)); // state.table.sum нигде не используется
  serverUpdateSum(sum);
}

const sumNumbers = (data) => {
  const arrNumbers = [];
  const arrArgs = [];

  data.rows.forEach((row, index) => {
    arrNumbers.push(row.numbers);
    arrArgs.push(`row${index}`);
  });

  const result = zipWith(...arrNumbers, function (...arrArgs) {
    let sum = 0;
    arrArgs.forEach((item) => {
      sum += Number(item ?? 0);
    });
    return parseFloat(sum.toFixed(5));
  });
  return result;
};
