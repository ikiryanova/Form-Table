import { createSelector } from 'reselect';
import { get, zipWith } from 'lodash';

const getTable = (state) => get(state.table, 'data', []);

export const getTableData = createSelector(getTable, (data) => data);

const sumNumbers = (data) => {
  const arrNumbers = [];
  const arrArgs = [];

  if (!data || !data.rows) {
    return [];
  }

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

export const getDataForm = (state) => get(state.form, 'tableBody.values', []);

export const getTableResults = createSelector(getDataForm, (data) => sumNumbers(data));