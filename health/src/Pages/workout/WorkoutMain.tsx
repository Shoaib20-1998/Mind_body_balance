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
        setWorkouts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleCreateWorkout = (newWorkout: WorkoutType) => {
    axios
      .post(`${API_URL}/workout/post`, newWorkout, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      })
      .then((res) => setWorkouts([...workouts, res.data]))
      .catch((err) => console.log(err));
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
        const updatedWorkouts = workouts.map((workout) => {
          if (workout._id === res.data._id) {
            return res.data;
          } else {
            return workout;
          }
        });
        setWorkouts(updatedWorkouts);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="4">
        {" "}
        Workout Routines{" "}
      </Heading>
      <WorkoutForm onSubmit={handleCreateWorkout} />
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
// import React, { useState, useEffect } from "react";
// import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
// import axios from "axios";
// import Workout from "./Workout";
// import WorkoutForm from "./WorkoutForm";
// import { Workout as WorkoutType } from "./types";

// const API_URL = "https://mindbody.onrender.com";
// const API_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVlOTVmMzVmZmZlYTA0M2FmMzNjMmYiLCJpYXQiOjE2ODM5OTEwODF9.1vDCf2_ZKMlO0BpCSfNeeJDfPE8-rfIHebl60LKfXuo";

// const WorkoutMain = () => {
//   const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/workout`, {
//           headers: { Authorization: `Bearer ${API_TOKEN}` },
//         });
//         setWorkouts(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchWorkouts();
//   }, []);

//   const handleCreateWorkout = async (newWorkout: WorkoutType) => {
//     try {

//       axios({
//         method: "post",
//         url: `${API_URL}/workout/post`,
//         data: newWorkout,
//         headers: { Authorization: `Bearer ${API_TOKEN}` },
//       })

//       const response = await axios.post(`https://mindbody.onrender.com/workout/post`, newWorkout, {
//         headers: {
//           Authorization: `Bearer ${API_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setWorkouts([...workouts, response.data]);
//       console.log(workouts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDeleteWorkout = async (id: string) => {
//     try {
//       await axios.delete(`${API_URL}/workout/delete/${id}`, {
//         headers: {
//           Authorization: `Bearer ${API_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const updatedWorkouts = workouts.filter((workout) => workout._id !== id);
//       setWorkouts(updatedWorkouts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEditWorkout = async (id: string, updatedWorkout: WorkoutType) => {
//     try {
//       const response = await axios.patch(
//         `${API_URL}/workout/patch/${id}`,
//         updatedWorkout,
//         {
//           headers: { Authorization: `Bearer ${API_TOKEN}` },
//         }
//       );
//       const updatedWorkouts = workouts.map((workout) => {
//         if (workout._id === response.data._id) {
//           return response.data;
//         } else {
//           return workout;
//         }
//       });
//       setWorkouts(updatedWorkouts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Box p="4">
//       <Heading as="h1" size="xl" mb="4">
//         Workout Routines
//       </Heading>
//       <WorkoutForm onSubmit={handleCreateWorkout} />
//       <SimpleGrid columns={[1, 2, 3]} spacing="10" color="white" pt="20px">
//         {workouts.map((workout) => (
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
