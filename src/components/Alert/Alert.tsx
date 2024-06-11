import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
  dismissOnButton?:boolean;
  show:boolean;
}

const Alert: React.FC<Props> = ({
  show,
  type,
  onDismiss,
  dismissOnButton,
  children
}) => {

  let alertContainer = (
    <div className={`alert alert-${type} alert-dismissible`}
         style={{display: show ? 'block' : 'none'}}
         role="alert"
    >
      {children}
    </div>
  );

  if(onDismiss!==undefined){
    if(dismissOnButton){
      alertContainer= (
        <div className={`alert alert-${type} alert-dismissible`}
             style={{display: show ? 'block' : 'none'}}
             role="alert"
        >
          {children}
          <button type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={onDismiss}
          >
          </button>
        </div>
      )
    }else {
      alertContainer= (
        <div className={`alert alert-${type} alert-dismissible`}
             style={{display: show ? 'block' : 'none',cursor:'pointer'}}
             role="alert"
             onClick={onDismiss}
        >
          {children}
        </div>
      )
    }
  }

  return (
    <>
      {alertContainer}
    </>
  );
};

export default Alert;