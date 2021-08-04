import { EvilIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const CardInfo = ({ profile, repos }) => {
  const star = repos.reduce((init, currenvalue) => {
    return init + currenvalue.stargazers_count;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: profile.avatar_url,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.fullname}>
            {profile.name ? profile.name : profile.login}
          </Text>
          <Text style={styles.nickname}>{profile.login}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {profile.bio ? (
          <Text style={styles.bioText}>{profile.bio}</Text>
        ) : (
          <View />
        )}

        {profile.blog ? (
          <View style={styles.linkWebsite}>
            <EvilIcons name="link" size={25} style={styles.icon} />
            <Text>{profile.blog}</Text>
          </View>
        ) : (
          <View />
        )}

        {profile.email ? (
          <View style={styles.linkWebsite}>
            <Fontisto
              name="email"
              size={18}
              style={[styles.icon, { marginRight: 10 }]}
            />
            <Text>{profile.email}</Text>
          </View>
        ) : (
          <View />
        )}

        {profile.location ? (
          <View style={styles.linkWebsite}>
            <EvilIcons name="location" size={20} style={styles.icon} />
            <Text>{profile.location}</Text>
          </View>
        ) : (
          <View />
        )}
        {/* Social Count */}
        <View style={styles.socialContainer}>
          <View style={styles.socialItem}>
            <Ionicons name="people-outline" size={25} style={styles.icon} />
            <Text style={styles.count}>
              {" "}
              {profile.followers?.toLocaleString()}
            </Text>
            <Text> follower</Text>
          </View>
          <View style={styles.dot} />
          <View style={styles.socialItem}>
            <Text style={styles.count}>{profile.following}</Text>
            <Text> following</Text>
          </View>
          <View style={styles.dot} />
          <View style={styles.socialItem}>
            <Ionicons name="star-outline" size={20} style={styles.icon} />
            <Text style={styles.count}>{star.toLocaleString()}</Text>
          </View>
        </View>

        {/* Button Follow */}
        <TouchableOpacity style={styles.buttonFollow}>
          <Text style={styles.buttonFollowText}>Follow</Text>
        </TouchableOpacity>

        {/* Achievements */}
        <View style={styles.achivementContainer}>
          <Text style={styles.achievementText}>Achievements</Text>
          <View style={styles.achievementLogoContainer}>
            <Image
              source={{
                uri: "https://github.githubassets.com/images/modules/profile/badge--acv-64.png",
              }}
              resizeMode="contain"
              style={styles.achivementLogo}
            />
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/badge-sponsors-small.png",
              }}
              resizeMode="contain"
              style={styles.achivementLogo}
            />
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/badge-mars-2020-small.png",
              }}
              resizeMode="contain"
              style={styles.achivementLogo}
            />
          </View>
          <TouchableOpacity>
            <Text>Block or Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardInfo;
