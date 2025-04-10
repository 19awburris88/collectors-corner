import { Box, Typography, Grid } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import SneakerCard from '../components/SneakerCard';
import { fakeSneakers } from '../data/fakeSneakers';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user.name} 👋
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Your Sneaker Collection
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {fakeSneakers.map((sneaker) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={sneaker.id}>
            <SneakerCard sneaker={sneaker} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
