import CarList from './CarList';
import Header from './Header';
import Search from './Search';

function Boimela() {
  return (
    <div className="p-5">
      <Header />
      <Search />
      <CarList />
    </div>
  );
}

export default Boimela;
