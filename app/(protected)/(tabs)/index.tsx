
import { CityPreview } from "@/src/domain/city/City";
import { Box } from "@/src/ui/components/Box";
import { CityCard } from "@/src/ui/components/CityCard";
import { Screen } from "@/src/ui/components/Screen";
import { CityFilter } from "@/src/ui/containers/CityFilter";


import { useAppTheme } from "@/src/ui/theme/useAppTheme";
import { useDebounce } from "@/src/utils/hooks/useDebounce";

import { useCategoryFindAll } from "@/src/domain/city/operation/useCategoryFindAll";
import { useCityFindAll } from "@/src/domain/city/operations/useCityFindAll";
import { Text } from "@/src/ui/components/Text";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { ListRenderItemInfo } from "react-native";
import Animated, { FadingTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [cityName, setCityName] = useState("");

  const debouncedCityName = useDebounce(cityName);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const {
    data: cities,
    isLoading,
    error,
  } = useCityFindAll({
    name: debouncedCityName,
    categoryId: selectedCategoryId,
  });

  const { data: categories } = useCategoryFindAll();

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box paddingHorizontal="padding">
        <CityCard cityPreview={item} />
      </Box>
    );
  }

function renderEmptyComponent() {
  let Content;

  if (isLoading) {
    Content = <Text>carregando cidades...</Text>;
  } else if (error) {
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Erro desconhecido';
    Content = <Text>erro ao carregar cidades. {errorMessage}</Text>;
  } else {
    Content = <Text>não há cidades no momento</Text>;
  }

  return (
    <Box alignSelf="center" mt="s32">
      {Content}
    </Box>
  );
}

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <Animated.FlatList
        itemLayoutAnimation={FadingTransition.duration(500)}
        ref={flatListRef}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cities}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyComponent()}
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Screen>
  );
}