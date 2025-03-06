import { merge } from 'lodash';
import { bookResolver } from './book';
import { cartResolver } from './cart';
import { paymentResolver } from './payment';

const resolvers = merge(bookResolver, cartResolver, paymentResolver);

export default resolvers;
