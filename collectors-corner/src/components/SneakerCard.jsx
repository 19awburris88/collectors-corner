import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function SneakerCard({ sneaker }) {
  return (
    <Card sx={{ maxWidth: 280, bgcolor: 'background.paper', borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={sneaker.image}
        alt={sneaker.name}
      />
      <CardContent>
        <Typography variant="h6" noWrap>{sneaker.name}</Typography>
        <Typography variant="body2" color="text.secondary">{sneaker.brand}</Typography>
        <Typography variant="caption" color="text.secondary">Released: {sneaker.releaseYear}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small" color="error">Delete</Button>
      </CardActions>
    </Card>
  );
}
