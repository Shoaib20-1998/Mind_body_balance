import React from "react";
import { Stack, Button, Image, Text } from "@chakra-ui/react";

import BodyPartImage from "../../assets/body-part.png";
import TargetImage from "../../assets/target.png";
import EquipmentImage from "../../assets/equipment.png";

interface ExerciseDetailProps {
  exerciseDetail: {
    bodyPart: string;
    gifUrl: string;
    name: string;
    target: string;
    equipment: string;
  };
}

const Detail: React.FC<ExerciseDetailProps> = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      direction={{ lg: "row" }}
      p="20px"
      alignItems="center"
      color="#ffffff"
    >
      <Image src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack gap={{ lg: "35px", xs: "20px" }}>
        <Text textTransform="capitalize" fontSize="3xl" color="#ffffff">
          {name}
        </Text>
        <Text fontSize="xl" color="#ffffff">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Text>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button
              bg="#FFF2DB"
              borderRadius="50px"
              width="100px"
              height="100px"
            >
              <Image
                src={item.icon}
                alt={bodyPart}
                width="50px"
                height="50px"
              />
            </Button>
            <Text textTransform="capitalize" fontSize="xl" color="#ffffff">
              {item.name}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;