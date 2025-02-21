import { useState } from 'react';

export default function UserList() {
  const [Users, setUsers] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Mainul',
      address: 'Dhaka',
    },
  ]);

  const changeUser = (id, name) => {
    const newUsers = [...Users];
    const user = newUsers.find((user) => user.id == id);
    user.name = name;

    setUsers(newUsers);
  };

  const addUser = () => {
    const newUser = {
      id: crypto.randomUUID(),
      name: 'Ahnaf',
      address: 'Faridpur',
    };
    setUsers([...Users, newUser]);    
  };

  return (
    <div className="pb-3">
      <h1>User List</h1>

      <ul className="grid gap-2">
        {Users.map((user) => (
          <li key={user.id} className="flex items-center gap-1">
            <p>
              {user.name} lives in {user.address}
            </p>
            <button
              onClick={() => changeUser(user.id, 'Sadia')}
              className="border border-green-400 px-3 py-1 rounded-2xl bg-green-300"
            >
              Change
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => addUser()}
        className="border border-blue-400 px-3 py-1 rounded-2xl bg-blue-400"
      >
        Add
      </button>

      <hr className="mt-3" />
    </div>
  );
}
