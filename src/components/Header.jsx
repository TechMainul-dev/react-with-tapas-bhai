import { NavLink } from 'react-router-dom';

const Header = () => {
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl mr-2 ${
      isActive
        ? 'bg-amber-600 text-neutral-50'
        : 'hover:bg-amber-600 hover:text-neutral-50'
    }`;

  return (
    <nav className="mb-4 border bg-amber-100 text-neutral-800 border-amber-500 p-3 rounded-xl flex flex-wrap gap-2 w-max mx-auto">
      <NavLink to="/" className={navClass} end>
        Home
      </NavLink>
      <NavLink to="/car-list" className={navClass}>
        Cars
      </NavLink>
      <NavLink to="/users" className={navClass}>
        Users
      </NavLink>
      <NavLink to="/use-effect" className={navClass}>
        UseEffect
      </NavLink>
      <NavLink to="/form-status" className={navClass}>
        Form Status
      </NavLink>
    </nav>
  );
};

export default Header;
