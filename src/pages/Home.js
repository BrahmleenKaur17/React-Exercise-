import React, {useState} from 'react';
import {Box} from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from '../components/SearchExercises'; 
import HeroBanner from '../components/HeroBanner';


const Home = () => {
   const [target, setTarget] = useState('all');
   const [exercises, setExercises] = useState([]);
   console.log(target)
  return (
    <Box>
      <HeroBanner />
     <SearchExercises
  setExercises={setExercises}
  target={target}
  setTarget={setTarget}
/>

<Exercises
  exercises={exercises}
  setExercises={setExercises}
  target={target}
/>

      </Box>
  )
}

export default Home