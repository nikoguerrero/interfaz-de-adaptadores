const changePropertyValue = (object, objectKey, newValue) => {
  if (typeof object[objectKey] === 'number') {
    object[objectKey] = Number(newValue);
  } else {
    object[objectKey] = newValue;
  }
};

export default changePropertyValue;