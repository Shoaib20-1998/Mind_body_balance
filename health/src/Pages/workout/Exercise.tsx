import { Box, Heading, Text } from '@chakra-ui/react';
import { Exercise as ExerciseType } from './types';

interface ExerciseProps {
  exercise: ExerciseType;
}

const Exercise = ({ exercise }: ExerciseProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Heading as="h3" size="md" mb="2" color="white">
        {exercise.name}
      </Heading>
      <Text>
        Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
      </Text>
    </Box>
  );
};

export default Exercise;

