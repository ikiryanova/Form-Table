import React from 'react';
import cn from 'classnames';

import style from './text-field.module.scss';

export const TextFieldComponent = ({ input, type, placeholder, meta: { touched, error } }) => {
  return (
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={ cn(style.Input, { [style.ErrorInput]: touched && error })}
    />
  );
};