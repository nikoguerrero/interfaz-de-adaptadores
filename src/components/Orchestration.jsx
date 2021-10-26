import React, {Fragment} from 'react';
import { dump } from 'js-yaml';
import './style.css';

const Orchestration = ({ orchArray, setOrchArray }) => {
  const downloadToFile = async (data, filename, contentType) => {
    const file = new Blob([data], { type: contentType });

    if (window.showSaveFilePicker !== undefined) {
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
    } else {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();
      URL.revokeObjectURL(a.href);
    }
    localStorage.clear();
  };

  const exportToYaml = (orchArray) => {
    const yamlData = dump(orchArray);
    console.log(yamlData);
    downloadToFile(yamlData, "adapter.yaml", "text/plain");
  };

  const deleteOrchestration = () => {
    setOrchArray([]);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <h2 className="h2 text-center mt-4">Orchestration</h2>
      <div className="row  container-orchestration overflow-auto mt-2">
        <div className="col-12">
          <div className="row justify-content-center">
            {orchArray.map((adapter, index) => (
              <Fragment>
                <div className="d-grid  col-sm-7">
                  <button
                    type="button"
                    className="btn btn-secondary text-white  mt-3 "
                    key={index}
                  >
                    {adapter.id}
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="d-grid  col-sm-5  ">
          <button
            className="btn  font-weight-bold btn-exit text-white "
            onClick={deleteOrchestration}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
        <div className="d-grid  col-sm-5  ">
          <button
            className="btn btn-primary font-weight-bold"
            onClick={() => exportToYaml(orchArray)}
          >
            {" "}
            Export{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Orchestration;
