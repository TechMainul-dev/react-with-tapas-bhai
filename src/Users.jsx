import { useState } from 'react';
import UserAdd from './UserAdd';
import UserRow from './UserRow';

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
  {
    id: 6,
    fullName: 'Diana Evans',
    age: 29,
    occupation: 'Marketing Manager',
  },
  {
    id: 7,
    fullName: 'Ethan Garcia',
    age: 40,
    occupation: 'Architect',
  },
  {
    id: 8,
    fullName: 'Fiona Harris',
    age: 27,
    occupation: 'Journalist',
  },
  {
    id: 9,
    fullName: 'George Clark',
    age: 33,
    occupation: 'Teacher',
  },
  {
    id: 10,
    fullName: 'Hannah Lewis',
    age: 25,
    occupation: 'Chef',
  },
];

function Users() {
  const [newUser, setNewUser] = useState('');
  const addUser = () => {
    const randomIndex = Math.floor(Math.random() * USERS.length);
    const randomNumber = USERS[randomIndex];
    console.log(randomNumber);

    setNewUser(randomNumber);
  };

  return (
    <div className="p-5">
      <UserAdd users={USERS} onUserAdd={addUser} />
      <UserRow users={USERS.slice(0, 5)} newUser={newUser} />
    </div>
  );
}

export default Users;
