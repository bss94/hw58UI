import {useState} from 'react';
import './App.css';
import Modal from './components/Modal/Modal';


const App = () => {
  const [state, setState] = useState();
  const [showModal,setShowModal]=useState(false);

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">

          </div>

          <div className="col-4">
            <button className="w-100 btn btn-primary"
                    onClick={() => setShowModal(true)}
            >
              Order
            </button>
          </div>
          <div className="col-4">

          </div>
        </div>
      </main>


      <Modal show={showModal} title={'Order'} onClose={() => setShowModal(false)}>
        <div className="modal-body">
          content
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>
    </>
  );
};

export default App;
