import React from 'react'

 const TableInicial = ({ dataTable }) => {
  return (
    <>
      {dataTable.rows.map((row, index) => (
        <ul className="table" key={index}>
          <li className="sum">{row.name}</li>
        </ul>
      ))}
    </>
  );
}

export default TableInicial;
