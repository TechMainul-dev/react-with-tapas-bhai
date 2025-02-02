import { useState } from 'react';
import CarList from './CarList';
import Header from './Header';
import Search from './Search';
import Featured from './Featured';

const CARS = [
  {
    id: 1,
    title: 'Luxury Sedan',
    brand: 'Mercedes',
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: 'Family SUV',
    brand: 'Toyota',
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: 'Sports Car',
    brand: 'Porsche',
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: 'Electric Hatchback',
    brand: 'Nissan',
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: 'Luxury SUV',
    brand: 'BMW',
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

function CarShows() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cars, setCars] = useState(CARS);

  const toggleFeatured = (id) => {
    setCars(
      cars.map((car) =>
        car.id === id ? { ...car, featured: !car.featured } : car,
      ),
    );
  };

  return (
    <div className="p-5">
      <Header />
      <Search searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <Featured />
      <CarList
        searchTerm={searchTerm}
        cars={CARS}
        onFeaturedCard={toggleFeatured}
      />
    </div>
  );
}

export default CarShows;
