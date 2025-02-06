import { useState } from 'react';
import UserAdd from './UserAdd';
import UserList from './UserList';

const USERS = [
  {
    id: 1,
    fullName: 'John Doe',
    age: 28,
    occupation: 'Software Engineer',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    age: 34,
    occupation: 'Graphic Designer',
  },
  {
    id: 3,
    fullName: 'Alice Johnson',
    age: 22,
    occupation: 'Student',
  },
  {
    id: 4,
    fullName: 'Bob Brown',
    age: 45,
    occupation: 'Doctor',
  },
  {
    id: 5,
    fullName: 'Charlie Davis',
    age: 30,
    occupation: 'Data Scientist',
  },
];

function Users() {
  const [users, setUsers] = useState(USERS);
  const addUser = () => {
    const randomIndex = Math.floor(Math.random() * USERS.length);
    const randomUser = USERS[randomIndex];
    randomUser.id = users.length + 1;

    setUsers([...users, randomUser]);
  };

  return (
    <div className="p-5">
      <UserAdd onUserAdd={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default Users;
