import { useState } from 'react';
import './index.css';
import UserAdd from './components/UserAdd';
import UserDisplay from './components/UserDisplay';
import UserUpdate from './components/UserUpdate';

function App() {
  const [users, setUsers] = useState([]);
  const [modal, showModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = newUser => setUsers(prevState => [...prevState, newUser]);

  const openModal = user => {
    showModal(true);

    setSelectedUser(user);
  };

  const updateUser = updatedUser => {
    setUsers(
      users.map(user => {
        return user.id === updatedUser.id ? updatedUser : user;
      })
    );

    showModal(false);
  };

  return (
    <>
      <UserAdd onAddUser={addUser} />
      <UserDisplay users={users} onShowModal={openModal} />
      {modal && (
        <UserUpdate
          currentUser={selectedUser}
          onUpdateUser={updateUser}
          onCloseModal={() => showModal(false)}
        />
      )}
    </>
  );
}

export default App;
