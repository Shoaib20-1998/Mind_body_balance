import { useState } from 'react';
import { Box, Heading, Text, Input, Button, Flex } from '@chakra-ui/react';
import { Workout as WorkoutType } from './types';

interface WorkoutFormProps {
  onSubmit: (workout: WorkoutType) => void;
}

const WorkoutForm = ({ onSubmit }: WorkoutFormProps) => {
  const [name, setName] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleExerciseChange = (index: number, field: keyof typeof exercises[0], value: string) => {
    const newExercises = [...exercises];
    newExercises[index][field] = value;
    setExercises(newExercises);
  };

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const newExercises = exercises.map(exercise => ({ _id: '', ...exercise }));
  const newWorkout: WorkoutType = { _id: '', name, exercises: newExercises, progress: 0 };
  onSubmit(newWorkout);
  setName('');
  setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
};

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
  };
 


  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" width={"70%"} m="auto">
      <Heading as="h2" size="lg" mb="2" color={"white"}>
        Create New Workout
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Workout Name" value={name} onChange={handleNameChange} mb="2" />
        {exercises.map((exercise, index) => (
          <Box key={index} mb="2">
            <Input
              type="text"
              placeholder="Exercise Name"
              value={exercise.name}
              onChange={event => handleExerciseChange(index, 'name', event.target.value)}
              mb="2"
            />
            <Flex justify="space-between">
              <Input
                type="text"
                placeholder="Sets"
                value={exercise.sets}
                onChange={event => handleExerciseChange(index, 'sets', event.target.value)}
                mr="2"
              />
              <Input
                type="text"
                placeholder="Reps"
                value={exercise.reps}
                onChange={event => handleExerciseChange(index, 'reps', event.target.value)}
                mr="2"
              />
              <Input
                type="text"
                placeholder="Weight"
                value={exercise.weight}
                onChange={event => handleExerciseChange(index, 'weight', event.target.value)}
              />
            </Flex>
          </Box>
        ))}
        <Button onClick={handleAddExercise}  mr={5}  mt={5} >
          Add Exercise
        </Button>
        <Button type="submit" mt={5}>Create Workout</Button>
      </form>
    </Box>
  );
};

export default WorkoutForm;



// import { useState } from 'react';
// import { Box, Heading, FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
// import { Workout as WorkoutType } from './types';

// interface WorkoutFormProps {
//   onSubmit: (workout: WorkoutType) => void;
//   onCancel?: () => void;
//   workout?: WorkoutType;
// }

// const WorkoutForm = ({ onSubmit, onCancel, workout }: WorkoutFormProps) => {
//   const [name, setName] = useState(workout?.name || '');
//   const [progress, setProgress] = useState(workout?.progress || 0);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const newWorkout: WorkoutType = {
//       _id: workout?._id || '',
//       name,
//       exercises: workout?.exercises || [],
//       progress,
//     };
//     onSubmit(newWorkout);
//   };

//   return (
//     <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
//       <Heading as="h2" size="lg" mb="4">
//         {workout ? 'Edit Workout' : 'Add Workout'}
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <FormControl mb="4">
//           <FormLabel>Name</FormLabel>
//           <Input type="text" value={name} onChange={event => setName(event.target.value)} />
//         </FormControl>
//         <FormControl mb="4">
//           <FormLabel>Progress</FormLabel>
//           <Input type="number" value={progress} onChange={event => setProgress(parseInt(event.target.value))} />
//         </FormControl>
//         <Flex justify="flex-end">
//           {onCancel && (
//             <Button mr="2" onClick={onCancel}>
//               Cancel
//             </Button>
//           )}
//           <Button type="submit" colorScheme="blue">
//             {workout ? 'Save' : 'Add'}
//           </Button>
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default WorkoutForm


// import React, { useState } from 'react';
// import { Box, Heading, Text, Input, Button, Flex } from '@chakra-ui/react';
// import { Workout as WorkoutType } from './types';

// interface WorkoutFormProps {
//   onSubmit: (workout: WorkoutType) => void;
// }

// const WorkoutForm = ({ onSubmit }: WorkoutFormProps) => {
//   const [name, setName] = useState('');
//   const [exercises, setExercises] = useState([
//     { name: '', sets: '', reps: '', weight: '' },
//   ]);

//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleExerciseChange = (
//     index: number,
//     field: keyof typeof exercises[0],
//     value: string
//   ) => {
//     const newExercises = [...exercises];
//     newExercises[index][field] = value;
//     setExercises(newExercises);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const newExercises = exercises.map((exercise) => ({
//       _id: '',
//       ...exercise,
//     }));
//     const newWorkout: WorkoutType = {
//       _id: '',
//       name,
//       exercises: newExercises,
//       progress: 0,
//     };
//     onSubmit(newWorkout);
//     setName('');
//     setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
//   };

//   const handleAddExercise = () => {
//     setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
//   };

//   return (
//     <Box borderWidth="1px" borderRadius="lg" p="4" width="70%" m="auto">
//       <Heading as="h2" size="lg" mb="2" color="white">
//         Create New Workout
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           placeholder="Workout Name"
//           value={name}
//           onChange={handleNameChange}
//           mb="2"
//         />
//         {exercises.map((exercise, index) => (
//           <Box key={index} mb="2">
//             <Input
//               type="text"
//               placeholder="Exercise Name"
//               value={exercise.name}
//               onChange={(event) =>
//                 handleExerciseChange(index, 'name', event.target.value)
//               }
//               mb="2"
//             />
//             <Flex justify="space-between">
//               <Input
//                 type="text"
//                 placeholder="Sets"
//                 value={exercise.sets}
//                 onChange={(event) =>
//                   handleExerciseChange(index, 'sets', event.target.value)
//                 }
//                 mr="2"
//               />
//               <Input
//                 type="text"
//                 placeholder="Reps"
//                 value={exercise.reps}
//                 onChange={(event) =>
//                   handleExerciseChange(index, 'reps', event.target.value)
//                 }
//                 mr="2"
//               />
//               <Input
//                 type="text"
//                 placeholder="Weight"
//                 value={exercise.weight}
//                 onChange={(event) =>
//                   handleExerciseChange(index, 'weight', event.target.value)
//                 }
//               />
//             </Flex>
//           </Box>
//         ))}
//         <Button onClick={handleAddExercise} mr={5} mt={5}>
//           Add Exercise
//         </Button>
//         <Button type="submit" mt={5}>
//           Create Workout
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default WorkoutForm;