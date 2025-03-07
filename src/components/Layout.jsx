import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="p-5">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
