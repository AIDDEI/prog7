import { useContext } from "react";
import { View, Text } from "react-native";

import { ThemeContext } from "../css/ThemeContext";
import { createStyles } from '../css/styles';
import { useTranslation } from "react-i18next";

import AppButton from '../components/AppButton';

const ThemeScreen = () => {
    const { themeName, changeTheme, theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const { t } = useTranslation();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{t('settings.set_theme')}</Text>

            <AppButton
                title={t('themes.light')}
                onPress={() => changeTheme("light")}
                color={themeName === "light" ? "#2196F3" : undefined}
                style={{ marginTop: 18 }}
            />

            <AppButton
                title={t('themes.dark')}
                onPress={() => changeTheme("dark")}
                color={themeName === "dark" ? "#2196F3" : undefined}
            />

            <AppButton
                title={t('themes.retro')}
                onPress={() => changeTheme("retro")}
                color={themeName === "retro" ? "#2196F3" : undefined}
            />

        </View>
    );
}

export default ThemeScreen;