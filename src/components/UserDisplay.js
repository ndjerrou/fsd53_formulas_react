import React from 'react';

function UserDisplay({ users, onShowModal }) {
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <div key={idx}>
            <p>
              {user.userName} {user.isVendor && ' - Vendeur OK'}{' '}
              <button onClick={() => onShowModal(user)}>Update user</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UserDisplay;
