import { router } from "expo-router";
import { ImageBackground, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { City } from "@/src/domain/city/City";
import { BlackOpacity } from "../ui/components/BlackOpacity";
import { Box } from "../ui/components/Box";
import { CategoryPill } from "../ui/components/CategoryPill";
import { Icon } from "../ui/components/Icon";
import { IconButton } from "../ui/components/IconButton";
import { PILL_HEIGHT } from "../ui/components/Pill";


type CityDetailsHeaderProps = Pick<
  City,
  "id" | "coverImage" | "categories" | "isFavorite"
>;

export function CityDetailsHeader({
  coverImage,
  categories,
  isFavorite,
}: CityDetailsHeaderProps) {
  const { top } = useSafeAreaInsets();
  return (
    <Box>
      <ImageBackground
        source={
          typeof coverImage === "number" ? coverImage : { uri: coverImage }
        }
        style={{ width: "100%", height: 250 }}
        imageStyle={{ borderBottomRightRadius: 40 }}
      >
        <BlackOpacity />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding="padding"
          style={{ paddingTop: top }}
        >
          <IconButton iconName="Chevron-left" onPress={router.back} />
          <Icon
            size={30}
            name={isFavorite ? "Favorite-fill" : "Favorite-outline"}
            color={isFavorite ? "primary" : "text"}
          />
        </Box>
      </ImageBackground>

      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -PILL_HEIGHT / 2 }}
      >
        <Box flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill active={true} key={category.id} category={category} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}