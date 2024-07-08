import { useState } from 'react';
import './index.css';
import UserAdd from './components/UserAdd';
import UserDisplay from './components/UserDisplay';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = newUser => setUsers(prevState => [...prevState, newUser]);

  return (
    <>
      <UserAdd onAddUser={addUser} />
      <UserDisplay users={users} />
    </>
  );
}

export default App;
