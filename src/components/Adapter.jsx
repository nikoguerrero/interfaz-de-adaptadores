import React, { Fragment } from 'react';
import AdapterConfig from './AdapterConfig';
import { dump } from 'js-yaml';

const Adapter = (props) => {
  const { adapterArray } = props;

  const downloadToFile = async (data, filename, contentType) => {
    const file = new Blob([data], { type: contentType });

    if (window.showSaveFilePicker !== undefined) {
      const newHandle = await window.showSaveFilePicker({
        types: [{
          description: 'Yaml file',
          accept: { 'text/plain': ['.yaml'] }
        }]
      });
      const writableStream = await newHandle.createWritable();
      await writableStream.write(file);
      await writableStream.close();
    } else {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();
      URL.revokeObjectURL(a.href);
    }
  };

  const saveAdapter = () => {
    const yamlData = dump(adapterArray);
    console.log(yamlData);
    downloadToFile(yamlData, 'adapter.yml', 'text/plain');
  };

  return (
    <Fragment>
      {adapterArray && adapterArray.map((item) => (
        <div key={item.mainClass}>
          <label>id:</label>
          <input type="text" defaultValue={item.id} />
          <label>dependencies:</label>
          <input type="text" defaultValue={item.dependencies} />
          <label>stepName:</label>
          <input type="text" defaultValue={item.stepName} />
          <label>mainClass:</label>
          <input type="text" readOnly value={item.mainClass} />
          <AdapterConfig
            key={item.id}
            config={item.config}
          />
        </div>
      ))}
      <Fragment>
        <button
          onClick={saveAdapter}>
          SAVE
        </button>
      </Fragment>
    </Fragment>
  )
};

export default Adapter;