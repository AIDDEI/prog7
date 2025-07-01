import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../screens/MapScreen';
import ListStack from './ListStack';
import SettingsStack from './SettingsStack';

import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const { t } = useTranslation();
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={ListStack} options={{ headerShown: false }}/>
            <Tab.Screen name="Map" component={MapScreen} options={{ title: t('header.map') }}/>
            <Tab.Screen name="SettingsTab" component={SettingsStack} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
};

export default BottomTabs;