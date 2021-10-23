const changePropertyValue = (object, objectKey, newValue) => {
  console.log(object);
  if (typeof object[objectKey] === 'number') {
    object[objectKey] = Number(newValue);
  } else {
    object[objectKey] = newValue;
  }
};

export default changePropertyValue;