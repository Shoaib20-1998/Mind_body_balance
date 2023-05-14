import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Workout as WorkoutType } from "./types";

import Exercise from "./Exercise";

interface WorkoutProps {
  workout: WorkoutType;
  onDelete: (_id: string) => void;
  onEdit: (_id: string, updatedWorkout: WorkoutType) => void;
}

const Workout = ({ workout, onDelete }: WorkoutProps) => {
  const handleDelete = () => {
    onDelete(workout._id!!);
  };
  // const { _id: string } = workout;
  console.log("wokout", workout);
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
      <Flex justify="space-between" align="center" mb="2">
        <Heading as="h2" size="lg">
          {workout.name}
        </Heading>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </Flex>
      <Text mb="2">Progress: {workout.progress || 0}%</Text>
      {workout.exercises &&
        workout.exercises.map((exercise) => (
          <Exercise key={exercise._id} exercise={exercise} />
        ))}
    </Box>
  );
};

export default Workout;




















// import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
// import { Workout as WorkoutType } from './types';

// import Exercise from './Exercise';
// import WorkoutForm from './WorkoutForm';

// interface WorkoutProps {
//   workout: WorkoutType;
//   onDelete: (id: string) => void;
//   onEdit: (id: string, updatedWorkout: WorkoutType) => void;
// }

// const Workout = ({ workout, onDelete }: WorkoutProps) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedWorkout, setEditedWorkout] = useState(workout);

//   const handleDelete = () => {
//     onDelete(workout._id);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     onEdit(workout._id, editedWorkout);
//   };

//   return (
//     <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
//       <Flex justify="space-between" align="center" mb="2">
//         <Heading as="h2" size="lg">
//           {workout.name}
//         </Heading>
//         {isEditing ? (
//           <Button colorScheme="red" onClick={handleDelete}>
//             Delete
//           </Button>
//         ) : (
//           <Button colorScheme="primary" onClick={handleEdit}>
//             Edit
//           </Button>
//         )}
//       </Flex>
//       <Text mb="2">Progress: {workout.progress || 0}%</Text>
//       {workout.exercises.map(exercise => (
//         <Exercise key={exercise._id} exercise={exercise} />
//       ))}
//       {isEditing ? (
//         <WorkoutForm
//         workout={editedWorkout}
//         onSubmit={handleSave}
//         />
//       ) : null}
//     </Box>
//   );
// };

// export default Workout;
