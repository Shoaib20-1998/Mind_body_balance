import React from "react";
import { Stack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Spinner color="gray" />
    </Stack>
  );
};

export default Loader;