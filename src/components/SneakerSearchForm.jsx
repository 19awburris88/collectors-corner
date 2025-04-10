import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { searchSneakers } from '../services/kicksApi';

export default function SneakerSearchForm({ onAdd }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    setResult(null);
    setNotFound(false);

    if (!query) return;

    const sneakers = await searchSneakers(query);

    if (sneakers.length > 0) {
      setResult(sneakers[0]); // Just use the first match for now
    } else {
      setNotFound(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      <TextField
        label="Search for a sneaker"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>

      {/* Found Result */}
      {result && (
        <Card sx={{ mt: 3 }}>
          {result.imageUrl && (
            <CardMedia
              component="img"
              height="200"
              image={result.imageUrl}
              alt={result.name}
            />
          )}
          <CardContent>
            <Typography variant="h6">{result.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {result.brand}
            </Typography>
            <Typography variant="caption">
              {result.releaseYear || 'No release year listed'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                onAdd({
                  name: result.name,
                  brand: result.brand || 'Unknown',
                  image: result.imageUrl || '',
                  releaseYear: result.releaseYear || 'N/A',
                });
                setResult(null);
                setQuery('');
              }}
            >
              Add to My Collection
            </Button>
          </CardActions>
        </Card>
      )}

      {/* Not Found Message */}
      {notFound && (
        <Typography sx={{ mt: 2 }} color="error">
          Sneaker not found. Try another name or add manually.
        </Typography>
      )}
    </Box>
  );
}
