import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, FlatList, Linking } from "react-native";
import DisplayNone from "../DisplayNone";
import styles from "./styles";

const Repos = ({ repos }) => {
  console.log(repos);
  const renderItem = ({ item }) => {
    const handleLinking = () => {
      const link = `http://github.com/${item.owner}/${item.repo}`;
      Linking.openURL(link);
    };
    return (
      <View key={item.repo} style={styles.itemContainer}>
        <View style={styles.title}>
          <MaterialIcons name="computer" size={25} style={styles.icon} />
          <TouchableOpacity onPress={handleLinking}>
            {item.repo ? (
              <Text style={styles.titleRepo}>{item.repo}</Text>
            ) : (
              <Text style={styles.titleRepo}>{item.name}</Text>
            )}
          </TouchableOpacity>
        </View>

        {item.description ? (
          <Text style={styles.description}>{item.description}</Text>
        ) : (
          <DisplayNone />
        )}

        <View style={styles.typeContainer}>
          <View style={styles.typeItemContainer}>
            {item.language === "TypeScript" && (
              <View style={[styles.circle, { backgroundColor: "#2b7489" }]} />
            )}
            {item.language === "CSS" && (
              <View style={[styles.circle, { backgroundColor: "#563d7c" }]} />
            )}
            {item.language === "HTML" && (
              <View style={[styles.circle, { backgroundColor: "#e34c26" }]} />
            )}
            {item.language === "Objective-C" && (
              <View style={[styles.circle, { backgroundColor: "#438eff" }]} />
            )}
            {item.language === "Java" && (
              <View style={[styles.circle, { backgroundColor: "#b07219" }]} />
            )}
            {item.language === "SCSS" && (
              <View style={[styles.circle, { backgroundColor: "#c6538c" }]} />
            )}
            {item.language === "JavaScript" && <View style={styles.circle} />}
            <Text>{item.language}</Text>
          </View>
          <View style={styles.typeItemContainer}>
            <Ionicons name="star-outline" size={16} style={styles.icon} />
            {item.stars ? (
              <Text>{item.stars}</Text>
            ) : (
              <Text>{item.stargazers_count}</Text>
            )}
          </View>
          <View style={styles.typeItemContainer}>
            <AntDesign name="fork" size={16} style={styles.icon} />
            <Text>{Math.floor(Math.random() * 1000)}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={repos}
        renderItem={renderItem}
        keyExtractor={(item) => item.repo}
      />
    </View>
  );
};

export default Repos;
