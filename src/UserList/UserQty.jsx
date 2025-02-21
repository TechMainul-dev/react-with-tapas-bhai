import PropTypes from 'prop-types';

function UserQty({ totalUser }) {
  return (
    <div className="border-b w-max px-2 text-green-600 text-2xl">
      Total User: {totalUser}
    </div>
  );
}

UserQty.propType = {
  TotalUser: PropTypes.number.isRequired,
};

export default UserQty;
