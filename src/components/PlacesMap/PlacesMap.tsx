import * as React from "react";

import { Text, View } from "react-native";

import { ClusterMarker } from "../ClusterMarker";

export const PlacesMap = () => {
  return (
    <View>
      <Text>Map</Text>
      <ClusterMarker
        position={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        name={""}
        address={""}
        id={null}
        activeMarker={null}
        setActiveMarker={function (marker: any): void | null {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
};
