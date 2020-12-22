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

export const serverUpdateSum = (sum) => {
  const initialSum = sum.map((item, index) => {
    if (!item) {
      return data.sum[0].numbers[index];
    }
    return item;
  });

  data.sum[0].numbers = initialSum;
  const promise = new Promise((response) => {
    setTimeout(() => {
      response();
    }, 2000);
  });
  return promise;
};
