import React, { useEffect } from 'react'
import cn from 'classnames';

import validate from './validateForm';
import { Field, FieldArray, reduxForm } from 'redux-form';

const TableBody = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="rows" component={RenderRow} />
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

const RenderRow = (props) => {
  const { fields, meta: { error, submitFailed } } = props;
  return (
    <>
      {fields.map((row, index) => (
        <ul key={index} className="table row">
          <li>
            <Field
              name={`${row}.name`}
              type="text"
              component={RenderField}
              placeholder="name"
            />
          </li>
          <FieldArray name={`${row}.numbers`} component={RenderNumbers} />
          <button type="button" onClick={() => fields.push({})} className="btn-add">
            add new row
          </button>
          <button className="btn-remove" type="button" onClick={() => fields.remove(index)}>
            remove current row
          </button>
        </ul>
      ))}
      {submitFailed && error && <div className="error-text">Ошибка: {error}</div>}
      <button type="button" onClick={() => fields.push({})} className="btn-main btn-add">
        add row
      </button>
    </>
  );
}

const RenderNumbers = ({ fields, meta: { error } }) => {
  useEffect(() => {
    createNumbersField();
  }, []);

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
        </li>
      ))}
      {error && <span className="error-text">{error}</span>}
    </>
  );
}

const RenderField = ({ input, type, placeholder, meta: {touched, error} }) => {
  return (
    <input {...input} type={type} placeholder={placeholder} className={cn("input", {"error-input": touched && error})}/>
  );
};
        
