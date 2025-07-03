import { View, Text } from "react-native";

import { useTranslation } from 'react-i18next';

const LikeIcon = ({ liked }) => {
    const { t } = useTranslation();

    return liked ? (
        <View>
            <Text>{ t('generic.like') }</Text>
        </View>
    ) : null
};

export default LikeIcon;