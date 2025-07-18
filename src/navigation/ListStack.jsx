import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from '../screens/ListScreen';
import LocationScreen from '../screens/LocationScreen';
import ReviewScreen from '../screens/ReviewScreen';

import { ThemeContext } from '../css/ThemeContext.jsx';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const ListStack = () => {
    const { theme } = useContext(ThemeContext);

    const { t } = useTranslation();
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: theme.background },
                headerTintColor: theme.text,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen name="List" component={ListScreen} options={{ title: t('header.list') }}/>
            <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ title: t('header.location') }}/>
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{title: t('header.review')}}/>
        </Stack.Navigator>
    );
};

export default ListStack;