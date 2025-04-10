import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

export default function ManualAddForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    image: '',
    releaseYear: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.brand) {
      alert('Name and brand are required');
      return;
    }

    onSubmit({ ...form, id: crypto.randomUUID() });
    setForm({
      name: '',
      brand: '',
      image: '',
      releaseYear: '',
    });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        mb: 4,
        border: '1px dashed #00ffae',
        bgcolor: '#1e1e1e',
        maxWidth: 500,
        mx: 'auto',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add Sneaker Manually
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Brand"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Release Year"
          name="releaseYear"
          value={form.releaseYear}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Add Sneaker
        </Button>
      </Box>
    </Paper>
  );
}
