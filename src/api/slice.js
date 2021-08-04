import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repos: [],
  profile: [],
  pinnedRepos: [],
};

export const counterSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    listProfile: (state, action) => {
      state.profile = action.payload;
    },
    listRepos: (state, action) => {
      state.repos = action.payload;
    },
    listPinnedRepos: (state, action) => {
      state.pinnedRepos = action.payload;
    },
  },
});

export const { listProfile, listRepos, listPinnedRepos, loadingSuccess } =
  counterSlice.actions;

const apiReducer = counterSlice.reducer;
export default apiReducer;
