import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getIsLoading } from './table-selectors';
import { setTable, submitDataTable, updateSumNumbers } from './table-actions';
import { TableComponent } from './table-component';

const mapStateToProps = createStructuredSelector({
  isLoading: getIsLoading,
});

const mapDispatchToProps = { 
  setTable, 
  submitDataTable, 
  updateSumNumbers,
};

export const TableController = connect(mapStateToProps, mapDispatchToProps)(TableComponent);