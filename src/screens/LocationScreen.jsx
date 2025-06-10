import { View, Text } from 'react-native';

const LocationScreen = ({ route }) => {
    const { name, description } = route.params;

    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
        </View>
    );
};

export default LocationScreen;
