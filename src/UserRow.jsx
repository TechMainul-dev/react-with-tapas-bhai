import PropTypes from 'prop-types';
import UserDetails from './UserDetails';

function UserRow({ user }) {
  return (
    <div className="border border-slate-300 p-2 rounded-md grid grid-cols-[90px_1fr]">
      <UserDetails
        fullName={user.fullName}
        age={user.age}
        occupation={user.occupation}
      />
    </div>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
  }),
};

export default UserRow;
