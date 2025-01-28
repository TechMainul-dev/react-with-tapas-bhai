import CarRow from './CarRow';

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
function CarList() {
  return (
    <ul className="grid gap-2 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {CARS.map((car) => (
        <li key={car.id} className="border border-slate-300 p-2 rounded-md">
          <CarRow car={car} />
        </li>
      ))}
    </ul>
  );
}

export default CarList;
