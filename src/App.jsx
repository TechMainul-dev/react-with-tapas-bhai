import './App.css';
import Header from './Header';
import CarShows from './CarList/CarShows';
import Users from './UserList/Users';
// import UserListImmutable from './immutable/UserList';
import { Basic } from './UseEffect/Basic';

function App() {
  return (
    <div className="p-5">
      <Header />
      {/* <UserListImmutable /> */}
      <CarShows />
      <hr />
      <Users />
      <Basic />
    </div>
  );
}

export default App;
