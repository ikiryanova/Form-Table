import React from 'react'

import Preloader from '../../components/preloader/Preloader';
import { TableBody } from './sections/table-body';

import style from './table.module.scss';

export const TableComponent = ({ setTable, isLoading, submitDataTable, updateSumNumbers }) => {

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
    <div className={style.wrapper}>
      <ul>
        <TableBody onSubmit={onSubmit} onChange={onChange} />
        <button onClick={LoadingTable} className={style.btnLoad}>loading table</button>
      </ul>
    </div>
  );
};
