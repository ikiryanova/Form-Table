import React from 'react';
import { FieldArray } from 'redux-form';

import { Row } from '../table-form-row';
import { rows } from '../table-form-sections-constants';

export const TableFormBodyComponent = () => {
  return (
    <ul>
      <FieldArray name={rows} component={Row} />
    </ul>
  );
};
