const data = {
  rows: [
    {
      name: 'test000',
      numbers: [0, 2, 3, 4],
    },
    {
      name: 'test001',
      numbers: [1, 2, 3, 4],
    },
  ]
};

export const serverData = (dataForm = data) => {
  const promise = new Promise((response) => {
    setTimeout(() => {
      response(dataForm);
    }, 2000);
  });
  return promise;
}

export const serverUpdateData = (dataForm) => {
  data.rows = [...data.rows, ...dataForm.rows.filter(row => !data.rows.includes(row))];
  const promise = new Promise((response) => {
    setTimeout(() => {
      response(data);
    }, 2000);
  });
  return promise;
};

