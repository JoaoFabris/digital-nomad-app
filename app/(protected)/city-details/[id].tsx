import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from 'react-native';


export default function SignInScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={router.back}>City details{id}</Text>
    </View>
  );
}
