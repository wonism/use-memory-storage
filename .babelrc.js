module.exports = {
  "plugins": [
    ["@babel/plugin-transform-runtime", { "corejs": 2 }],
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 2 versions", "> 10%", "ie 9"],
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  "env": {
    "production": {},
    "development": {},
    "test": {},
  },
};
