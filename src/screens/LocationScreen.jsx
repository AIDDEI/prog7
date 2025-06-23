import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const LocationScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location } = route.params || {};

    return (
        <View>
            <Text>{location?.name}</Text>
            <Text>{location?.description}</Text>
            <Button
                title="Bekijk op de kaart"
                onPress={() => 
                    navigation.navigate('Map', {
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        name: location?.name,
                    })
                }
            />
        </View>
    );
};

export default LocationScreen;
