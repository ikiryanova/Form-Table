import React from 'react'

const TableHeader = ({ items }) => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        {items.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
