import './App.css';
import Header from './Header';
import CarShows from './CarList/CarShows';
import Users from './UserList/Users';
// import UserListImmutable from './immutable/UserList';
import { BasicUsage } from './useFormStatus/BasicUsage';
import { DataUsage } from './useFormStatus/DataUsage';
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

      <br />
      <hr />
      <br />
      <BasicUsage />
      <DataUsage />
    </div>
  );
}

export default App;
