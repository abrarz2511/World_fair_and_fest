import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../resources/pexels-m-designz-llc-463260-7453905.jpg'
import Box from '@mui/material/Box';
import theme from '../theme';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h5" marked="center">
        Discover Tampa Bay at
      </Typography>
      <Typography color="inherit" align="center" variant="h2" marked="center">
       5th World Fair & Fest 2025
      </Typography>
      <Box
        sx={{
          mt: { xs: 4, sm: 5 },
          mb: 10,
          p: 2, // Padding inside the box
          border: '7px solid',
          borderColor: theme.palette.secondary.main, 
          display: 'inline-block', // Ensures the box fits the content
        }}
      >
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 0, mt: { xs: 0, sm: 2} }}
        >
          26 & 27 April, 2025
        </Typography>
        <Typography variant="h5" color="inherit" sx={{ mt: 2 }}>
          Temple Terrace, Florida
        </Typography>
      </Box>
    </ProductHeroLayout>
  );
}
