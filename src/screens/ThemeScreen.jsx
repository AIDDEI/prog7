import { useContext } from "react";
import { View, Button } from "react-native";

import { ThemeContext } from "../css/ThemeContext";

import { useTranslation } from "react-i18next";

const ThemeScreen = () => {
    const { themeName, changeTheme } = useContext(ThemeContext);

    const { t } = useTranslation();

    return (
        <View>

            <Button
                title="Light Theme"
                onPress={() => changeTheme("light")}
                color={themeName === "light" ? "#2196F3" : undefined}
            />

            <Button
                title="Dark Theme"
                onPress={() => changeTheme("dark")}
                color={themeName === "dark" ? "#2196F3" : undefined}
            />

            <Button
                title="Retro Theme"
                onPress={() => changeTheme("retro")}
                color={themeName === "retro" ? "#2196F3" : undefined}
            />

        </View>
    );
}

export default ThemeScreen;