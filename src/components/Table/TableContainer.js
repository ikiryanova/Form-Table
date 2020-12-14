import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';
import { setTable, submitDataTable } from '../../redux/table-reduser';
import TableSum from '../TableSum/TableSum';
import './table.css'
import TableBody from './TableBody/TableBody';

const TableContainer = ({ dataTable, setTable, isLoading, submitDataTable, sum, serverLoading }) => {
  useEffect(() => {
    setTable();
  }, []);

  const onSubmit = (formData) => {
    submitDataTable(formData);
  };

  if (!isLoading) {
    return <Preloader />;
  }

  return (
    <div className="wrapper">
      <ul className="table-block">
        <TableBody onSubmit={onSubmit} inicialValues={dataTable} />
        {serverLoading && <div className="loading">Loading...</div>}
        {sum.length !== 0 && <TableSum sum={sum} />}
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

export default connect(mapStateToProps, { setTable, submitDataTable })(TableContainer);
