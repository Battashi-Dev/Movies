import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieSkeleton = () => {
  return (
    <Box h="300px" w="200px" flexShrink={0}>
      <Skeleton h="80%" w="100%" borderRadius="20px" pb={2} />
      <SkeletonText />
    </Box>
  );
};

export default MovieSkeleton;
