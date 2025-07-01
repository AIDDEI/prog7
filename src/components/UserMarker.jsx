import { View } from "react-native";
import { Marker } from "react-native-maps";

const UserMarker = ({ location, color, borderColor }) => (
    <Marker 
        coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }}
    >
        <View
            style={{
                height: 20,
                  width: 20,
                  borderRadius: 10,
                  backgroundColor: color,
                  borderWidth: 3,
                  borderColor: borderColor,
                }}
            />
    </Marker>
);

export default UserMarker;