import React, { useEffect } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';

import { validate } from './body-controller';

const RenderField = ({ input, type, placeholder, className='', meta: { touched, error } }) => {
  return (
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={cn('input', className, { 'error-input': touched && error })}
    />
  );
};

const RenderNumbers = ({ fields, className, meta: { error } }) => {
  useEffect(() => {
    if (fields.length !== 4) {
      const numbers = 4;
      for (let i = 0; i < numbers; i++) {
        fields.push();
      }
    }
  });

  return (
    <>
      {fields.map((number, index) => (
        <li key={index}>
          <Field name={number} type="number" component={RenderField} placeholder="number" className={className}/>
        </li>
      ))}
      {error && <span className="error-text">{error}</span>}
    </>
  );
};

const RenderRow = ({ fields, meta: { error, submitFailed } }) => {
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
          <button type="button" onClick={() => fields.insert(index + 1, {})} className="btn-add">
            add new row
          </button>
          <button className="btn-remove" type="button" onClick={() => fields.remove(index)}>
            remove current row
          </button>
        </ul>
      ))}
      {submitFailed && error && <div className="error-text">Error: {error}</div>}
    </>
  );
};

const RenderSum = (props) => {
  const { fields } = props;
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
              className="sum"
            />
          </li>
          <FieldArray name={`${row}.numbers`} component={RenderNumbers} className="sum" />
        </ul>
      ))}
    </>
  );
};

const TableForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="rows" component={RenderRow} />
      <FieldArray name="sum" component={RenderSum} />
      {props.initialValues.length !== 0 && (
        <button type="submit" className="btn-submit">
          submit
        </button>
      )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  initialValues: state.table.data
});

export const TableBody = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'TableBody',
    validate,
    enableReinitialize: true,
  }),
)(TableForm);

