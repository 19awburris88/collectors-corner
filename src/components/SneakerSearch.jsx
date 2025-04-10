import { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { searchSneakers } from '../services/kicksApi';

export default function SneakerSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const sneakers = await searchSneakers(query);
    setResults(sneakers);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Search Sneakers from Kicks.dev</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <TextField
          label="Search Sneakers"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        {results.map((sneaker) => (
          <Grid item xs={12} sm={6} md={4} key={sneaker.id}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="subtitle1">{sneaker.name}</Typography>
              <Typography variant="body2" color="text.secondary">{sneaker.brand}</Typography>
              {sneaker.imageUrl && (
                <img
                  src={sneaker.imageUrl}
                  alt={sneaker.name}
                  style={{ width: '100%', borderRadius: 8, marginTop: 10 }}
                />
              )}
              <Typography variant="caption" color="text.secondary">
                {sneaker.retailPrice ? `$${sneaker.retailPrice}` : 'No Price Listed'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
