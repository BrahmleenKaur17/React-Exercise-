import React, { useEffect, useState } from "react";
import { exerciseOptions } from "../utils/fetchData";

const ExerciseImage = ({ exerciseId, alt }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (!exerciseId) return;

    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/image?resolution=360&exerciseId=${exerciseId}`,
          exerciseOptions
        );

        if (!response.ok) return;

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to load exercise image", error);
      }
    };

    fetchImage();
  }, [exerciseId]);

  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
       style={{
    width: '100%',
    maxHeight: '300px',
    objectFit: 'contain',
  }}
    />
  );
};

export default ExerciseImage;
