import PropTypes from 'prop-types';
import CarRow from './CarRow';

function CarList({ cars }) {
  return (
    <ul className="grid gap-2 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {cars.map((car) => (
        <li key={car.id} className="border border-slate-300 p-2 rounded-md">
          <CarRow car={car} />
        </li>
      ))}
    </ul>
  );
}

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
