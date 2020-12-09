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
  }, [dataTable])

  if (!isLoading) {
    return <Preloader />;
  }

  const tableHeader = Object.keys(dataTable[0].numbers);

  return (
    <div className="wrapper">
      <table className="table">
        <TableHeader items={tableHeader} />
        <tfoot>
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
        </tfoot>
        <tbody>
          {dataTable.map((item) => (
            <TableBody numbers={item.numbers} item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataTable: state.table.data,
  isLoading: state.table.isLoading
});

export default connect(mapStateToProps, { setTable })(TableContainer);
