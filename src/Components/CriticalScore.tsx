import { Badge, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props {
  score: number;
}
const CriticalScore = ({ score }: Props) => {
  let color = score > 7.5 ? "green" : score > 6 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={8}>
      <Icon color="goldenrod" as={FaStar} /> {score.toFixed(1)}
    </Badge>
  );
};

export default CriticalScore;
