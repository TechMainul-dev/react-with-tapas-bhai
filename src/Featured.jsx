import { useState } from 'react';
import PropTypes from 'prop-types';

function Featured({ onFeaturedCar }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onFeaturedCar(newCheckedState);
  };

  return (
    <label
      htmlFor="showPremium"
      className="content-center cursor-pointer ms-2 "
    >
      <input
        onClick={() => handleCheckboxChange()}
        id="showPremium"
        type="checkbox"
        className="me-1 cursor-pointer"
        placeholder="Search cars..."
      />
      <span>Show Premium Only</span>
    </label>
  );
}

Featured.propTypes = {
  onFeaturedCar: PropTypes.func.isRequired,
};

export default Featured;
