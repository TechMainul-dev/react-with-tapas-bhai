import PropTypes from 'prop-types';
import CarRow from './CarRow';

function CarList({ searchTerm, cars }) {
  const rows = [];
  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1)
      return;

    rows.push(<CarRow key={car.id} car={car} />);
  });

  return (
    <div className="grid gap-2 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {rows}
    </div>
  );
}

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
  // onFeaturedCar: PropTypes.bool.isRequired,
};

export default CarList;
