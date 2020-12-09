import React from 'react'
import { Field, reduxForm } from 'redux-form'

const TableForm = ({ handlerSubmit, row, valuesNumbers, initialValues }) => {
  console.log(initialValues);
  return (
    <tr>
      <form onSubmit={handlerSubmit}>
        <td>
          <Field name="name" component={'input'} />
        </td>
        <td>
          <Field name="num1" component={'input'} />
        </td>
        <td>
          <Field name="num2" component={'input'} />
        </td>
        <td>
          <Field name="num3" component={'input'} />
        </td>
        <td>
          <Field name="num4" component={'input'} />
        </td>
        <td>
          <Field name="num5" component={'input'} />
        </td>
        <td>
          <Field name="num6" component={'input'} />
        </td>
        <td>
          <Field name="num7" component={'input'} />
        </td>
        <td>
          <Field name="num8" component={'input'} />
        </td>
        <td>
          <Field name="num9" component={'input'} />
        </td>
        <td>
          <Field name="num10" component={'input'} />
        </td>
        <td>
          <Field name="num11" component={'input'} />
        </td>
        <td>
          <Field name="num12" component={'input'} />
        </td>
        <td>
          <Field name="num13" component={'input'} />
        </td>
        <td>
          <Field name="num14" component={'input'} />
        </td>
        {/* {valuesNumbers.map((num) => (
        <td key={num}>
          <Field name={`${row.name}`} component={'input'} />
        </td>
      ))} */}
      </form>
    </tr>
  );
};

export default reduxForm({ form: 'rowForm' })(TableForm);


