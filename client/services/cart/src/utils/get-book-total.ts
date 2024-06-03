export const getBookTotal = (price: number, count: number) => {
    const total = price * count;

    return `$ ${Number.isInteger(total) ? total : total.toFixed(2)}`;
};
