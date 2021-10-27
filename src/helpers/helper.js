const changePropertyValue = (object, objectKey, newValue) => {
  if (typeof object[objectKey] === 'number') {
    object[objectKey] = Number(newValue);
  } else {
    object[objectKey] = newValue;
  }
};

const changeKey = (object, objectKey, newObjectKey) => {
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

const downloadToFile = async (data, filename, contentType) => {
  const file = new Blob([data], { type: contentType });

  if (window.showSaveFilePicker !== undefined) {
    try {
      const newHandle = await window.showSaveFilePicker({
        types: [
          {
            description: "Yaml file",
            accept: { "text/plain": [".yaml"] },
          },
        ],
      });
      const writableStream = await newHandle.createWritable();
      await writableStream.write(file);
      await writableStream.close();
    } catch (err) {
      console.log('failed to save file');
      return false;
    }
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  localStorage.clear();
  window.location.reload();
  return true;
};

export { changePropertyValue, getUniqueId, changeKey, downloadToFile };