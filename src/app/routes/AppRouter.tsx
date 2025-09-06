import { Route, Routes } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import { Home } from '../../pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};
