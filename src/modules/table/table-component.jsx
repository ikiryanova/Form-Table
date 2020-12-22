import React from 'react'
import { connect } from 'react-redux';

import Preloader from '../../common/Preloader/Preloader';
import { setTable, submitDataTable, updateSumNumbers } from './table-actions';
import { TableBody } from './sections/body';
import './table.css'

const TableContainer = ({ setTable, isLoading, submitDataTable, updateSumNumbers, sum }) => {

  const LoadingTable = () => {
    setTable();
  }

  const onSubmit = (formData) => {
    submitDataTable(formData);
  };

  const onChange = (formData) => {
    if (formData.length !== 0) {
      updateSumNumbers(formData);
    }
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="wrapper">
      <ul>
        <TableBody onSubmit={onSubmit} onChange={onChange} />
        <button onClick={LoadingTable} className="btn-load">loading table</button>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sum: state.table.sum,
  isLoading: state.table.isLoading,
});

export const Table = connect(mapStateToProps, { setTable, submitDataTable, updateSumNumbers })(TableContainer);

