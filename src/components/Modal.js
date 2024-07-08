import React from 'react';

function Modal() {
  return (
    <div
      style={{
        opacity: 0.8,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'gray',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: 10,
        }}
      >
        <h1>Modal</h1>
        <form></form>
      </div>
    </div>
  );
}

export default Modal;
