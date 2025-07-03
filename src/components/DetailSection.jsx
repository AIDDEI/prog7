import { useContext } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext } from '../css/ThemeContext';
import { createStyles } from '../css/styles';

const DetailSection = ({ title, information, children }) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    if (!information && !children) return null;

    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {information && <Text style={styles.sectionContent}>{information}</Text>}
            {children}
        </View>
    );
};

export default DetailSection;