module.exports = {
  "extends": "airbnb",
  "rules": {
      // ignore the /style/ import variable using in style-loader
      "no-unused-vars": ["error", { "varsIgnorePattern": "style" }],
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "function-paren-newline": 0
  }
};