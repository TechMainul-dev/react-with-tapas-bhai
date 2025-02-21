import PropTypes from 'prop-types';
import { Plus } from 'lucide-react';

function UserAdd({ onUserAdd }) {
  return (
    <a
      onClick={() => onUserAdd()}
      className="border px-5 py-2 ms-auto rounded-2xl bg-green-700 hover:bg-green-800 text-lime-50 cursor-pointer flex gap-1 w-min"
    >
      UserAdd <Plus />
    </a>
  );
}

UserAdd.propTypes = {
  onUserAdd: PropTypes.func.isRequired,
};

export default UserAdd;
