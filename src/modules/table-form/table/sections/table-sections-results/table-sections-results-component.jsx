import React from 'react';

import style from './table-sections-results.module.scss';

export const TableSectionsResultsComponent = ({ tableResults }) => {
  return (
    <>
      {tableResults.length !== 0 && (
        <ul className={style.Row}>
          <li className={style.Result}>ИТОГО</li>
          {tableResults.map((result, index) => (
            <li key={index} className={style.Result}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
