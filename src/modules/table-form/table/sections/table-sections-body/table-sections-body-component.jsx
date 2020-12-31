import { Field } from 'redux-form';
import React, { useState, useEffect } from 'react';

import { TEXT, NAME, NUMBER, BUTTON, NUMBERS } from './table-sections-body-constants';
import { TextField } from '../../../../../components/text-field';

import style from './table-sections-body.module.scss';

export const TableSectionsBodyComponent = ({ fields, meta: { error, submitFailed } }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    return () => {
      setFlag(true);
    };
  }, [fields.length]); // если все строки таблицы удалены или отсутствуют, то отобразить кнопку add new row

  return (
    <ul>
      {flag && fields.length === 0 && (
        <button type={BUTTON} onClick={() => fields.insert(0, {})} className={style.BtnAdd}>
          add new row
        </button>
      )}
      {fields.map((row, index) => (
        <li className={style.Row} key={index}>
          <Field name={`${row}.${NAME}`} type={TEXT} component={TextField} placeholder={NAME} />
          <Field name={`${row}.${NUMBERS}.[0]`} type={NUMBER} component={TextField} placeholder={NUMBER} />
          <Field name={`${row}.${NUMBERS}.[1]`} type={NUMBER} component={TextField} placeholder={NUMBER} />
          <Field name={`${row}.${NUMBERS}.[2]`} type={NUMBER} component={TextField} placeholder={NUMBER} />
          <Field name={`${row}.${NUMBERS}.[3]`} type={NUMBER} component={TextField} placeholder={NUMBER} />

          <button type={BUTTON} onClick={() => fields.insert(index + 1, {})} className={style.BtnAdd}>
            add new row
          </button>
          <button className={style.BtnRemove} type={BUTTON} onClick={() => fields.remove(index)}>
            remove current row
          </button>
        </li>
      ))}
      {submitFailed && error && <div className={style.ErrorText}>Error: {error}</div>}
    </ul>
  );
};
