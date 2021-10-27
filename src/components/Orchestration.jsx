import React, {Fragment} from 'react';
import { dump } from 'js-yaml';
import { downloadToFile } from '../helpers/helper.js';
import '../css/style.css';

const Orchestration = ({ orchArray, setOrchArray }) => {
  
  const exportToYaml = (orchArray) => {
    const yamlData = dump(orchArray);
    downloadToFile(yamlData, 'adapter.yaml', 'text/plain');
    setOrchArray([]);
  };

  const deleteOrchestration = () => {
    setOrchArray([]);
    localStorage.clear();
    window.location.reload();
  };

  const DeleteOrExportBtn = () => (
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
  );

  return (
    <>
      <h3 className="h3 text-center mt-4">Orchestration</h3>
      <div className="row  container-orchestration overflow-auto mt-2">
        <div className="col-12">
          <div className="row justify-content-center">
            {orchArray.map((adapter, index) => (
              <Fragment key={index}>
                <div className="d-grid  col-sm-7"
                >
                  <button
                    type="button"
                    className="btn btn-secondary text-white  mt-3 "
                  >
                    {adapter.id}
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      {(orchArray.length > 0) && <DeleteOrExportBtn />}
    </>
  );
};


export default Orchestration;
