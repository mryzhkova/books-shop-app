export type OrderInfo = {
    email: string;
    name: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    province?: string;
    postalCode: string;
    shippingNote?: string;
    newsletter?: boolean;
    save?: boolean;
};

export type PayPalToken = {
    clientToken: string;
    clientId: string;
};

export type GenerateClientTokenResponse = {
    generateClientToken: PayPalToken;
};

export type CreateOrderResponse = {
    createOrder: string;
};

export type CaptureOrderResponse = {
    captureOrder: string;
};
