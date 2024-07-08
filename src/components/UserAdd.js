import React, { useState } from 'react';

function UserAdd({ onAddUser }) {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
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

    onAddUser(formData);
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
