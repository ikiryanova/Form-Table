import { zipWith } from 'lodash';

import { SET_DATA_TABLE, SET_LOADING } from '../../constants';
import { serverUpdateData } from '../../server';
import { getTableResults } from './sections/table-form/table-form-selectors';

export const setDataTable = (data) => ({ type: SET_DATA_TABLE, data });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const setTable = () => async (dispatch, getState) => {
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

// export const updateSumNumbers = (dataForm) => async (dispatch) => {
//   const sum = sumNumbers(dataForm);
//   dispatch(setSumNumbers(sum)); // state.table.sum нигде не используется
//   const sum = getTableResults();
//   serverUpdateSum(sum);
// };

// const sumNumbers = (data) => {
//   const arrNumbers = [];
//   const arrArgs = [];

//   data.rows.forEach((row, index) => {
//     arrNumbers.push(row.numbers);
//     arrArgs.push(`row${index}`);
//   });

//   const result = zipWith(...arrNumbers, function (...arrArgs) {
//     let sum = 0;
//     arrArgs.forEach((item) => {
//       sum += Number(item ?? 0);
//     });
//     return parseFloat(sum.toFixed(5));
//   });
//   return result;
// };
