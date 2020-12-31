import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { getIsLoading, getTableData, getTableResults } from './table-form-selectors';
import { setTable, submitDataTable } from './table-form-actions';
import { TableFormComponent } from './table-form-component';
import { TABLE_BODY } from './table-form-constants';
import { reduxForm } from 'redux-form';
import { validate } from './table-form-helpers';

const mapStateToProps = createStructuredSelector({
  isLoading: getIsLoading,
  initialValues: getTableData,
  tableResults: getTableResults,
});

const mapDispatchToProps = {
  setTable,
  onSubmit: submitDataTable,
};

export const TableFormController = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: TABLE_BODY,
    validate,
    enableReinitialize: true,
  }),
)(TableFormComponent);    
