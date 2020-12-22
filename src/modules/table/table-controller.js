import { connect } from 'react-redux';

import { setTable, submitDataTable, updateSumNumbers } from './table-actions';
import { TableComponent } from './table-component';

//TODO (kiryanova) - преобразовать в селекторы (reselect)
// const mapStateToProps = createStructuredSelector({
//     sum: getSum,
//     isLoading: getIsLoading,    
//});
const mapStateToProps = (state) => ({
  sum: state.table.sum,
  isLoading: state.table.isLoading,
});

const mapDispatchToProps = { 
  setTable, 
  submitDataTable, 
  updateSumNumbers,
};

export const TableController = connect(mapStateToProps, mapDispatchToProps)(TableComponent);