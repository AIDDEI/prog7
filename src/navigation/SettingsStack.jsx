import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../screens/SettingsScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ThemeScreen from '../screens/ThemeScreen';

import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t('header.settings') }}/>
            <Stack.Screen name="Language" component={LanguageScreen} options={{ title: t('settings.language') }}/>
            <Stack.Screen name="Theme" component={ThemeScreen} options={{ title: t('settings.theme') }}/>
        </Stack.Navigator>
    );
};

export default SettingsStack;