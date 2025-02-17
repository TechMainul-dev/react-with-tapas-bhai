import PropTypes from 'prop-types';
import UserRow from './UserRow';

function UserList({ users }) {
  const rows = users.map((user) => <UserRow key={user.id} user={user} />);

  return (
    <div className="grid gap-2 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {rows}
    </div>
  );
}

UserList.protoTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
