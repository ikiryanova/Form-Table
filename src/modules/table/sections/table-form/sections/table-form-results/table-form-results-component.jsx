import React from 'react';
import { Field, FieldArray } from 'redux-form';

import { classResults, text, name, numbers } from '../table-form-sections-constants';
import { Numbers } from '../table-form-numbers';
import { TextField } from '../../../../../../components/text-field';

import style from './table-form-results.module.scss';

export const ResultsComponent = ({ fields, tableResults }) => {
  return (
    <>
      {fields.map((row, index) => (
        <ul key={index} className={style.row}>
          <li>
            <Field
              name={`${row}.${name}`}
              type={text}
              component={TextField}
              placeholder={name}
              classResults={classResults}
            />
          </li>
          <FieldArray name={`${row}.${numbers}`} component={Numbers} classResults={classResults} />
        </ul>
      ))}
    </>
  );
};