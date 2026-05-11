import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import CarDetails from '../pages/CarDetails';
import Locations from '../pages/Locations';
import Pricing from '../pages/Pricing';
import Subscriptions from '../pages/Subscriptions';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../layouts/MainLayout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/cars" element={<MainLayout><Cars /></MainLayout>} />
      <Route path="/cars/:id" element={<MainLayout><CarDetails /></MainLayout>} />
      <Route path="/locations" element={<MainLayout><Locations /></MainLayout>} />
      <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
      <Route path="/subscriptions" element={<MainLayout><Subscriptions /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
