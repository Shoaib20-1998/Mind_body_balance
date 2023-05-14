import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

interface ExerciseVideosProps {
  exerciseVideos: {
    video: {
      videoId: string;
      thumbnails: {
        url: string;
      }[];
      title: string;
      channelName: string;
    };
  }[];
  name: string;
}

const ExerciseVideos: React.FC<ExerciseVideosProps> = ({
  exerciseVideos,
  name,
}) => {
  console.log(exerciseVideos);

//   if (!exerciseVideos.length) return <Text>Loading ...</Text>;

  return (
    <Box marginTop={{ lg: "200px", xs: "20px" }} p="20px" color={"white"}>
      <Text fontSize="3xl" mb="33px" color={"white"}>
        Watch{" "}
        <span style={{ color: "#ffffff", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos :
      </Text>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        direction={{ lg: "row" }}
        gap={{ lg: "110px", xs: "0px" }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            color="white"
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Text fontSize="xl" color="#ffffff">
                {item.video.title}
              </Text>
              <Text fontSize="lg" color="#ffffff">
                {item.video.channelName}
              </Text>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;