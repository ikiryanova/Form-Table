import React from 'react';
import { Field, FieldArray } from 'redux-form';

import { classResults, text, name, numbers } from '../table-body-sections-constants';
import { NumbersComponent } from '../numbers';
import { TextFieldComponent } from '../../../../../../components/text-field';

import style from './results.module.scss';

export const ResultsComponent = ({ fields }) => {
  return (
    <>
      {fields.map((row, index) => (
        <ul key={index} className={style.row}>
          <li>
            <Field
              name={`${row}.${name}`}
              type={text}
              component={TextFieldComponent}
              placeholder={name}
              classResults={classResults}
            />
          </li>
          <FieldArray name={`${row}.${numbers}`} component={NumbersComponent} classResults={classResults} />
        </ul>
      ))}
    </>
  );
};