const data = {
  users: [
    {
      name: 'Irina',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    },
    {
      name: 'Oleg',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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

