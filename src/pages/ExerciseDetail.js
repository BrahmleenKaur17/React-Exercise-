import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [targetMusclesExercises, setTargetMusclesExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      // 1️⃣ Exercise details
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      if (!exerciseDetailData) return;

      setExerciseDetail(exerciseDetailData);

      // 2️⃣ Similar target muscle exercises
      const targetMusclesExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMusclesExercises(
        Array.isArray(targetMusclesExercisesData)
          ? targetMusclesExercisesData
          : []
      );

      // 3️⃣ Similar equipment exercises
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(
        Array.isArray(equipmentExercisesData)
          ? equipmentExercisesData
          : []
      );
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return null;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />

      {/* NO API – YouTube handled safely */}
      <ExerciseVideos name={exerciseDetail.name} />

      <SimilarExercises
        targetMusclesExercises={targetMusclesExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
