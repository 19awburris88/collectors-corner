// src/App.jsx
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register'; 
import Profile from './pages/Profile';
import ReleaseDates from './pages/ReleaseDates';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/releases" element={<ReleaseDates />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
