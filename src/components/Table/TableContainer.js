import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';
import { setTable, submitDataTable } from '../../redux/table-reduser';
import './table.css'
import TableBody from './TableBody/TableBody';

const TableContainer = ({ dataTable, setTable, isLoading, submitDataTable }) => {
  useEffect(() => {
    setTable();
  }, []);

  const onSubmit = (formData) => {
    console.log('submit', formData);
    submitDataTable(formData);
  };

  if (!isLoading) {
    return <Preloader />;
  }

  return (
    <div className="wrapper">
      <ul className="table">
        <li>
          <TableBody dataTable={dataTable} onSubmit={onSubmit} />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataTable: state.table.data,
  isLoading: state.table.isLoading
});

export default connect(mapStateToProps, { setTable, submitDataTable })(TableContainer);
