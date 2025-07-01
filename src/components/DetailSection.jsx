import { View, Text } from 'react-native';

const DetailSection = ({ title, information }) => (
    information ? (
        <View>
            <Text>{title}</Text>
            <Text>{information}</Text>
        </View>
    ) : null
);

export default DetailSection;