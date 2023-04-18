import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";

const spacex = introspect.graphql({
  apiNamespace: "spacex",
  url: 'https://spacex-api.fly.dev/graphql',
});

// wundergraph.config.ts
const weather = introspect.graphql({
  apiNamespace: 'weather',
  url: 'https://weather-api.wundergraph.com/',
})

const countries = introspect.graphql({
  apiNamespace: 'countries',
  url: 'https://countries.trevorblades.com/',
})

/*const federatedApi = introspect.federation({
  apiNamespace: 'federated',
  upstreams: [
    {
      url: 'https://wg-federation-demo-accounts.fly.dev/graphql',
    },
    {
      url: 'https://wg-federation-demo-products.fly.dev/graphql',
    },
    {
      url: 'https://wg-federation-demo-reviews.fly.dev/graphql',
    },
    {
      url: 'https://wg-federation-demo-inventory.fly.dev/graphql',
    },
  ],
});*/

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [spacex,weather,countries],
  server,
  operations,
  codeGenerators: [
    {
      templates: [
        ...templates.typescript.all,
      ],
    },
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? [
            // change this before deploying to production to the actual domain where you're deploying your app
            "http://localhost:3000",
          ]
        : [
            "http://localhost:3000",
            new EnvironmentVariable("WG_ALLOWED_ORIGIN"),
          ],
  },
  dotGraphQLConfig: {
    hasDotWunderGraphDirectory: false,
  },
});
