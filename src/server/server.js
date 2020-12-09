const data = [
  {
    id: 1,
    name: 'Irina',
    numbers: {
      num1: 1,
      num2: 2,
      num3: 3,
      num4: 4,
      num5: 5,
      num6: 6,
      num7: 7,
      num8: 8,
      num9: 9,
      num10: 10,
      num11: 11,
      num12: 12,
      num13: 13,
      num14: 14,
    },
  },
  {
    id: 2,
    name: 'Alex',
    numbers: {
      num1: 1,
      num2: 2,
      num3: 3,
      num4: 4,
      num5: 5,
      num6: 6,
      num7: 7,
      num8: 8,
      num9: 9,
      num10: 10,
      num11: 11,
      num12: 12,
      num13: 13,
      num14: 14,
    },
  },
];

export const server = () => {
  const promise = new Promise(response => {
    setTimeout(() => {
      response(data)
    }, 2000);
  });
  return promise;
}