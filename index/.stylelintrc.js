module.exports = {
  "plugins": ["stylelint-prettier"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  "customSyntax": "postcss-scss",
  "rules": {
    "prettier/prettier": true,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "font-family-name-quotes": null,
  }
}

