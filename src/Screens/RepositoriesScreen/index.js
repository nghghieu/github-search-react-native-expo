import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Repos from "../../components/Ui/Repos";
import styles from "./styles";

const RepositoriesScreen = () => {
  const listRepos = useSelector((state) => state.api.repos);

  return (
    <ScrollView style={styles.container}>
      <Repos repos={listRepos} />
    </ScrollView>
  );
};

export default RepositoriesScreen;
