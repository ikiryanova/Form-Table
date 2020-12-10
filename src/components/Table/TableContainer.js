import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';
import { setTable } from '../../redux/table-reduser';
import TableHeader from './TableHeader';
import './table.css'
import TableBody from './TableBody';

const TableContainer = ({ dataTable, setTable, isLoading }) => {

  useEffect(() => {
    setTable();
  }, [])

  if (!isLoading) {
    return <Preloader />;
  }

  //const tableHeader = Object.keys(dataTable[0].numbers); // массив названий столбцов 

  return (
    <div className="wrapper">
      <table className="table">
        {/* <TableHeader items={tableHeader} /> */}
        <tbody>
          <TableBody />
        </tbody>
        {/* <tfoot>
          <tr>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
            <th>Sum</th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataTable: state.table.data,
  isLoading: state.table.isLoading
});

export default connect(mapStateToProps, { setTable })(TableContainer);
