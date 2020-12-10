import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';

const TableBody = (props) => {
  console.log(props)
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>Hello</div>
      <FieldArray name="users" component={RenderUsers} />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'fieldArrays',
})(TableBody);

const RenderUsers = ({ fields }) => {
  return (
    <>
      <button type="button" onClick={() => fields.push({})}>
        Add User
      </button>
      {fields.map((user, index) => (
        <tr key={index}>
          <Field name={`${user}.name`} type="text" component={RenderField} />
          <FieldArray name={`${user}.numbers`} component={RenderNumbers} />
        </tr>
      ))}
    </>
  );
}

const RenderNumbers = ({ fields }) => {
  return (
    <>
      {fields.map((number, index) => (
        <Field name={number} type="number" component={RenderField} key={index} />
      ))}
    </>
  );
}

const RenderField = ({ input, type }) => {
  return (
    <td>
      <input {...input} type={type} />
    </td>
  );
};