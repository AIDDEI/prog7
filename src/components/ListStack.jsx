import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import LocationScreen from '../screens/LocationScreen';
import ReviewScreen from '../screens/ReviewScreen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

export default function ListStack() {
    const { t } = useTranslation();
    return (
        <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} options={{ title: t('list_title') }}/>
        <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ title: 'Locatie details' }}/>
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{title: 'Review'}}/>
        </Stack.Navigator>
    );
}