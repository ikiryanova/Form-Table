import { createSelector } from 'reselect';
import { get, zipWith } from 'lodash';

import { TABLE_BODY } from './table-form-constants';

const table = (state) => state.table;
export const getIsLoading = createSelector(table, (table) => get(table, 'isLoading', []));
export const getTableData = createSelector(table, (table) => get(table, 'data', []));

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

const form = (state) => state.form;
export const getFormData = createSelector(form, (form) => get(form, `${TABLE_BODY}.values`, []));
export const getTableResults = createSelector(form, (form) => sumNumbers(get(form, `${TABLE_BODY}.values`, [])));
