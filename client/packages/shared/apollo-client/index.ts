import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://books-shop-5230c.uc.r.appspot.com/graphql',
    cache: new InMemoryCache(),
});
