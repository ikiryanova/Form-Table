import React from 'react';

import Preloader from '../../components/preloader/Preloader';
import { TableForm } from './sections/table-form';

import style from './table.module.scss';

export const TableComponent = ({ setTable, isLoading, submitDataTable }) => {

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={style.Wrapper}>
      <TableForm onSubmit={() => submitDataTable()} />
      <button onClick={() => setTable()} className={style.BtnLoad}>
        loading table
      </button>
    </div>
  );
};
