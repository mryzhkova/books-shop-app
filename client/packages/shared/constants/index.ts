export const booksRoutes = {
    books: '/books',
} as const;

export const cartRoutes = {
    cart: '/cart',
} as const;

export const paymentRoutes = {
    payment: '/payment',
    paymentError: '/payment/error',
    paymentSuccess: '/payment/confirmation',
} as const;
