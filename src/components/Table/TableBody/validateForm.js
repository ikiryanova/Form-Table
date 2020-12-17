const validate = ({ rows }) => {
  const errors = {};
  if (!rows || !rows.length) {
    errors.rows = {_error: 'Add rows'}
  } else {
    const rowsArrayErrors = [];
    rows.forEach((row, rowIndex) => {
      const rowErrors = {};
      if (!row.name) {
        rowErrors.name = 'Required';
        rowsArrayErrors[rowIndex] = rowErrors;
      }
      if (row && row.numbers && row.numbers.length) {
        const numbersArrayErrors = [];
        row.numbers.forEach((number, numberIndex) => {
          if (number === undefined) {
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
          rowErrors.numbers._error = 'Only 4 numbers';
          rowsArrayErrors[rowIndex] = rowErrors;
        }
      } else {
        errors.rows = { _error: 'Add numbers' };
      }
    });
    if (rowsArrayErrors.length) {
      errors.rows = rowsArrayErrors;
    }
  }
  return errors;
}

export default validate;