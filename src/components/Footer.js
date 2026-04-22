import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box
      mt="80px"
      bgcolor="#F6D6D6"   // 🌸 light maroon background
      width="100%"
    >
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        py="60px"        // 🔥 use padding instead of pt/pb separately
      >
        <img src={logo} alt="logo" width="200px" height="40px" />

        <Typography variant="h3" color="#800000" textAlign="center">
          “Strong body. Strong mind. Unbreakable will.”
        </Typography>

        <Typography variant="h5" textAlign="center">
          Crafted with passion by Brahmleen Kaur ❤️
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
