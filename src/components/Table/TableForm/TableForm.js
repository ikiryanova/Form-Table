import React from 'react'
import { Field } from 'redux-form'

const TableForm = ({ handlerSubmit, name }) => {
  return (
    <form onSubmit={handlerSubmit}>
      <Field
        name={name}
        component={"input"}
      />
    </form>
  )
}

export default TableForm;
