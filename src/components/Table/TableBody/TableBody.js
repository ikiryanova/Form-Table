import React from 'react'
import validate from './validateForm';
import cn from 'classnames';
import { Field, FieldArray, reduxForm } from 'redux-form';

const TableBody = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="users" component={RenderUsers} />
      <button type="submit" className="btn-main btn-submit">
        Submit
      </button>
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
          <li>
            <Field
              name={`${user}.name`}
              type="text"
              component={RenderField}
              placeholder="user name"
            />
          </li>
          <FieldArray name={`${user}.numbers`} component={RenderNumbers} />
          <button className="btn-remove" type="button" onClick={() => fields.remove(index)}>
            Remove user
          </button>
        </ul>
      ))}
      {submitFailed && error && <div className="error-text">Ошибка: {error}</div>}
      <button type="button" onClick={() => fields.push({})} className="btn-main btn-add">
        Add user
      </button>
    </>
  );
}

const RenderNumbers = ({ fields, meta: { error } }) => {
  const createNumbersField = () => {
    const numbers = 4;
    for (let i = 0; i < numbers; i++) {
      fields.push();
    }
  }

  return (
    <>
      {fields.map((number, index) => (
        <li key={index}>
          <Field name={number} type="number" component={RenderField} placeholder="number" />
          {fields.length > 4 && (
            <button type="button" onClick={() => fields.remove(index)}>
              X
            </button>
          )}
        </li>
      ))}
      {(fields.length !== 4) &&
        <button type="button" onClick={() => createNumbersField()}>
          Add numbers
        </button>
      }
      {error && <span className="error-text">{error}</span>}
    </>
  );
}

const RenderField = ({ input, type, placeholder, meta: {touched, error} }) => {
  return (
    <input {...input} type={type} placeholder={placeholder} className={cn("input", {"error-input": touched && error})}/>
  );
};
        
