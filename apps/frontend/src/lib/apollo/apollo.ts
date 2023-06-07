import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: "https://ap-northeast-1.cdn.hygraph.com/content/clcfsbgaq0fxx01ug951f007y/master",
  cache,
});
