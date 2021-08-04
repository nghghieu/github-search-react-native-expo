const getInfo = async (username) => {
  const client_id = "583fc0a155130262067a";
  const client_secret = "d58a2312129ab4f1bf335b2ab148a10be7ebf5bb";

  const getProfile = fetch(`https://api.github.com/users/${username}?
    client_id=${client_id}&client_secret=${client_secret}`).then((res) =>
    res.json().then((json) => {
      if (res.ok) {
        return json;
      }
      throw json.message;
    })
  );

  const getRepos =
    fetch(`https://api.github.com/users/${username}/repos?client_id=${client_id}&cl
    ient_secret=${client_secret}`).then((res) =>
      res.json().then((json) => {
        if (res.ok) {
          return json;
        }
        throw json.message;
      })
    );

  const getPinnedRepos = fetch(
    `https://gh-pinned-repos.egoist.sh/?username=${username}`
  ).then((res) =>
    res.json().then((json) => {
      if (res.ok) {
        return json;
      }
      throw json.message;
    })
  );

  const [profile, repos, pinnedRepos] = await Promise.all([
    getProfile,
    getRepos,
    getPinnedRepos,
  ]);

  return {
    profile,
    repos,
    pinnedRepos,
  };
};

export default getInfo;
