import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import getInfo from "../../api/api.js";
import { listPinnedRepos, listProfile, listRepos } from "../../api/slice.js";
import CardInfo from "../../components/Ui/CardInfo/index.js";
import DisplayNone from "../../components/Ui/DisplayNone/index.js";
import Error from "../../components/Ui/Error/index.js";
import Header from "../../components/Ui/Header/index.js";
import LoadingAnimate from "../../components/Ui/LoadingAnimate/index.js";
import Repos from "../../components/Ui/Repos/index.js";
import styles from "./styles";

const OverviewScreen = () => {
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [username, setUsername] = useState("nghghieu");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const fetchApi = async (username) => {
    try {
      const { profile, repos, pinnedRepos } = await getInfo(username);
      setIsLoading(false);
      setProfile(profile);
      setRepos(repos);
      setPinnedRepos(pinnedRepos);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    const _username = username.toLowerCase();
    fetchApi(_username);
    setIsLoading(true);
    setError("");
  }, [username]);

  useEffect(() => {
    if (profile && repos && pinnedRepos) {
      dispatch(listProfile(profile));
      dispatch(listRepos(repos));
      dispatch(listPinnedRepos(pinnedRepos));
    }
  }, [profile, repos, pinnedRepos, isLoading]);

  const handleSearchText = (username) => {
    setUsername(username);
  };

  return (
    <ScrollView style={styles.container}>
      <Header handleSearchText={handleSearchText} />
      {error ? <Error error={error} /> : <DisplayNone />}

      {isLoading ? (
        <LoadingAnimate />
      ) : (
        <>
          {!error && <CardInfo profile={profile} repos={repos} />}
          {!error && <Repos repos={pinnedRepos} />}
        </>
      )}
    </ScrollView>
  );
};

export default OverviewScreen;
