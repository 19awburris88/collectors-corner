import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fakeUsers } from '../data/fakeUsers';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
    bio: '',
  });

  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = fakeUsers.find((u) => u.email === form.email);
    if (exists) {
      setError('A user with this email already exists.');
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      ...form,
    };

    fakeUsers.push(newUser);
    login(form.email, form.password);
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Create Your Collector Profile
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Avatar URL"
          name="avatar"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Bio"
          name="bio"
          fullWidth
          multiline
          rows={2}
          margin="normal"
          onChange={handleChange}
        />

        {form.avatar && (
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Avatar src={form.avatar} alt="avatar preview" sx={{ width: 60, height: 60, mx: 'auto' }} />
          </Box>
        )}

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Register & Enter
        </Button>
      </Box>
    </Box>
  );
}
