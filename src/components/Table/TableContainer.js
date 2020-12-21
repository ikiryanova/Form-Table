import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Preloader from '../../common/Preloader/Preloader';
import { setTable, setSumNumbers, submitDataTable } from '../../redux/actions/table';
import TableSum from '../TableSum/TableSum';
import TableBody from './TableBody/TableBody';
import './table.css'
import TableInicial from './TableBody/TableInicial';

const TableContainer = ({ dataTable, setTable, isLoading, submitDataTable, sum }) => {
  // useEffect(() => {
  //   setTable();
  // }, []);

  const getTable = () => {
    setTable();
  }

  const onSubmit = (formData) => {
    submitDataTable(formData);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="wrapper">
      <button onClick={() => getTable()}>get table</button>
      <ul>
        {dataTable.length !== 0 && <TableInicial dataTable={dataTable} />}
        <TableBody onSubmit={onSubmit} />
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
