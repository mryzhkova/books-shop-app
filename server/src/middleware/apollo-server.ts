import { ApolloServer, type BaseContext } from '@apollo/server';
import schema from '../graphql/schema';

export const createApolloServer = (): ApolloServer<BaseContext> => {
    const server = new ApolloServer({
        schema,
        introspection: true,
    });

    return server;
};
