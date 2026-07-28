import { Box, Skeleton } from "@chakra-ui/react";

const HeroCardSkeleton = () => {
  return (
    <Box flex="0 0 100%">
      <Skeleton
        h={{ base: "300px", md: "500px" }}
        bgSize="cover"
        bgPosition="center"
        borderRadius="lg"
        overflow="hidden"
        objectFit="cover"
      />
    </Box>
  );
};

export default HeroCardSkeleton;
