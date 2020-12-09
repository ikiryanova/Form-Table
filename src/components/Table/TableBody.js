import React from 'react'
import TableForm from './TableForm/TableForm';

const TableBody = ({ numbers, row }) => {
  const valuesNumbers = Object.values(numbers); // массив значений numbers.num1, numbers.num2 и т.д.

  const data = {
    name: row.name,
    num1: row.numbers.num1,
    num2: row.numbers.num2,
    num3: row.numbers.num3,
    num4: row.numbers.num4,
    num5: row.numbers.num5,
    num6: row.numbers.num6,
    num7: row.numbers.num7,
    num8: row.numbers.num8,
    num9: row.numbers.num9,
    num10: row.numbers.num10,
    num11: row.numbers.num11,
    num12: row.numbers.num12,
    num13: row.numbers.num13,
    num14: row.numbers.num14,
  };

  return (
    <TableForm valuesNumbers={valuesNumbers} initialValues={data} />
  );
};

export default TableBody;
