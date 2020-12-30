import { Field, FieldArray } from 'redux-form';
import React, { useState, useEffect } from 'react';

import { TEXT, NAME, NUMBERS, BUTTON } from '../table-form-sections-constants';
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
        <button type={BUTTON} onClick={() => fields.insert(0, {})} className={style.BtnAdd}>
          add new row
        </button>
      )}
      {fields.map((row, index) => (
        <li className={style.Row} key={index}>
          <Field name={`${row}.${NAME}`} type={TEXT} component={TextField} placeholder={NAME} />
          <FieldArray name={`${row}.${NUMBERS}`} component={Numbers} />
          <button type={BUTTON} onClick={() => fields.insert(index + 1, {})} className={style.BtnAdd}>
            add new row
          </button>
          <button className={style.BtnRemove} type={BUTTON} onClick={() => fields.remove(index)}>
            remove current row
          </button>
        </li>
      ))}
      {submitFailed && error && <div className={style.ErrorText}>Error: {error}</div>}
    </>
  );
};