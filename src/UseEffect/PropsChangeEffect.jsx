import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PropsChangeEffect = ({ userId = 1 }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      {user ? <p>{user.name}</p> : <p>Loading...</p>}
    </div>
  );
};

PropsChangeEffect.propTypes = {
  userId: PropTypes.number,
};
