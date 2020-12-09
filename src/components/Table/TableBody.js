import React from 'react'

const TableBody = ({ numbers, item }) => {
  const valueNambers = Object.values(numbers);

  return (
    <tr>
      <td>{item.name}</td>
      {valueNambers.map((num) => (
        <td key={num}>{num}</td>
      ))}
    </tr>
  );
};

export default TableBody;
