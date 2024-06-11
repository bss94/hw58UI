import {useState} from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import {BtnConfig} from './types';
import Alert from './components/Alert/Alert';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalWithBtn, setShowModalWithBtn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPrimaryAlert, setShowPrimaryAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);

  const btnConfig: BtnConfig[] = [
    {type: 'primary', label: 'Continue', onClick: () => setShowAlert(true)},
    {type: 'danger', label: 'Close', onClick: () => setShowModalWithBtn(false)}
  ];
  const btnModal: BtnConfig[] = [
    {type: 'secondary', label: 'open modal', onClick: () => setShowModal(true)},
    {type: 'success', label: 'open modal with btn', onClick: () => setShowModalWithBtn(true)}
  ];
  const btnAlert: BtnConfig[] = [
    {type: 'primary', label: 'open primary alert', onClick: () => setShowPrimaryAlert(true)},
    {type: 'danger', label: 'open danger alert', onClick: () => setShowAlert(true)},
    {type: 'warning', label: 'open warning alert', onClick: () => setShowWarningAlert(true)},
  ];


  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-3"></div>
          <div className="col-6">
            <Alert show={true}
                   type={'success'}
            > This is Success alert without dismiss
            </Alert>

            <div className="mt-3">
              <Alert show={showPrimaryAlert}
                     type={'primary'}
                     onDismiss={() => {
                       setShowPrimaryAlert(false);
                     }}
              >
                This is primary alert with dismiss without button
              </Alert>
            </div>

            <div className="mt-3">
              <Alert show={showWarningAlert}
                     type={'warning'}
                     onDismiss={() => {
                       setShowWarningAlert(false);
                     }}
                     dismissOnButton={true}
              >
                This is primary alert with dismiss on button to console
              </Alert>
            </div>

            <div className="mt-3">
              <Alert show={showAlert}
                     type={'danger'}
                     onDismiss={() => {
                       setShowAlert(false);
                     }}
                     dismissOnButton={true}
              >
                This is danger alert with dismiss to close
              </Alert>
            </div>
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row mt-2">
          <div className="col-4"></div>
          <div className="col-4">

            <button className="w-100 mb-3 btn btn-secondary"
                    onClick={() => setShowModal(true)}
            >
              Modal without btn
            </button>

            <button className="w-100 mb-3 btn btn-success"
                    onClick={() => setShowModalWithBtn(true)}
            >
              Modal with btn
            </button>
            <button className="w-100 mb-3 btn btn-danger"
                    onClick={() => setShowAlert(true)}
            >
              Open danger alert
            </button>
            <button className="w-100 mb-3 btn btn-primary"
                    onClick={() => setShowPrimaryAlert(true)}
            >
              Open primary alert
            </button>
            <button className="w-100 mb-3 btn btn-warning"
                    onClick={() => setShowWarningAlert(true)}
            >
              Open warning alert
            </button>

          </div>
          <div className="col-4"></div>
        </div>
      </main>

      <Modal show={showModalWithBtn}
             title={'Modal Title with button configs'}
             btnConfig={btnConfig}
             onClose={() => setShowModalWithBtn(false)}>
        <div className="modal-body">
          modal content
        </div>
      </Modal>
      <Modal show={showModal}
             title={'Modal Title without button configs'}
             onClose={() => setShowModal(false)}>
        <div className="modal-body">
          modal content
        </div>
      </Modal>

    </>
  );
};

export default App;
