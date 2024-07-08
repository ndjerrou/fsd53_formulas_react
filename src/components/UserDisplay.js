import React from 'react';

function UserDisplay({ users }) {
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <div key={idx}>
            <p>
              {user.userName} {user.isVendor && ' - Vendeur OK'}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UserDisplay;
