import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            2026-YTT Dossier
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/timeline">
            Timeline
          </Button>
          <Button color="inherit" component={RouterLink} to="/evidence">
            Evidence
          </Button>
          <Button color="inherit" component={RouterLink} to="/suspension-analysis">
            Suspension Analysis
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
