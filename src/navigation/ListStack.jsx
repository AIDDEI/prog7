import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from '../screens/ListScreen';
import LocationScreen from '../screens/LocationScreen';
import ReviewScreen from '../screens/ReviewScreen';

import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const ListStack = () => {
    const { t } = useTranslation();
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen} options={{ title: t('header.list') }}/>
            <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ title: t('header.location') }}/>
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{title: t('header.review')}}/>
        </Stack.Navigator>
    );
};

export default ListStack;