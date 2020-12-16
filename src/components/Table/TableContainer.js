import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Preloader from '../../common/Preloader/Preloader';
import { setTable, setSumNumbers, submitDataTable } from '../../redux/actions/table';
import { TableBody } from './TableBody';
import { TableSum } from './TableSum';
import './table.css'

const TableContainer = ({ dataTable, setTable, isLoading, submitDataTable, sum }) => {
  useEffect(() => {
    setTable();
  }, []);

  const onSubmit = (formData) => {
    submitDataTable(formData);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="wrapper">
      <ul>
        <TableBody onSubmit={onSubmit} inicialValues={dataTable} />
        {dataTable.length !== 0 && <TableSum sum={sum} />}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataTable: state.table.data,
  sum: state.table.sum,
  isLoading: state.table.isLoading,
  serverLoading: state.table.serverLoading
});

export default connect(mapStateToProps, { setTable, setSumNumbers, submitDataTable })(TableContainer);
