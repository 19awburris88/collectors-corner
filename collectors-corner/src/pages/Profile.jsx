import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button,
  Divider,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import SneakerCard from '../components/SneakerCard';
import SneakerSearchForm from '../components/SneakerSearchForm';
import ManualAddForm from '../components/ManualAddForm';

export default function Profile() {
  const { user } = useAuth();
  const [collection, setCollection] = useState([]);
  const [showManualForm, setShowManualForm] = useState(false);

  if (!user) return <Navigate to="/login" />;

  const addSneaker = (sneaker) => {
    setCollection((prev) => [...prev, { ...sneaker, id: crypto.randomUUID() }]);
  };

  const updateSneaker = (updated) => {
    setCollection((prev) =>
      prev.map((sneaker) => (sneaker.id === updated.id ? updated : sneaker))
    );
  };

  const deleteSneaker = (id) => {
    setCollection((prev) => prev.filter((sneaker) => sneaker.id !== id));
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* User Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Avatar src={user.avatar} alt={user.name} sx={{ width: 80, height: 80 }} />
        <Box>
          <Typography variant="h5">{user.name}</Typography>
          <Typography color="text.secondary">{user.bio}</Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Add Buttons */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <SneakerSearchForm onAdd={addSneaker} />
        <Button variant="outlined" onClick={() => setShowManualForm(true)}>
          Add Manually
        </Button>
      </Box>

      {/* Manual Add Form */}
      {showManualForm && (
        <ManualAddForm
          onSubmit={(sneaker) => {
            addSneaker(sneaker);
            setShowManualForm(false);
          }}
        />
      )}

      {/* Collection Grid */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Your Collection
      </Typography>
      {collection.length === 0 ? (
        <Typography color="text.secondary">
          No sneakers yet. Add something!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {collection.map((sneaker) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={sneaker.id}>
              <SneakerCard
                sneaker={sneaker}
                onDelete={() => deleteSneaker(sneaker.id)}
                onUpdate={updateSneaker}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
