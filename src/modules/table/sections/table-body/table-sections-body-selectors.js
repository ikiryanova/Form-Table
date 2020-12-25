import { createSelector } from 'reselect';

const tableData = (state) => state.table.data;

export const getTableData = createSelector(tableData, (data) => data);
