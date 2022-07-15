import * as React from "react";

import { Dimensions, StyleSheet, Text, View } from "react-native";

import MapView from "react-native-maps";
import { PlacesMap } from "../../components";

export const Home = () => {
  return (
    <View>
      <PlacesMap />
      {/* <MapView
        // style={{ flex: 5 }}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     height: "100%",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//     // width: 400,
//     // height: 500,
//   },
// });
