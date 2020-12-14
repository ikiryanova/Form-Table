const validate = (values) => {
  const errors = {};
  if (!values.users || !values.users.length) {
    errors.users = {_error: 'Добавьте пользователя'}
  } else {
    const usersArrayErrors = [];
    values.users.forEach((user, userIndex) => {
      const userErrors = {};
      if (!user.name) {
        userErrors.name = 'Required';
        usersArrayErrors[userIndex] = userErrors;
      }
      if (user && user.numbers && user.numbers.length) {
        const numbersArrayErrors = [];
        user.numbers.forEach((number, numberIndex) => {
          if (!number || !number.length) {
            numbersArrayErrors[numberIndex] = 'Required';
          }
        });
        if (numbersArrayErrors.length) {
          userErrors.numbers = numbersArrayErrors;
          usersArrayErrors[userIndex] = userErrors;
        }
        if (user.numbers.length !== 4) {
          if (!userErrors.numbers) {
            userErrors.numbers = [];
          }
          userErrors.numbers._error = 'Должно быть 4 числа';
          usersArrayErrors[userIndex] = userErrors;
        }
      } else {
        errors.users = { _error: 'Добавьте числа' };
      }
    });
    if (usersArrayErrors.length) {
      errors.users = usersArrayErrors;
    }
  }
  return errors;
}

export default validate;