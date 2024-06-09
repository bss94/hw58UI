import React from 'react';
import {BtnConfig} from '../../types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  btnConfig?: BtnConfig[];
}

const Modal: React.FC<Props> = ({
  show,
  title,
  onClose,
  btnConfig,
  children
}) => {
  return (
    <>
      <div className="modal-backdrop show"
           style={{display: show ? 'block' : 'none'}}
      />
      <div className="modal show"
           style={{display: show ? 'block' : 'none'}}
           onClick={onClose}
      >
        <div className="modal-dialog"
             onClick={event => event.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5"> {title}</h1>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            {children}
            {btnConfig !== undefined ?
              <div className="modal-footer">
                {
                  btnConfig.map((button) => {
                    return <button className={`btn btn-${button.type}`}
                                   onClick={button.onClick}
                                   key={button.type + button.label}
                    >
                      {button.label}
                    </button>;
                  })
                }
              </div>
              : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;