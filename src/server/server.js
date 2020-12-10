const data = [
  {
    name: 'Irina',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  },
];

export const serverGetData = () => {
  const promise = new Promise((response) => {
    setTimeout(() => {
      response(data);
    }, 2000);
  });
  return promise;
};

export const serverSubmitData = (dataForm) => {
  const promise = new Promise((response) => {
    setTimeout(() => {
      response(dataForm);
    }, 2000);
  });
  return promise;
}

