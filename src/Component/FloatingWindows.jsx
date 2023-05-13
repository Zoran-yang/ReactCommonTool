import * as React from 'react';

function FloatingWindow({children, isOpen,}) {

  return (
    <div>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '57%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
            width: '65%',
          }}
        >
          {children}           
        </div>
      )}
    </div>
  );
}

export default FloatingWindow;
