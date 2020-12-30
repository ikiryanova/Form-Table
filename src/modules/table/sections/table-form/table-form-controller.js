import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import { validate } from './table-form-helpers';

import { getTableData, getTableResults } from './table-form-selectors';
import { TABLE_BODY } from './table-form-constants';
import { TableForm } from './table-form-component';

const mapStateToProps = createStructuredSelector({
  initialValues: getTableData,
  tableResults: getTableResults,
});

export const TableFormController = compose(
  connect(mapStateToProps),
  reduxForm({
    form: TABLE_BODY,
    validate,
    enableReinitialize: true,
  }),
)(TableForm);    