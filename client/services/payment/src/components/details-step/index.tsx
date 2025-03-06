import { useAtom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Button } from '@mryzhkova/packages-shared/components/button';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Link } from '@mryzhkova/packages-shared/components/link';
import { Text } from '@mryzhkova/packages-shared/components/text';
import { cartRoutes } from '@mryzhkova/packages-shared/constants';

import { paymentFormAtom, paymentStepAtom } from '@/store';

import { AddressField } from './address-field';
import { CityField } from './city-field';
import { CountryField } from './country-field';
import { EmailField } from './email-field';
import { LastNameField } from './last-name-field';
import { NameField } from './name-field';
import { NewsletterField } from './news-letter-field';
import { PostalCodeField } from './postal-code-field';
import { ProvinceField } from './province-field';
import { SaveInfoField } from './save-info-field';
import { ShippingNoteField } from './shipping-note-field';
import { StyledAdressForm } from './styled';

export const DetailsStep = () => {
    const [paymentForm, setPaymentForm] = useAtom(paymentFormAtom);
    const setStep = useSetAtom(paymentStepAtom);

    const {
        control,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<OrderInfo>({ defaultValues: paymentForm });

    const onSubmit = handleSubmit((data) => {
        setPaymentForm(data);
        setStep('shipping');
    });

    return (
        <>
            <Gap size='6xl' />
            <Text tag='p' size='l' view='secondary'>
                Contact
            </Text>
            <Gap size='s' />
            <EmailField control={control} trigger={trigger} error={errors.email?.message} />
            <Gap size='xs' />
            <NewsletterField control={control} />
            <Gap size='3xl' />
            <Text tag='p' size='l' view='secondary'>
                Shipping Address
            </Text>
            <StyledAdressForm>
                <NameField control={control} trigger={trigger} error={errors.name?.message} />
                <LastNameField
                    control={control}
                    trigger={trigger}
                    error={errors.lastName?.message}
                />
                <AddressField control={control} trigger={trigger} error={errors.address?.message} />
                <ShippingNoteField control={control} />
                <CityField control={control} trigger={trigger} error={errors.city?.message} />
                <ProvinceField control={control} />
                <PostalCodeField
                    control={control}
                    trigger={trigger}
                    error={errors.postalCode?.message}
                />
                <CountryField control={control} trigger={trigger} error={errors.country?.message} />
            </StyledAdressForm>
            <SaveInfoField control={control} />
            <Gap size='6xl' />
            <Flex align='center' justify='space-between'>
                <Link Component={NavLink} to={cartRoutes.cart} color='accent' underline>
                    <Text size='l' tag='p' view='secondary' color='accent' weight='regular'>
                        Back to cart
                    </Text>
                </Link>
                <Button onClick={onSubmit}>Go to shipping</Button>
            </Flex>
        </>
    );
};
