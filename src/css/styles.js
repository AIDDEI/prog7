import { StyleSheet } from "react-native";

export const lightTheme = {
    background: "#ffffff",
    text: "#000000",
};

export const darkTheme = {
    background: "#161616",
    text: "#ffffff",
};

export const retroTheme = {
    background: "#BDB398",
    text: "#4242E7",
};

export const createStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: 16,
        alignSelf: 'center',
    },
    listItem: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    ListItemText: {
        color: theme.text,
        fontSize: 18,
    },
});