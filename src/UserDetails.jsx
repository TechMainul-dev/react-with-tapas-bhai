import PropTypes from 'prop-types';

function UserDetails({ fullName, age, occupation }) {
  const liClassNames = 'inline-block capitalize font-semibold min-w-[85px]';
  return (
    <div>
      <ul>
        <li>
          <span className={liClassNames}>FullName </span>: {fullName}
        </li>
        <li>
          <span className={liClassNames}>Age </span>: {age}
        </li>
        <li>
          <span className={liClassNames}>Occupation </span>: {occupation}
        </li>
      </ul>
    </div>
  );
}

UserDetails.propTypes = {
  fullName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
};

export default UserDetails;
