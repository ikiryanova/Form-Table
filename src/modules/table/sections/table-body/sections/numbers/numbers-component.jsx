import React, { useEffect } from 'react';
import { Field } from 'redux-form';

import { number } from '../table-body-sections-constants';
import { TextFieldComponent } from '../../../../../../components/text-field';

import style from './numbers.module.scss';

export const NumbersComponent = ({ fields, meta: { error }, classResults }) => {
  useEffect(() => {
    if (fields.length !== 4) {
      const numbers = 4;
      for (let i = 0; i < numbers; i++) {
        fields.push();
      }
    }
  });

  return (
    <>
      {fields.map((num, index) => (
        <li key={index}>
          <Field name={num} type={number} component={TextFieldComponent} placeholder={number} classResults={classResults}/>
        </li>
      ))}
      {error && <span className={style.errorText}>{error}</span>}
    </>
  );
};