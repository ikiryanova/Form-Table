import React from 'react'
import validate from './validateForm';
import cn from 'classnames';
import { Field, FieldArray, reduxForm } from 'redux-form';

const TableBody = (props) => {
  const { handleSubmit, dataTable, error } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="users" component={RenderUsers} inicialValues={dataTable}/>
      <button type="submit" className="btn-main">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'TableBody',
  validate
})(TableBody);

const RenderUsers = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <>
      {fields.map((user, index) => (
        <ul key={index} className="table users">
          <Field
            name={`${user}.name`}
            type="text"
            component={RenderField}
            placeholder="user name"
          />
          <FieldArray name={`${user}.numbers`} component={RenderNumbers} />
          <button className="btn-remove" type="button" onClick={() => fields.remove(index)}>
            Remove user
          </button>
        </ul>
      ))}
      <button type="button" onClick={() => fields.push({})} className="btn-main btn-add">
        Add user
      </button>
      {submitFailed && error && <div className="error-text">Ошибка:{error}</div>}
    </>
  );
}

const RenderNumbers = ({ fields, meta: { error } }) => {
  return (
    <>
      {fields.map((number, index) => (
        <Field name={number} component={RenderField} key={index} placeholder="number" />
      ))}
      <button type="button" onClick={() => fields.push({})}>
        Add numbers
      </button>
      {error && <span className="error-text">{error}</span>}
    </>
  );
}

const RenderField = ({ input, type, placeholder, meta: {touched, error} }) => {
  return (
    <li>
      <input {...input} type={type} placeholder={placeholder} className={cn("input", {"error-input": touched && error})}/>
    </li>
  );
};