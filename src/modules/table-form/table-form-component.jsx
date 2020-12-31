import React from 'react';

import { Preloader } from '../../components/preloader';
import { SUBMIT } from './table-form-constants';
import { Table } from './table';

import style from './table-form.module.scss';

export const TableFormComponent = ({ 
  handleSubmit, 
  setTable, 
  isLoading,  
  tableResults, 
  initialValues }) => {
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={style.Wrapper}>
      <form onSubmit={handleSubmit}>
        <Table tableResults={tableResults} initialValues={initialValues} />
        {initialValues.length !== 0 && (
          <button type={SUBMIT} className={style.BtnSubmit}>
            submit
          </button>
        )}
      </form>
      <button onClick={setTable} className={style.BtnLoad}>
        loading table
      </button>
    </div>
  );
};
