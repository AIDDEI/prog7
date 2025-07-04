import { useContext } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../screens/MapScreen';
import ListStack from './ListStack';
import SettingsStack from './SettingsStack';

import { ThemeContext } from '../css/ThemeContext.jsx';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const { theme, themeName } = useContext(ThemeContext);

    const { t } = useTranslation();

    let listIcon;
    if (themeName === "dark") {
        listIcon = require("../../assets/list_dark.png");
    } else if (themeName === "retro") {
        listIcon = require("../../assets/list_retro.png");
    } else {
        listIcon = require("../../assets/list_light.png");
    }

    let mapIcon;
    if (themeName === "dark") {
        mapIcon = require("../../assets/map_dark.png");
    } else if (themeName === "retro") {
        mapIcon = require("../../assets/map_retro.png");
    } else {
        mapIcon = require("../../assets/map_light.png");
    }

    let settingsIcon;
    if (themeName === "dark") {
        settingsIcon = require("../../assets/settings_dark.png");
    } else if (themeName === "retro") {
        settingsIcon = require("../../assets/settings_retro.png");
    } else {
        settingsIcon = require("../../assets/settings_light.png");
    }
    
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: theme.background },
                tabBarStyle: { backgroundColor: theme.background },
                headerTintColor: theme.text,
                tabBarActiveTintColor: theme.text,
                tabBarInactiveTintColor: '#888',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Tab.Screen name="List" component={ListStack} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={listIcon}
                        style={{ width: 28, height: 28 }}
                        resizeMode="contain"
                    />
                )}}
            />
            <Tab.Screen name="Map" component={MapScreen} options={{
                title: t('header.map'),
                tabBarIcon: () => (
                    <Image
                        source={mapIcon}
                        style={{ width: 28, height: 28 }}
                        resizeMode="contain"
                    />
                )}}
            />
            <Tab.Screen name="SettingsTab" component={SettingsStack} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={settingsIcon}
                        style={{ width: 28, height: 28 }}
                        resizeMode="contain"
                    />
                )}}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;