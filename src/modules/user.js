const state = {
  languages: [
    {
      name: "js",
      frameworks: ["angular", "react"]
    },
    {
      name: "ruby",
      frameworks: ["rails"]
    }
  ],
  name: "Philip",
  followers: 101,
  followings: 15,
  age: 28,
  biography:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n" +
    "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
    "aliquip ex ea commodo consequat. Duis aute irure dolor in\n" +
    "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n" +
    "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n" +
    "culpa qui officia deserunt mollit anim id est laborum."
};

// getters
const getters = {
  languages: state => {
    return state.languages;
  },
  name: state => state.name,
  followers: state => state.followers,
  followings: state => state.followings,
  age: state => state.age,
  biography: state => state.biography
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
