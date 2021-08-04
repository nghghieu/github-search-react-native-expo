import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./styles";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../../assets/github.png")} />
      <Text style={styles.title}>GitHub</Text>
    </View>
  );
};

export default Splash;
