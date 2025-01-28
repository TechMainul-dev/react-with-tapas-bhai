import CarDetails from './CarDetails';
import PropTypes from 'prop-types';

function CarRow({ car }) {
  return (
    <div className="flex justify-between items-center">
      <CarDetails
        title={car.title}
        brand={car.brand}
        year={car.year}
        price={car.price}
        isPremium={car.isPremium}
      />
    </div>
  );
}

CarRow.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }),
};

export default CarRow;
