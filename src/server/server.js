import data from './data-server';

export const serverUpdateData = (dataForm) => {
  if(dataForm) {
    data.rows = [...dataForm.rows];
  }
  const promise = new Promise((response) => {
    setTimeout(() => {
      response(data);
    }, 2000);
  });
  return promise;
};

