import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { ImageList, ImageListItem } from '@mui/material';
import images from '../resources/images';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 5, mb: 3 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Photo Album
      </Typography>
      <Box sx={{ mt: 7, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageList cols={2} gap={8}>
            {images.map((image)=> (
              <ImageListItem key={image.title}>
                <img
                  src = {`${image.url}?w=164&h=164&fit=crop&auto=format`}
                  alt = {image.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        ))
      }
  
      </Box>
    </Container>
  );
}
