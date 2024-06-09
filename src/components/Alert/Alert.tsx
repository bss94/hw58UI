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
  return (
    <>
      {
        onDismiss !== undefined?
          <>
            {dismissOnButton !== undefined && dismissOnButton ?
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
              </div> :
              <div className={`alert alert-${type} alert-dismissible`}
                            style={{display: show ? 'block' : 'none'}}
                            role="alert"
                            onClick={onDismiss}
              >
                {children}
              </div>
            }
          </>
          : <div className={`alert alert-${type} alert-dismissible`}
                 style={{display: show ? 'block' : 'none'}}
                 role="alert"
          >
            {children}
          </div>
      }
    </>
  );
};

export default Alert;