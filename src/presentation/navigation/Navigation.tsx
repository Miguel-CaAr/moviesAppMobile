import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/details/DetailScreen';
import HomeScreen from '../screens/home/HomeScreenView';

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};
