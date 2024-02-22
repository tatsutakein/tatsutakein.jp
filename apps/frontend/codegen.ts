import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://tatsutakeinjp.hasura.app/v1/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  config: {
    namingConvention: {
      typeNames: "change-case-all#pascalCase",
      enumValues: "change-case-all#upperCase",
      transformUnderscore: true,
    },
    scalars: {
      uuid: "string",
      timestamptz: "Date",
    },
  },
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
