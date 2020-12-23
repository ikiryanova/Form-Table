import React from 'react';
import { FieldArray } from 'redux-form';

import { rows, sum, submit } from './table-sections-body-constants';
import { RowComponent } from './sections/row';
import { ResultsComponent } from './sections/results';

import style from './table-sections-body.module.scss';

export const TableBody = ({ handleSubmit, initialValues }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name={rows} component={RowComponent} />
      <FieldArray name={sum} component={ResultsComponent} />
      {initialValues.length !== 0 && (
        <button type={submit} className={style.btnSubmit}>
          submit
        </button>
      )}
    </form>
  );
};


