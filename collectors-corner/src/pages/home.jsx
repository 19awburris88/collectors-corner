import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

const featuredSneakers = [
  {
    name: 'Kenneth',
    image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Toe-Product.jpg',
  },
  {
    name: 'Austin',
    image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Zebra-2022-Product.jpg',
  },
  {
    name: 'Geordan',
    image: 'https://images.stockx.com/images/Nike-SB-Dunk-Low-Travis-Scott-Product.jpg',
  },
  {
    name: 'Chan',
    image: 'https://images.stockx.com/images/Nike-Air-Max-97-Silver-Bullet-2022-Product.jpg',
  },
  {
    name: 'Randy',
    image: 'https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg',
  },
  {
    name: 'Darius',
    image: 'https://images.stockx.com/images/Air-Jordan-4-Retro-Fire-Red-2020-Product.jpg',
  },
];

export default function Home() {
  return (
    <Box sx={{ py: 6, textAlign: 'center' }}>
      {/* Hero Section */}
      <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
        Show off your kicks 👟
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Discover heat, build your profile, and flex your rotation.
      </Typography>
      <Button
  variant="contained"
  color="primary"
  size="large"
  component={Link}
  to="/register"
  sx={{ mb: 6 }}
>
  Get Started
</Button>

      {/* Trending Section */}
      <Typography variant="h5" fontWeight="medium" sx={{ mb: 3 }}>
        Trending Collections
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {featuredSneakers.map((sneaker, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 3,
                border: '1px solid #00ffae',
                boxShadow: 4,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={sneaker.image}
                alt={sneaker.name}
              />
              <CardContent>
                <Typography variant="body1">{sneaker.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* What We Offer */}
      <Divider sx={{ bgcolor: '#00ffae', mx: 'auto', width: '60%' }} />
      <Box sx={{ my: 6, px: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Why Collectors Corner?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#00ffae">
              🎯 Personalized Profiles
            </Typography>
            <Typography color="text.secondary">
              Create a profile, curate your collection, and share your rotation with the world.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#00ffae">
              🔍 Real Sneaker Data
            </Typography>
            <Typography color="text.secondary">
              Integrated with Kicks.dev & StockX — add sneakers straight from the market.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#00ffae">
              🚀 Collector Culture
            </Typography>
            <Typography color="text.secondary">
              Explore heat, see what others are rocking, and rep your grails.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Promo / Ad Banner */}
      <Paper
        elevation={5}
        sx={{
          bgcolor: '#1e1e1e',
          p: 4,
          mt: 6,
          mx: 'auto',
          border: '2px dashed #00ffae',
          maxWidth: 1000,
        }}
      >
        <Typography variant="h5" fontWeight="medium" color="#00ffae" gutterBottom>
          🔥 Limited Drop: More Smoke x Collectors Corner
        </Typography>
        <Typography color="text.secondary">
          Stay tuned for exclusive cigar + sneaker collector packs dropping soon.
        </Typography>
      </Paper>

      {/* Final CTA */}
      <Button
        variant="outlined"
        size="large"
        component={Link}
        to="/explore"
        sx={{ mt: 6, borderColor: '#00ffae', color: '#00ffae' }}
      >
        Explore Community
      </Button>
    </Box>
  );
}
