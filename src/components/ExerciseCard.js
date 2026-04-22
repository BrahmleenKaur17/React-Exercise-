import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button,Typography } from '@mui/material';

import ExerciseImage from './ExerciseImage';


const ExerciseCard = ({ exercise }) => {
     console.log(exercise);
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      
       <div style={{
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  }}>
  <ExerciseImage
    exerciseId={exercise.id}
    alt={exercise.name}
  />
</div>
     

      <Typography
        ml="21px"
        mt="11px"
        pb="10px"
        fontWeight="bold"
        color="#000"
        fontSize="22px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
      <Stack
  direction={{ lg: 'row', xs: 'column' }}
  spacing={1}
  mt="10px"
>
        <Button sx={{ml:'21px', color:'#fff', background:'#ffa9a9', fontSize:'14px', borderRadius:'20px',
            textTransform:'capitalize'
        }}>
            {exercise.bodyPart}

        </Button>
         <Button sx={{ml:'21px', color:'#fff', background:'#fcc757', fontSize:'14px', borderRadius:'20px',
            textTransform:'capitalize'
        }}>
            {exercise.target}

        </Button>

      </Stack>
     
    </Link>
  );
};

export default ExerciseCard;
