import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
  } from '@mui/material';
  import { fakeReleases } from '../data/fakeReleases';
  
  export default function ReleaseDates() {
    return (
      <Box sx={{ px: 4, py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Sneaker Release Dates 2025 🗓️
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          Welcome to Collectors Corner’s Sneaker Release Dates page, your destination for the most accurate and up-to-date sneaker drops. This calendar highlights top releases from Nike, Adidas, Jordan, and more — including price, date, and images. Whether you're chasing grails or just browsing heat, we’ve got you covered all year.
        </Typography>
  
        {Object.entries(fakeReleases).map(([month, sneakers]) =>
          sneakers.length > 0 ? (
            <Box key={month} sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {month}
              </Typography>
              <Grid container spacing={3}>
                {sneakers.map((s) => (
                  <Grid item key={s.id} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                      <CardMedia component="img" height="200" image={s.image} alt={s.name} />
                      <CardContent>
                        <Typography variant="h6" noWrap>
                          {s.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {s.brand}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Releases: {new Date(s.releaseDate).toDateString()}
                        </Typography>
                        <Typography variant="body2" color="primary">
                          ${s.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : null
        )}
      </Box>
    );
  }
  