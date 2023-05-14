import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Stack, Text } from "@chakra-ui/react";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} width="80%" border='1px' borderColor='green' >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row" gap={5}justifyContent={"center"} m={"20px auto"} width={"100%"}>
        <Button
          //   marginLeft="21px"
        //   m={"5 10"}
          p={2}
          colorScheme="red"
          fontSize="14px"
          //   borderRadius="20px"
          textTransform="capitalize"
        >
          {exercise.bodyPart}
        </Button>
        <Button
          //   marginLeft="21px"
          p={2}
          colorScheme="yellow"
          fontSize="14px"
          //   borderRadius="20px"
        //   m={"5 10"}
          textTransform="capitalize"
        >
          {exercise.target}
        </Button>
      </Stack>
      <Text
        marginLeft="21px"
        color="#ffffff"
        fontWeight="bold"
        marginTop="11px"
        paddingBottom="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Text>
    </Link>
  );
};

export default ExerciseCard;
