import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content vertically
  textAlign: 'center',
  height: '100%', // Ensure it takes up full height inside the container
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', minHeight: '500vh', bgcolor: 'secondary.light',  mt: { xs: 4, md: 15 } }} // Full viewport height
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '150vh', // Full height container
        }}
      >
        <Box sx={item}>
          <Typography variant="h3" sx={{ my: 5 }} marked = "center" component="h4">
            About
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 1000 }}>
            {
              <>
                <p>
                  World Fair and Fest USA is one of the International events which was firstly inaugurated last year from 9th -12th June, 2022 at Legency Event Hall Orlando, Florida, USA. The former member of the Florida House of Representatives, Daisy Morales, honored the event with her presence. Despite the covid situation in 2022, the Association of World Fair & Fest USA successfully managed to conduct the event under the great leadership of the Association Directors, Country Representatives, and committee members of the event. The team of the World Fair & Fest USA has done a tremendous job to make the event a success. After completing the World Fest event in 2022, it was unanimously decided among the Association members of the World Fest that the World Fair and Fest USA event would be organized every year in different parts of the USA.

                </p>
                <p>
                  The purpose of organizing the World Fair and Fest USA is to bring hundreds of professionals, companies, agencies, small businesses, recruiters, policymakers, social workers, the tourism sector, hosts, wedding event planners, transportation, garments and textile, import-export, trade, fashion, IT & ITS, technology, e-commerce, manufacturing, electronics, construction, agriculture, education, pharmaceuticals, food and beverage, investors, health and medical sectors, entertainment, press-media, scholars, and many official sectors together to build connections for B2B or B2C. This event is not just a conference or exhibition; it is a network of people from different nationalities and backgrounds to exchange ideas and celebrate a jubilant event together.

                </p>
                <p>
                  In 2023, under the leadership of the Association members and two conveners, it was decided that the World Fair and Fest USA 2023 would be organized two times, under the names World Fair and Fest New York 2023 and World Fair and Fest Clearwater 2023. The 2nd World Fair and Fest New York 2023 will be held on 05th & 06th August, 2023, at Gulshan Terrace, 59-15 37th Ave, Woodside, NY 11377, United States. The 3rd World Fair and Fest Clearwater will be organized on the 25th & 26th November, 2023, at Holiday Inn Hotel & Suites, 521 S, Gulfview Boulevard, Clearwater Beach, Florida, 33767, USA. Every year, the Association of World Fair and Fest aims to invite more foreign delegates from all over the world to join the event as partners, country representatives, advisors, exhibitors, or participants. As quoted, 'The best events aren’t just memorable, they aren’t just beautiful, they accomplish a goal,' and that is what World Fair & Fest USA aims to achieve by bringing everyone together for a purpose.
                </p>
              </>
            } 
          </Typography>
          
        </Box>
        <Box
          sx={{
            width: '100%', // Make it full-width
            maxWidth: 1000, // Max width for the box
            height: '150px', // Define the height
            backgroundColor: 'secondary.main', // Solid color (change based on your theme)
            borderRadius: '16px', // Rounded corners
            my: 4, // Margin Y (adds space between the two text boxes)
          }}
        />
        <Box sx = {item}>
          <Typography variant="h3" marked = "center" sx={{ my: 5 }}>
            Association of World Fair & Fest USA
          </Typography>
          <Typography variant="h4" sx={{ my: 5 }}>
            Founders
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 1000 }}>
            {
              <>
                <p>
                  The World Fair and Fest USA team consists of the following members:
                </p>
              </>
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductValues;
