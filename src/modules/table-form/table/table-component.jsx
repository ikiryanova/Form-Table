import React from 'react';
import { FieldArray } from 'redux-form';

import { TableSectionsBody } from './sections/table-sections-body';
import { TableSectionsResults } from './sections/table-sections-results';
import { ROWS } from './table-constants';

export const TableComponent = ({ tableResults }) => {
  return (
    <>
      <FieldArray name={ROWS} component={TableSectionsBody} />
      <TableSectionsResults tableResults={tableResults} />
    </>
  );
};
