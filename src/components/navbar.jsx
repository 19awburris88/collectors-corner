import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#0f0f0f', borderBottom: '2px solid #00ffae' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            color: '#00ffae',
            textDecoration: 'none',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          COLLECTORS CORNER
        </Typography>

        {/* Nav Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button component={Link} to="/explore" sx={{ color: 'white' }}>
            Explore
          </Button>

          {user ? (
            <>
              <Button component={Link} to="/dashboard" sx={{ color: 'white' }}>
                Dashboard
              </Button>
              <Button onClick={handleLogout} sx={{ color: '#ff4d4d' }}>
                Logout
              </Button>
              <Avatar src={user.avatar} alt={user.name} />
            </>
          ) : (
            <Button component={Link} to="/login" variant="outlined" sx={{ borderColor: '#00ffae', color: '#00ffae' }}>
              Get Started
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
