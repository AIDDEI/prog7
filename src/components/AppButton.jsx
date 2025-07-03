import { useContext } from "react";
import { Pressable, Text } from "react-native";

import { ThemeContext } from "../css/ThemeContext";
import { createStyles } from "../css/styles";

const AppButton = ({ title, onPress, style, textStyle, color, disabled }) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <Pressable
            style={[
                styles.appButton,
                color ? { backgroundColor: color } : {},
                disabled ? { opacity: 0.5 } : {},
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default AppButton;