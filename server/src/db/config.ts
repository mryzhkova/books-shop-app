import admin from 'firebase-admin';
import { type ServiceAccount } from 'firebase-admin';

const projectId = process.env.PROJECT_ID ?? '';
const privateKey = process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '';
const clientEmail = process.env.CLIENT_EMAIL ?? '';

const serviceAccount: ServiceAccount = { projectId, privateKey, clientEmail };

export default {
    credential: admin.credential.cert(serviceAccount),
};
