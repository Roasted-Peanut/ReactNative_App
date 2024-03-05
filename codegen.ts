
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://115.146.127.172:8185/shop-api",
  documents: "**/*.{gql, graphql}",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "introspection"
      ]
    }
  }
};

export default config;
