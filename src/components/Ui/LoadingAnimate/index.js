import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import styles from "./styles";

const LoadingAnimate = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0)"
      source={require("./7747-loader.json")}
      animationStyle={styles.loadStyle}
      speed={1}
    />
  );
};

export default LoadingAnimate;
