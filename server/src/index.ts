import admin from 'firebase-admin';
import 'dotenv/config';
import 'module-alias/register';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { createApolloServer } from './middleware/apollo-server';
import firebaseCredentials from './db/config';
import { initDb } from './db/utils';

const port = process.env.PORT ?? 8080;

admin.initializeApp(firebaseCredentials);

const startServer = async (): Promise<void> => {
    const app = express();

    initDb();

    const apolloMiddleware = createApolloServer();
    await apolloMiddleware.start();

    app.use(cors());
    app.use('/graphql', bodyParser.json(), expressMiddleware(apolloMiddleware));

    app.listen(port, () => {
        console.log(`Listening on port ${port}! 🚀`);
    });
};

startServer().catch((err) => {
    console.error(err);
    process.exit(1);
});
