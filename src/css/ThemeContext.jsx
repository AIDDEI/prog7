import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { lightTheme, darkTheme, retroTheme } from "./styles";

export const ThemeContext = createContext();

const themes = {
    light: lightTheme,
    dark: darkTheme,
    retro: retroTheme,
};

export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("light");
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        AsyncStorage.getItem("appTheme").then((savedTheme) => {
            if (savedTheme && themes[savedTheme]) {
                setThemeName(savedTheme);
                setTheme(themes[savedTheme]);
            }
        });
    }, []);

    const changeTheme = async (name) => {
        setThemeName(name);
        setTheme(themes[name]);
        await AsyncStorage.setItem("appTheme", name);
    };

    return (
        <ThemeContext.Provider value={{ theme, themeName, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};