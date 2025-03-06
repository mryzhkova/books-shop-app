import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import { type PayPalToken } from '@/types';

const paypalClientId = process.env.PAYPAL_CLIENT_ID ?? '';
const paypalClientToken = process.env.PAYPAL_CLIENT_SECRET ?? '';
const paypalApi = process.env.PAYPAL_API ?? 'https://api.sandbox.paypal.com';

export const paypalClient = (): checkoutNodeJssdk.core.PayPalHttpClient => {
    return new checkoutNodeJssdk.core.PayPalHttpClient(
        new checkoutNodeJssdk.core.SandboxEnvironment(paypalClientId, paypalClientToken),
    );
};

export const paypalRestClient = {
    generateClientToken: async (): Promise<PayPalToken> => {
        try {
            const auth = Buffer.from(`${paypalClientId}:${paypalClientToken}`).toString('base64');

            const accessTokenResponse = await fetch(`${paypalApi}/v1/oauth2/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${auth}`,
                },
                body: 'grant_type=client_credentials',
            });

            const accessToken = await accessTokenResponse.json();

            const clientTokenResponse = await fetch(`${paypalApi}/v1/identity/generate-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken.access_token}`,
                },
            });

            const clientToken = await clientTokenResponse.json();

            return {
                clientToken: clientToken.client_token,
                clientId: paypalClientId,
            };
        } catch (error) {
            throw new Error('PayPal REST Error');
        }
    },
};
