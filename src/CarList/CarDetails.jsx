import PropTypes from 'prop-types';

function CarDetails({ title, brand, year, price, isPremium }) {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <ul>
        <li>
          <span className="capitalize font-semibold">brand : </span>
          {brand}
        </li>
        <li>
          <span className="capitalize font-semibold">year : </span>
          {year}
        </li>
        <li>
          <span className="capitalize font-semibold">price : </span>
          {price}
        </li>
        <li>
          <span className="capitalize font-semibold">Premium : </span>
          {isPremium ? 'Yes' : 'No'}
        </li>
      </ul>
    </div>
  );
}

CarDetails.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

export default CarDetails;
