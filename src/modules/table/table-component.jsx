import React from 'react'

import Preloader from '../../common/Preloader/Preloader';
import { TableBody } from './sections/body';

import './table.css'

export const TableComponent = ({ setTable, isLoading, submitDataTable, updateSumNumbers, sum }) => {

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
