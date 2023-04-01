module.exports = {
  "**/*.{ts,tsx}": [
    () => "tsc -p tsconfig.json --noEmit",
    "eslint --cache --fix",
  ],
  "**/*.{css,scss}": ["stylelint --cache --fix"],
};
