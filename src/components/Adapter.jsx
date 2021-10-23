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
          <h2 className="h1 text-center">Output Handler</h2>
          <h5 className="text-primary">Plugin Configuration</h5>
          <div className="row g-2">
            <div className="col-sm-5">
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" defaultValue={item.id} />
                <label>ID</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" defaultValue={item.dependencies}/>
                <label>Dependencies</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" defaultValue={item.stepName}/>
                <label>StepName</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" readOnly value={item.mainClass}/>
                <label>MainClass</label>
              </div>
            </div>
          </div>
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