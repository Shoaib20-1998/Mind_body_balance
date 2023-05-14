import React, { useEffect, useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

import { exerciseOptions, fetchData } from "./fetch";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      mt={{ lg: "110px" }}
     
      p="20px"
    >
      <Text
        fontWeight="bold"
        fontSize={{ lg: "44px", xs: "30px" }}
        marginBottom="46px"
        color={"white"}
      >
        Exercises you can add to your routine
      </Text>
      <Stack
        direction="row"
       gap={20}
        flexWrap="wrap"
        justifyContent="center"
        
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}  border={"5px solid green"} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;