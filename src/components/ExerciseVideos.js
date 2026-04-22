import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ExerciseVideos = ({ name }) => {
  if (!name) return null;

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${name} exercise`
  )}`;

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb="20px">
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>

      <Button
        variant="contained"
        color="error"
        size="large"
        href={youtubeSearchUrl}
        target="_blank"
        rel="noreferrer"
      >
        Watch on YouTube
      </Button>
    </Box>
  );
};

export default ExerciseVideos;
