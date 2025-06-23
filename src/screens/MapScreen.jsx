import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import { useDataFetching } from "../initialization/DataFetching";
import useCurrentLocation from "../initialization/UseCurrentLocation";

import ligthModeStyle from "../mapStyles/lightMode.json";

const MapScreen = () => {
  const locations = useDataFetching();
  const { location, errorMsg } = useCurrentLocation();

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!location) {
    return <Text>Locatie ophalen...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        customMapStyle={ligthModeStyle}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.name}
            description={location.description}
          />
        ))}

        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Your Location"
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: "rgba(0, 122, 255, 0.8)",
              borderWidth: 3,
              borderColor: "white",
            }}
          />
        </Marker>
      </MapView>
    </View>
  );
}

export default MapScreen;