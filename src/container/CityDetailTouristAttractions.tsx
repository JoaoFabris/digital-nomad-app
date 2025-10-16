import { Text } from "@/src/ui/components/Text";
import { City } from "../types";
import { Accordion } from "../ui/components/Accordion";
import { Box } from "../ui/components/Box";

type Props = Pick<City, 'touristAttractions'>;
export function CityDetailsTouristAttractions({ touristAttractions }: Props) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos turísticos
      </Text>
      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  );
}
