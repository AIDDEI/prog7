import { View, Text } from 'react-native';

const LocationScreen = ({ route }) => {
    const { location } = route.params;

    return (
        <View>
            <Text>{location.name}</Text>
            <Text>{location.description}</Text>
        </View>
    );
};

export default LocationScreen;
