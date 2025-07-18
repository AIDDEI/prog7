import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../screens/SettingsScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ThemeScreen from '../screens/ThemeScreen';

import { ThemeContext } from '../css/ThemeContext.jsx';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
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
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t('header.settings') }}/>
            <Stack.Screen name="Language" component={LanguageScreen} options={{ title: t('settings.language') }}/>
            <Stack.Screen name="Theme" component={ThemeScreen} options={{ title: t('settings.theme') }}/>
        </Stack.Navigator>
    );
};

export default SettingsStack;