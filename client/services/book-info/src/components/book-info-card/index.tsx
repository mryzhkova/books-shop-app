import { Button } from '@mryzhkova/packages-shared/components/button';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Book } from '@mryzhkova/packages-shared/types';

import CartIcon from '@/assets/cart.svg';
import { useHandleCart } from '@/hooks/use-handle-cart';

import { InfoItem } from './info-item';
import { StyledBookInfoCard } from './styled';

type Props = Omit<Book, 'cover' | 'coverByEmail' | 'description' | 'price'>;

export const BookInfoCard = ({ title, author, lang, publisher, pubDate, coverBy, id }: Props) => {
    const { handleAddToCart, disabled, btnText } = useHandleCart(id);

    return (
        <StyledBookInfoCard>
            <div>
                <InfoItem title='Author' value={author} />
                <InfoItem title='Original Title' value={title} />
                <InfoItem title='Language' value={lang} />
                <InfoItem title='Publisher' value={publisher} />
                <InfoItem title='Publication date' value={pubDate} />
                <InfoItem title='Cover by' value={coverBy} />
            </div>
            <Gap size='2xl' />
            <Button view='light' block onClick={handleAddToCart} disabled={disabled}>
                <SVGIcon Icon={CartIcon} color='lightBase' />
                <Gap size='m' direction='horizontal' />
                {btnText}
            </Button>
        </StyledBookInfoCard>
    );
};
