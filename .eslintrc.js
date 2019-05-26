module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    "graphql": false,
  },
  extends: `react-app`,
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
