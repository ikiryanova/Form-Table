import React, { useEffect } from 'react';
import { Field } from 'redux-form';

import { number } from '../table-form-sections-constants';
import { TextField } from '../../../../../../components/text-field';

import style from './table-form-numbers.module.scss';

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
        <Field 
          name={num} 
          type={number} 
          component={TextField} 
          placeholder={number} 
          classResults={classResults} 
          key={index}
        />
      ))}
      {error && <span className={style.ErrorText}>{error}</span>}
    </>
  );
};