import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SneakerCard({ sneaker, onDelete, onUpdate }) {
  return (
    <Card
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid #00ffae',
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={sneaker.image}
        alt={sneaker.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6">{sneaker.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {sneaker.brand} — {sneaker.releaseYear}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Edit">
          <IconButton color="primary" onClick={() => onUpdate(sneaker)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
