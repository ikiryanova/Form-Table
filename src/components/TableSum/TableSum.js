import React from 'react';

const TableSum = ({ sum }) => {
  return (
    <ul className="table table-sum">
      <li className="sum">Sum</li>
      {sum.map((item, index) => (
        <li key={index} className="sum">{item}</li>
      ))}
    </ul>
  )
}

export default TableSum;