import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, Text, TouchableOpacity } from "react-native";
import { useDataFetching } from "../initialization/DataFetching";
import useCurrentLocation from "../initialization/UseCurrentLocation";
import ligthModeStyle from "../mapStyles/lightMode.json";
import { useRoute } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

const MapScreen = () => {
  const locations = useDataFetching();
  const { location, errorMsg } = useCurrentLocation();
  const route = useRoute();
  const mapRef = useRef(null);
  const markerRefs = useRef({});

  const centerOnCurrentLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      });
    }
  };

  useEffect(() => {
    if (
      route.params &&
      route.params.latitude &&
      route.params.longitude &&
      mapRef.current
    ) {
      mapRef.current.animateToRegion({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }, 1000);

      const found = locations.find(
        loc =>
          loc.latitude === route.params.latitude &&
          loc.longitude === route.params.longitude
      );
      if (found && markerRefs.current[found.id]) {
        setTimeout(() => {
          markerRefs.current[found.id].showCallout();
        }, 1200);
      }
    }
  }, [route.params, locations]);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!location) {
    return <Text>Locatie ophalen...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
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
            ref={ref => {
              if (ref) markerRefs.current[location.id] = ref;
            }}
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
      <TouchableOpacity onPress={centerOnCurrentLocation}>
        <Text>Mijn Locatie</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MapScreen;