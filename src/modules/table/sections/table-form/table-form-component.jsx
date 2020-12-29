import React from 'react';

import { submit } from './table-form-constants';
import { TableFormBody } from './sections/table-form-body';
import { TableFormFooter } from './sections/table-form-footer';

import style from './table-form.module.scss';

export const TableForm = ({ handleSubmit, initialValues, tableResults }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TableFormBody />
      <TableFormFooter tableResults={tableResults} />
      {initialValues.length !==0 && (
        <button type={submit} className={style.BtnSubmit}>
          submit
        </button>
      )}
    </form>
  );
};
