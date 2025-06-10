import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './components/BottomTabs';
import LocationScreen from './screens/LocationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ title: 'Location Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
