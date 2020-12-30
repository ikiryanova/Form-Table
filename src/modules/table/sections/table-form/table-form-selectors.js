import { createSelector } from 'reselect';
import { get, zipWith } from 'lodash';

import { TABLE_BODY } from './table-form-constants';

const getTable = (state) => state.table;

export const getTableData = createSelector(getTable, (table) => get(table, 'data', []));

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

const getForm = (state) => state.form;

export const getFormData = createSelector(getForm, (form) => get(form, `${TABLE_BODY}.values`, []));

export const getTableResults = createSelector(getForm, (form) => sumNumbers(get(form, `${TABLE_BODY}.values`, [])));
