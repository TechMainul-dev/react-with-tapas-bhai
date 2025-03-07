import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
// removed Blog import
import CarShows from './CarList/CarShows';
import Users from './UserList/Users';
import { Basic } from './UseEffect/Basic';
import { BasicUsage } from './useFormStatus/BasicUsage';
import { DataUsage } from './useFormStatus/DataUsage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/car-list" element={<CarShows />} />
          <Route path="/users" element={<Users />} />
          <Route path="/use-effect" element={<Basic />} />
          <Route
            path="/form-status"
            element={
              <>
                <BasicUsage />
                <DataUsage />
              </>
            }
          />
          {/* removed blog route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
