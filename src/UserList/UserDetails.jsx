import PropTypes from 'prop-types';
import { Fragment } from 'react';

function UserDetails({ fullName, age, occupation }) {
  const liClassNames = 'inline-block capitalize font-semibold';
  return (
    <Fragment>
      <span className={liClassNames}>FullName </span>: {fullName}
      <span className={liClassNames}>Age </span>: {age}
      <span className={liClassNames}>Occupation </span>: {occupation}
    </Fragment>
  );
}

UserDetails.propTypes = {
  fullName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
};

export default UserDetails;
