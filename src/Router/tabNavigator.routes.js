import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import OverviewScreen from "../Screens/OverviewScreen";
import RepositoriesScreen from "../Screens/RepositoriesScreen";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("screen");

export default function TabNavigatorRoutes() {
  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                width: width / 2,
                justifyContent: "center",
                alignItems: "center",
                borderTopColor: isFocused ? "#f9826c" : "#fff",
                borderTopWidth: 2,
              }}
            >
              <Text
                style={{
                  fontWeight: isFocused ? "bold" : "normal",
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  fontSize: 14,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        initialRouteName="Overview"
      >
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Repositories" component={RepositoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
