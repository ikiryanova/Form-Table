import { Field, FieldArray } from 'redux-form';
import React from 'react';

import { text, name, numbers, button } from '../table-form-sections-constants';
import { TextField } from '../../../../../../components/text-field';
import { Numbers } from '../table-form-numbers';

import style from './table-form-row.module.scss';

export const RowComponent = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <>
      {fields.map((row, index) => (
        <ul key={index} className={style.row}>
          <li>
            <Field name={`${row}.${name}`} type={text} component={TextField} placeholder={name} />
          </li>
          <FieldArray name={`${row}.${numbers}`} component={Numbers} />
          <button type={button} onClick={() => fields.insert(index + 1, {})} className={style.btnAdd}>
            add new row
          </button>
          <button className={style.btnRemove} type={button} onClick={() => fields.remove(index)}>
            remove current row
          </button>
        </ul>
      ))}
      {submitFailed && error && <div className={style.errorText}>Error: {error}</div>}
    </>
  );
};