import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getIsLoading } from './table-selectors';
import { setTable, submitDataTable } from './table-actions';
import { TableComponent } from './table-component';

const mapStateToProps = createStructuredSelector({
  isLoading: getIsLoading,
});

const mapDispatchToProps = { 
  setTable, 
  submitDataTable,
};

export const TableController = connect(mapStateToProps, mapDispatchToProps)(TableComponent);