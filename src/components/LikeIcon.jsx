import { useContext } from "react";
import { View, Text } from "react-native";

import { ThemeContext } from "../css/ThemeContext";
import { createStyles } from "../css/styles";
import { useTranslation } from 'react-i18next';

const LikeIcon = ({ liked }) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    
    const { t } = useTranslation();

    return liked ? (
        <View>
            <Text style={styles.likeIcon}>{ t('generic.like') }</Text>
        </View>
    ) : null
};

export default LikeIcon;