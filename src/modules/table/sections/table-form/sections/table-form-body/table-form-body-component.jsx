import React from 'react';
import { FieldArray } from 'redux-form';

import { Row } from '../table-form-row';
import { ROWS } from '../table-form-sections-constants';

export const TableFormBodyComponent = () => {
  return (
    <ul>
      <FieldArray name={ROWS} component={Row} />
    </ul>
  );
};
