import React from 'react';
import cn from 'classnames';

import style from './text-field.module.scss';

export const TextFieldComponent = ({ input, type, placeholder, classResults, meta: { touched, error } }) => {
  return (
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={ cn(style.input, { [style.results]: classResults }, { [style.errorInput]: touched && error })}
    />
  );
};