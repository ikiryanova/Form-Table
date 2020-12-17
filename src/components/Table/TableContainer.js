import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Preloader from '../../common/Preloader/Preloader';
import { setTable, submitDataTable } from '../../redux/actions/table';
import { TableBody } from './TableBody';
import { TableSum } from './TableSum';
import './table.css'

const TableContainer = ({ setTable, isLoading, submitDataTable, sum }) => {
  useEffect(() => {
    setTable();
  }, [setTable]);

  const onSubmit = (formData) => {
    submitDataTable(formData);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="wrapper">
      <ul>
        <TableBody onSubmit={onSubmit} />
        <TableSum sum={sum} />
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sum: state.table.sum,
  isLoading: state.table.isLoading,
});

export default connect(mapStateToProps, { setTable, submitDataTable })(TableContainer);
