import React, { useState, useEffect, useRef, useContext } from "react";
import { View, Text, Image, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute, useFocusEffect } from '@react-navigation/native';

import { useDataFetching } from "../initialization/DataFetching";
import useCurrentLocation from "../functions/useCurrentLocation";
import loadMarkerPhotos from "../functions/loadMarkerPhotos";

import UploadedImageDisplay from "../components/UploadedImageDisplay";
import UserMarker from "../components/UserMarker";

import { ThemeContext } from "../css/ThemeContext";
import { createStyles } from "../css/styles";
import { useTranslation } from 'react-i18next';

import ligthModeStyle from "../mapStyles/lightMode.json";
import darkModeStyle from "../mapStyles/darkMode.json";
import retroModeStyle from "../mapStyles/retroMode.json";

const MapScreen = () => {
  const route = useRoute();

  const { themeName, theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  const { t } = useTranslation();

  const mapRef = useRef(null);

  const locations = useDataFetching();
  const { location, errorMsg } = useCurrentLocation();
  
  const markerRefs = useRef({});
  const [markerPhotos, setMarkerPhotos] = useState({});

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

  let mapStyle;
  if (themeName === "dark") {
    mapStyle = darkModeStyle;
  } else if (themeName === "retro") {
    mapStyle = retroModeStyle;
  } else {
    mapStyle = ligthModeStyle;
  }

  let locationIcon;
  if (themeName === "dark") {
    locationIcon = require("../../assets/location_dark.png");
  } else if (themeName === "retro") {
    locationIcon = require("../../assets/location_retro.png");
  } else {
    locationIcon = require("../../assets/location_light.png");
  }

  useFocusEffect(
    React.useCallback(() => {
      loadMarkerPhotos(locations).then(setMarkerPhotos);
    }, [locations])
  );

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
    return <Text>{t('location.retrieve')}</Text>;
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
        customMapStyle={mapStyle}
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
            description={location.address.street + ' ' + location.address.house_number}
          >

            {markerPhotos[location.id] && (
              <Image
                source={{ uri: markerPhotos[location.id] }}
                style={[styles.image, { width: 40, height: 40 }]}
              />
            )}

          </Marker>
        ))}

        <UserMarker
          location={location}
          color={"rgba(0, 122, 255, 0.8)"}
          borderColor={"white"}
        />

      </MapView>

      <Pressable
        style={[
          styles.myLocation,
          { backgroundColor: theme.background }
        ]}
        onPress={centerOnCurrentLocation}
      >
        <Image
          source={locationIcon}
          style={styles.myLocationIcon}
          resizeMode="contain"
        />
      </Pressable>

    </View>
    
  );
};

export default MapScreen;