// import { useState, useEffect } from "react";
// import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
// import axios from "axios";
// import Workout from "./Workout";
// import WorkoutForm from "./WorkoutForm";
// import { Workout as WorkoutType } from "./types";
// import { log } from "console";

// const API_URL = "https://mindbody.onrender.com";
// const API_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVlOTVmMzVmZmZlYTA0M2FmMzNjMmYiLCJpYXQiOjE2ODM5OTEwODF9.1vDCf2_ZKMlO0BpCSfNeeJDfPE8-rfIHebl60LKfXuo";

// const WorkoutMain = () => {
//   const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/workout`, {
//         headers: { Authorization: `Bearer ${API_TOKEN}` },
//       })
//       .then((res) => {
//         setWorkouts(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleCreateWorkout = (newWorkout: WorkoutType) => {
//     let obj={name: newWorkout.name,
//       exercises:newWorkout.exercises}
//       // console.log()
//     axios
//       .post(`${API_URL}/workout/post`, obj, {
//         headers: { Authorization: `Bearer ${API_TOKEN}` },
//       })
//       .then((res) => {
//         setWorkouts([...workouts, res.data]);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err, "from error"));
//   };

//   const handleDeleteWorkout = (id: string) => {
//     axios
//       .delete(`${API_URL}/workout/delete/${id}`, {
//         headers: { Authorization: `Bearer ${API_TOKEN}` },
//       })
//       .then((res) => {
//         const updatedWorkouts = workouts.filter(
//           (workout) => workout._id !== id
//         );
//         setWorkouts(updatedWorkouts);
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleEditWorkout = (id: string, updatedWorkout: WorkoutType) => {
//     axios
//       .patch(`${API_URL}/workout/patch/${id}`, updatedWorkout, {
//         headers: { Authorization: `Bearer ${API_TOKEN}` },
//       })
//       .then((res) => {
//         const updatedWorkouts = workouts.map((workout) => {
//           if (workout._id === res.data._id) {
//             return res.data
//           } else {
//             return workout;
//           }
//         });
//         setWorkouts(updatedWorkouts);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Box p="4">
//       <Heading as="h1" size="xl" mb="4">
//         Workout Routines
//       </Heading>
//       <WorkoutForm onSubmit={handleCreateWorkout} />
//       <SimpleGrid columns={[1, 2, 3]} spacing="10" color={"white"} pt={"20px"}>
//         {workouts && workouts.map((workout) => (
//           <Workout
//             key={workout._id}
//             workout={workout}
//             onDelete={handleDeleteWorkout}
//             onEdit={handleEditWorkout}
//           />
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default WorkoutMain;









import { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Workout from "./Workout";
import WorkoutForm from "./WorkoutForm";
import { Workout as WorkoutType } from "./types";

const API_URL = "https://mindbody.onrender.com";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVlOTVmMzVmZmZlYTA0M2FmMzNjMmYiLCJpYXQiOjE2ODM5OTEwODF9.1vDCf2_ZKMlO0BpCSfNeeJDfPE8-rfIHebl60LKfXuo";

const WorkoutMain = () => {
  const [workouts, setWorkouts] = useState<WorkoutType[]>([]);
 
  useEffect(() => {
    axios
      .get(`${API_URL}/workout`, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((res) => {
        const newWorkouts = res.data.map((workout: WorkoutType) => {
          if (workout._id) {
            return workout;
          } else {
            const { _id, ...rest } = workout;
            console.log("132" ,workout._id)
            return rest;
          }
         
        });
        setWorkouts(newWorkouts);
        console.log(newWorkouts);
      })
      .catch((err) => console.log(err));
  }, [workouts]);
  const handleCreateWorkout = (newWorkout: WorkoutType) => {
    const obj = {
      name: newWorkout.name,
      exercises: newWorkout.exercises,
    };
    axios
      .post(`${API_URL}/workout/post`, obj, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((res) => {
        const createdWorkout = res.data;
        if (createdWorkout._id) {
          setWorkouts([...workouts, createdWorkout]);
        } else {
          const { _id, ...rest } = createdWorkout;
          setWorkouts([...workouts, rest]);
        }
        console.log(createdWorkout);
      })
      .catch((err) => console.log(err, "from error"));
  };

  const handleDeleteWorkout = (id: string) => {
    axios
      .delete(`${API_URL}/workout/delete/${id}`, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((res) => {
        const updatedWorkouts = workouts.filter(
          (workout) => workout._id !== id
        );
        setWorkouts(updatedWorkouts);
      })
      .catch((err) => console.log(err));
  };

  const handleEditWorkout = (id: string, updatedWorkout: WorkoutType) => {
    axios
      .patch(`${API_URL}/workout/patch/${id}`, updatedWorkout, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((res) => {
        const updatedWorkouts = workouts.map((workout) =>
          workout._id === res.data._id ? res.data : workout
        );
        setWorkouts(updatedWorkouts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box p="4">
    <Heading as="h1" size="xl" mb="4">
      Workout Routines
    </Heading>
    <WorkoutForm onSubmit={(newWorkout) => handleCreateWorkout({...newWorkout, _id: ''})} />
    <SimpleGrid columns={[1, 2, 3]} spacing="10" color={"white"} pt={"20px"}>
      {workouts.map((workout) => (
        <Workout
          key={workout._id}
          workout={workout}
          onDelete={handleDeleteWorkout}
          onEdit={handleEditWorkout}
        />
      ))}
    </SimpleGrid>
  </Box>
  );
};

export default WorkoutMain;




// import { useState, useEffect } from 'react';
// import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
// import axios from 'axios';
// import Workout from './Workout';
// import WorkoutForm from './WorkoutForm';
// import { Workout as WorkoutType } from './types';

// const API_URL = 'https://mindbody.onrender.com';
// const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVlOTVmMzVmZmZlYTA0M2FmMzNjMmYiLCJpYXQiOjE2ODM5OTEwODF9.1vDCf2_ZKMlO0BpCSfNeeJDfPE8-rfIHebl60LKfXuo';

// const WorkoutMain = () => {
//   const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

//   useEffect(() => {
//     axios.get(`${API_URL}/workout`, { headers: { Authorization: `Bearer ${API_TOKEN}` } })
//       .then(res => setWorkouts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleCreateWorkout = (newWorkout: WorkoutType) => {
//     axios.post(`${API_URL}/workout/post`, newWorkout, { headers: { Authorization: `Bearer ${API_TOKEN}` } })
//       .then(res => setWorkouts([...workouts, res.data]))
//       .catch(err => console.log(err));
//   };

//   const handleDeleteWorkout = (id: string) => {
//     axios.delete(`${API_URL}/workout/delete/${id}`, { headers: { Authorization: `Bearer ${API_TOKEN}` } })
//       .then(res => {
//         const updatedWorkouts = workouts.filter(workout => workout._id !== id);
//         setWorkouts(updatedWorkouts);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleEditWorkout = (id: string, updatedWorkout: WorkoutType) => {
//     axios.patch(`${API_URL}/workout/patch/${id}`, updatedWorkout, { headers: { Authorization: `Bearer ${API_TOKEN}` } })
//       .then(res => {
//         const updatedWorkouts = workouts.map(workout => {
//           if (workout._id === res.data._id) {
//             return res.data;
//           } else {
//             return workout;
//           }
//         });
//         setWorkouts(updatedWorkouts);
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <Box p="4">
//       <Heading as="h1" size="xl" mb="4">
//         Workout Routines
//       </Heading>
//       <SimpleGrid columns={[1, 2, 3]} spacing="4">
//         {workouts.map(workout => (
//           <Workout key={workout._id} workout={workout} onDelete={handleDeleteWorkout} onEdit={handleEditWorkout} />
//         ))}
//       </SimpleGrid>
//       <WorkoutForm onSubmit={handleCreateWorkout} />
//     </Box>
//   );
// };

// export default WorkoutMain;



//   { "name":"Back Workout",
//   "exercises":
//   [
//     {
//       "name":"Biceps",
//       "sets":"3",
//       "reps":"10",
//       "weight":"10"

//     },
//     {
//      "name":"tricep",
//       "sets":"3",
//       "reps":"10",
//       "weight":"10"

//     }
//    ]

// }
