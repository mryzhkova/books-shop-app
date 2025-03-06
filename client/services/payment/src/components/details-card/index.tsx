import { useSetAtom } from 'jotai';

import { Divider } from '@mryzhkova/packages-shared/components/divider';

import { paymentStepAtom } from '@/store';

import { DetailsCardItem } from './details-card-item';
import { StyledDetailsCard } from './styled';

type Props = {
    address?: string;
    contact?: string;
    shipping?: string;
};

export const DetailsCard = ({ contact, address, shipping }: Props) => {
    const setStep = useSetAtom(paymentStepAtom);

    const handleEditShipping = () => {
        setStep('shipping');
    };

    const handleEditDetails = () => {
        setStep('details');
    };

    return (
        <StyledDetailsCard>
            {contact && (
                <DetailsCardItem
                    title='Contact'
                    description={contact}
                    onEditClick={handleEditDetails}
                />
            )}
            {address && (
                <>
                    <Divider color='accent' />
                    <DetailsCardItem
                        title='Ship to'
                        description={address}
                        onEditClick={handleEditDetails}
                    />
                </>
            )}
            {shipping && (
                <>
                    <Divider color='accent' />
                    <DetailsCardItem
                        title='Method'
                        description={shipping}
                        onEditClick={handleEditShipping}
                    />
                </>
            )}
        </StyledDetailsCard>
    );
};
