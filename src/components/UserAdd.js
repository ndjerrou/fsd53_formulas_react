import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UserAdd({ onAddUser }) {
  const [formData, setFormData] = useState({
    userName: 'Marc',
    password: 'Marc',
    isVendor: true,
  });

  const handleChange = e => {
    const { name, checked, type, value } = e.target;

    // setFormData(prevState => {
    //   return {
    //     ...prevState,
    //     [name]: type === 'text' ? value : checked,
    //   };
    // });

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'text' || type === 'password' ? value : checked,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddUser({ ...formData, id: uuidv4() });
  };
  return (
    <div>
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
        <label>
          Souhaitez-vous être vendeur ?
          <input
            name='isVendor'
            type='checkbox'
            checked={formData.isVendor}
            onChange={handleChange}
          />
        </label>
        <button>Je m'inscris</button>
      </form>
    </div>
  );
}

export default UserAdd;
