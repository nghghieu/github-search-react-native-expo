import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/api/store";
import Splash from "./src/components/Ui/Splash";
import TabNavigatorRoutes from "./src/Router/tabNavigator.routes";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {isLoading ? <Splash /> : <TabNavigatorRoutes />}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
