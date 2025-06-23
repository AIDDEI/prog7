import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListStack from './ListStack';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const { t } = useTranslation();
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={ListStack} options={{ title: t('list_title'), headerShown: false }}/>
            <Tab.Screen name="Map" component={MapScreen} options={{ title: t('map_title') }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: t('settings_title') }}/>
        </Tab.Navigator>
    );
};

export default BottomTabs;