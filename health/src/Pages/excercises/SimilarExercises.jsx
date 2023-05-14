import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import HorizontalScrollBar from "./HorizontalScrollbar";
import Loader from "./Loader";

// interface SimilarExercisesProps {
//   targetMuscleExercises: any[];
//   equipmentExercises: any[];
// }

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
}) => {
  return (
    <Box marginTop={{ lg: "100px", xs: "0" }} p="20px" >
      <Text fontSize="3xl" mb={5} color={"white"}>
        Exercises that target the same muscle group
      </Text>
      <Stack direction="row" padding="2" position="relative">
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Text fontSize="3xl" mb={5} color={"white"}>
        Exercises that use the same equipment
      </Text>
      <Stack direction="row" padding="2" position="relative">
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;