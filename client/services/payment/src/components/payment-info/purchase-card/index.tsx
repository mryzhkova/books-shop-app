import { Divider } from '@mryzhkova/packages-shared/components/divider';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import CardImage from '@/assets/cart-item.png';

import {
    StyledPurchaseCard,
    StyledPurchaseInfo,
    StyledPurchaseCover,
    StyledPurchaseCount,
} from './styled';

type Props = {
    title: string;
    price: number;
    count: number;
    cover?: string;
};

export const PurchaseCard = ({ title, price, count, cover }: Props) => (
    <>
        <StyledPurchaseCard>
            <StyledPurchaseCover>
                <img src={cover || CardImage} alt='purchase cover' />
                <StyledPurchaseCount>
                    <Text color='lightBase' view='secondary' weight='regular'>
                        {count}
                    </Text>
                </StyledPurchaseCount>
            </StyledPurchaseCover>
            <StyledPurchaseInfo>
                <Text>{title}</Text>
                <Gap size='m' />
                <Text size='xl' color='accent'>
                    {`$ ${price}`}
                </Text>
            </StyledPurchaseInfo>
        </StyledPurchaseCard>
        <Divider />
		<Gap size='xl' />
    </>
);
