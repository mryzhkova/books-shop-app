import path from 'path';
import { readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';

const typeDefs = readFileSync(
    path.resolve(process.cwd(), 'src', 'graphql', 'typeDefs.graphql'),
    'utf-8',
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
