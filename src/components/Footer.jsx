import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import ThreadsIcon from '@mui/icons-material/Forum'; // no official Threads icon yet, but this works

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        textAlign: 'center',
        borderTop: '2px solid #00ffae',
        bgcolor: '#0f0f0f',
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} Collectors Corner — All Rights Reserved
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <IconButton
          component="a"
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <XIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://threads.net/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <ThreadsIcon />
        </IconButton>
      </Box>

      <MuiLink
        href="https://github.com/austinburris"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        sx={{ color: '#00ffae', mx: 1 }}
      >
        GitHub
      </MuiLink>
      <MuiLink href="#" underline="hover" sx={{ color: '#00ffae', mx: 1 }}>
        Privacy
      </MuiLink>
      <MuiLink href="#" underline="hover" sx={{ color: '#00ffae', mx: 1 }}>
        Terms
      </MuiLink>
    </Box>
  );
}
