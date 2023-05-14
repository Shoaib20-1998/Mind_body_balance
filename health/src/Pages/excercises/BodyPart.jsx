import React from "react";
import { Stack, Text } from "@chakra-ui/react";

import Icon from "../../assets/gym.png";

// interface BodyPartProps {
//   item: string;
//   setBodyPart: React.Dispatch<React.SetStateAction<string>>;
//   bodyPart: string;
// }

const BodyPart= ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      as="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      borderWidth={bodyPart === item ? "4px" : "0"}
      borderColor="#a34545"
      backgroundColor="#FFF"
      width="270px"
      height="280px"
      cursor="pointer"
      spacing="47px"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Text
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Text>
    </Stack>
  );
};

export default BodyPart;