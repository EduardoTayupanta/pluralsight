export const Example3 = () => {
  const { PI, E, SQRT2 } = Math;
  const circle = {
    label: 'circleX',
    radius: 2,
  };
  const circleArea = ({ radius }, { precision = 2 } = {}) => {
    (PI * radius * radius).toFixed(precision);
  };
  console.log(circleArea(circle, { precision: 5 }));

  const [first, ...restOfItems] = [10, 20, 30, 40];
  console.log(first);
  console.log(restOfItems);

  const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
  };

  const { temp1, temp2, ...person } = data;
  console.log(temp1, temp2, person);
  const newArray = [...restOfItems];
  const newObject = { ...person };
  console.log(newArray, newObject);

  return null;
};
