import { Divider } from '@/src/components/Divider';
import { Screen } from '@/src/components/Screen';
import { CityDetailsHeader } from '@/src/container/CityDetailsHeader';
import { CityDetailsInfo } from '@/src/container/CityDetailsInfo';
import { CityDetailsTouristAttractions } from '@/src/container/CityDetailTouristAttractions';
import { useCityDetails } from '@/src/data/useCityDetails';
import { useLocalSearchParams } from 'expo-router';

export default function SignInScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const city = useCityDetails(id as string);

  if (!city) {
    return null;
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }} scrollable>
      <CityDetailsHeader
        id={city.id}
        coverImage={city.coverImage}
        categories={city.categories}
      />
      <CityDetailsInfo
        name={city.name}
        country={city.country}
        description={city.description}
      />

      <Divider paddingHorizontal="padding" />
      <CityDetailsTouristAttractions
        touristAttractions={city.touristAttractions}
      />
      <Divider paddingHorizontal="padding" />
    </Screen>
  );
}
