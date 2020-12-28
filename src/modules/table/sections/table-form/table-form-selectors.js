import { createSelector } from 'reselect';
import { get, zipWith } from 'lodash';

const getTable = (state) => state.table;
const dataTable = get(getTable, 'data', []);

export const getTableData = createSelector(dataTable, (data) => data);

const sumNumbers = (data) => {
  const arrNumbers = [];
  const arrArgs = [];

  if (!data) {
    data = {};
    data.rows = [];
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

const getDataForm = (state) => state.form;
const dataForm = get(getDataForm, 'tableBody.values', []);

export const getTableResults = createSelector(dataForm, (data) => sumNumbers(data));