import React from 'react';
import { FieldArray } from 'redux-form';

import { Results } from '../table-form-results';
import { sum } from '../table-form-sections-constants';

export const TableFormFooterComponent = ({ tableResults }) => {
  return (
    <>
      {/* <FieldArray name={sum} component={Results} tableResults={ tableResults } /> */}
      {tableResults.length !== 0 && <ul>
        <li>ИТОГО</li>
        {tableResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>}
    </>
  );
};
