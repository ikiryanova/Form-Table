import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import { validate } from './table-sections-body-helpers';

import { getTableData } from './table-sections-body-selectors';
import { tableBody } from './table-sections-body-constants';
import { TableBody } from './table-sections-body-component';


const mapStateToProps = createStructuredSelector({
  initialValues: getTableData,
});

export const TableBodyController = compose(
  connect(mapStateToProps),
  reduxForm({
    form: tableBody,
    validate,
    enableReinitialize: true,
  }),
)(TableBody);    
 