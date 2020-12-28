import React from 'react';

import Preloader from '../../components/preloader/Preloader';
import { TableForm } from './sections/table-form';

import style from './table.module.scss';

export const TableComponent = ({ setTable, isLoading, submitDataTable, updateSumNumbers }) => {

  const loadingTable = () => {
    setTable();
  };

  const onSubmit = (formData) => {
    submitDataTable(formData);
  };

  // const onChange = (formData) => {
  //   if (formData.length !== 0) {
  //     updateSumNumbers(formData);
  //   }
  // };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={style.wrapper}>
      <TableForm onSubmit={onSubmit} />
      <button onClick={loadingTable} className={style.btnLoad}>loading table</button>
    </div>
  );
};
