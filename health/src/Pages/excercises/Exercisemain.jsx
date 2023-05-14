import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Exercises from "./Exercises";

const Exercisemain = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Exercises
       setExercises={setExercises}
       exercises={exercises}
       bodyPart={bodyPart}/>
    </Box>
  );
};

export default Exercisemain;
