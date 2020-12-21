const validate = (values) => {
  const errors = {};
  if (!values.rows || !values.rows.length) {
    errors.rows = {_error: 'Добавьте пользователя'}
  } else {
    const rowsArrayErrors = [];
    values.rows.forEach((row, rowIndex) => {
      const rowErrors = {};
      if (!row.name) {
        rowErrors.name = 'Required';
        rowsArrayErrors[rowIndex] = rowErrors;
      }
      if (row && row.numbers && row.numbers.length) {
        const numbersArrayErrors = [];
        row.numbers.forEach((number, numberIndex) => {
          if (!number || !number.length) {
            numbersArrayErrors[numberIndex] = 'Required';
          }
        });
        if (numbersArrayErrors.length) {
          rowErrors.numbers = numbersArrayErrors;
          rowsArrayErrors[rowIndex] = rowErrors;
        }
        if (row.numbers.length !== 4) {
          if (!rowErrors.numbers) {
            rowErrors.numbers = [];
          }
          rowErrors.numbers._error = 'Должно быть 4 числа';
          rowsArrayErrors[rowIndex] = rowErrors;
        }
      } else {
        errors.rows = { _error: 'Добавьте числа' };
      }
    });
    if (rowsArrayErrors.length) {
      errors.rows = rowsArrayErrors;
    }
  }
  return errors;
}

export default validate;