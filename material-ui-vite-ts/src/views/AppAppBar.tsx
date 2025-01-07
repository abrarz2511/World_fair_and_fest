import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'Right' }}>
          <Typography
            variant="h6"
            component="h1"  // Use an appropriate heading tag (h1, h2, etc.)
            sx={{ fontSize: 24, color: 'inherit' }}
          >
            {'World Fair and Fest 2025'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
