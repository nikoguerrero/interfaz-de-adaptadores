const changePropertyValue = (object, objectKey, newValue) => {
  if (typeof object[objectKey] === 'number') {
    object[objectKey] = Number(newValue);
  } else {
    object[objectKey] = newValue;
  }
};

const changeKey = (object, objectKey, newObjectKey) => {
  console.log(object, objectKey, newObjectKey);
  const value = object[objectKey];
  delete object[objectKey];
  object[newObjectKey] = value;
  return newObjectKey;
};

let idNumber = 0;
const getUniqueId = (obj) => {
  if (!('__unique_id__' in obj)) {
    // agrega el id como una propiedad no emurable. Lo que significa que en Object.keys no aparecería en la lista de keys.
    Object.defineProperty(obj, '__unique_id__', { value: idNumber++, enumerable: false, writable: false });
  }
  return obj.__unique_id__;
};

export { changePropertyValue, getUniqueId, changeKey };