import { EvilIcons, Ionicons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Header = ({ handleSearchText }) => {
  const [active, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleActive = () => {
    setActive(!active);
  };

  const handleInput = (e) => {
    setSearchInput(e);
  };

  const handleSubmit = () => {
    handleSearchText(searchInput);
    setSearchInput("");
    setActive(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <TouchableOpacity onPress={handleActive}>
          <Octicons name="three-bars" size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="logo-github" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={25} color="white" />
        </TouchableOpacity>
      </View>
      {active && (
        <View style={styles.dropdown}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#bac1bd"
            onChangeText={handleInput}
            value={searchInput}
          />
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <EvilIcons name="arrow-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
