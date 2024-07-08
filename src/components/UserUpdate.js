import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function UserUpdate({ currentUser, onUpdateUser, onCloseModal }) {
  const [formData, setFormData] = useState(currentUser);
  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onUpdateUser(formData);
  };

  return createPortal(
    <div>
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
        onClick={onCloseModal}
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
          onClick={e => e.stopPropagation()}
        >
          <h1>Update a user</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username
              <input
                name='userName'
                type='text'
                value={formData.userName}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <button>Update !</button>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal__update')
  );

  // return (
  //   <div style={{ position: 'relative' }}>
  //     <div
  //       style={{
  //         opacity: 0.8,
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         right: 0,
  //         bottom: 0,
  //         background: 'gray',
  //       }}
  //       onClick={onCloseModal}
  //     >
  //       <div
  //         style={{
  //           position: 'absolute',
  //           top: '50%',
  //           left: '50%',
  //           transform: 'translate(-50%, -50%)',
  //           background: 'white',
  //           padding: 10,
  //         }}
  //       >
  //         <h1>Update a user</h1>
  //         <form onSubmit={handleSubmit}>
  //           <label>
  //             Username
  //             <input
  //               name='userName'
  //               type='text'
  //               value={formData.userName}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <label>
  //             Password
  //             <input
  //               name='password'
  //               type='password'
  //               value={formData.password}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <button>Update !</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default UserUpdate;
