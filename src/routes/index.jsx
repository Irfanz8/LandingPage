import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts';
import Home from '../pages/Home';
import About from '../components/About';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}