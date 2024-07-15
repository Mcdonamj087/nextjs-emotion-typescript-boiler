module.exports = {
  extends: [
    "eslint:recommended",
    /**
     * This is a compatibility ruleset that:
     * - disables rules from eslint:recommended which are already handled by TypeScript.
     * - enables rules that make sense due to TS's typechecking / transpilation.
     */
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "prettier"],
  root: true,
  rules: {
    "prettier/prettier": 1,
    "no-console": [
      1,
      {
        allow: ["warn", "error"],
      },
    ],
    "no-undef": 0,
    "prefer-const": 2,
    "react/no-unescaped-entities": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/consistent-type-imports": [
      1,
      { fixStyle: "inline-type-imports" },
    ],
    "import/order": [
      1,
      {
        groups: ["type", "builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "server-only",
            group: "type",
            position: "before",
          },
          {
            pattern: "@/types/**",
            group: "type",
            position: "before",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/libs/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/utils/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/styles/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "never",
        warnOnUnassignedImports: true,
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/no-unknown-property": ["error", { ignore: ["css"] }], // for Emotion css prop
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
    react: {
      version: "detect",
    },
  },
}
