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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.text,
        marginTop: 20,
    },
    subtitle: {
        fontsize: 16,
        color: '#888',
        marginTop: -8,
        marginBottom: 10,
        marginLeft: 1,
        fontWeight: '600',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    likeIcon: {
        fontSize: 35,
        marginTop: 15,
    },
    section: {
        marginBottom: 18,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 14,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: 4,
    },
    sectionContent: {
        color: theme.text,
        fontSize: 15,
    },
    address: {
        color: theme.text,
        fontSize: 15,
        marginBottom: 2,
    },
    musicList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 4,
    },
    musicItem: {
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 8,
        marginBottom: 6,
        color: '#333',
        fontSize: 13,
    },
    website: {
        color: '#2196F3',
        textDecorationLine: 'underline',
        fontSize: 15,
        marginTop: 2,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 10,
    },
    buttonRowButton: {
        flex: 1,
    },
    listItem: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
        margin: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    ListItemText: {
        color: theme.text,
        fontSize: 18,
    },
    openingHoursSection: {
        marginBottom: 18,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 14,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    openingHoursRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    openingHoursDay: {
        color: '#666',
        fontWeight: 'bold',
        fontSize: 15,
        width: 110,
    },
    openingHoursTime: {
        color: theme.text,
        fontSize: 15,
    },
    appButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 18,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    appButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    image: {
        marginBottom: 18,
        alignSelf: 'center',
        borderRadius: 10,
    },
});