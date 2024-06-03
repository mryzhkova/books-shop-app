import { merge } from 'lodash';
import { bookResolver } from './book';
import { cartResolver } from './cart';

const resolvers = merge(bookResolver, cartResolver);

export default resolvers;
