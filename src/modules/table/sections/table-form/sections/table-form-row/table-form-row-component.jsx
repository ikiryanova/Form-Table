import { Field, FieldArray } from 'redux-form';
import React, { useState, useEffect } from 'react';

import { text, name, numbers, button } from '../table-form-sections-constants';
import { TextField } from '../../../../../../components/text-field';
import { Numbers } from '../table-form-numbers';

import style from './table-form-row.module.scss';

export const RowComponent = ({ fields, meta: { error, submitFailed } }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    return () => {
      setFlag(true);
    };
  }, [fields.length]); // если все строки таблицы удалены или отсутствуют, то отобразить кнопку add new row

  return (
    <>
      {flag && fields.length === 0 && (
        <button type={button} onClick={() => fields.insert(0, {})} className={style.BtnAdd}>
          add new row
        </button>
      )}
      {fields.map((row, index) => (
        <li className={style.Row} key={index}>
          <Field name={`${row}.${name}`} type={text} component={TextField} placeholder={name} />
          <FieldArray name={`${row}.${numbers}`} component={Numbers} />
          <button type={button} onClick={() => fields.insert(index + 1, {})} className={style.BtnAdd}>
            add new row
          </button>
          <button className={style.BtnRemove} type={button} onClick={() => fields.remove(index)}>
            remove current row
          </button>
        </li>
      ))}
      {submitFailed && error && <div className={style.ErrorText}>Error: {error}</div>}
    </>
  );
};