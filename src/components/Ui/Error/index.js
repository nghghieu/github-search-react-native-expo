import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Error = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default Error;
