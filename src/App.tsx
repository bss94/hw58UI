import {useState} from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import {BtnConfig} from './types';


const App = () => {
  const [showModal,setShowModal]=useState(false);
  const [showModalWithBtn,setShowModalWithBtn]=useState(false);

  const btnConfig:BtnConfig[]=[
    {type: 'primary', label: 'Continue', onClick: () => alert('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => setShowModalWithBtn(false)}
  ]


  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">

          </div>

          <div className="col-4">
            <button className="w-100 mb-3 btn btn-primary"
                    onClick={() => setShowModal(true)}
            >
              Modal without btn
            </button>
            <button className="w-100 btn btn-success"
                    onClick={() => setShowModalWithBtn(true)}
            >
              Modal with btn
            </button>
          </div>
          <div className="col-4">

          </div>
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
