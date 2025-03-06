import { NavLink } from 'react-router-dom';

import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Link } from '@mryzhkova/packages-shared/components/link';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { footerLinks } from '@/constants';

import { Copyright } from './copyright';
import {
    StyledFooter,
    StyledFooterBackground,
    StyledLinks,
    StyledLinksGroup,
    StyledLinkItem,
} from './styled';

export const Footer = () => (
    <>
        <StyledFooterBackground>
            <StyledFooter>
                <Text weight='light' color='lightSecondary'>
                    Your natural candle made for <br /> your home and for your wellness.
                </Text>
                <StyledLinks>
                    {footerLinks.map(({ group, links }) => (
                        <StyledLinksGroup key={group}>
                            <Text weight='light' color='accent'>
                                {group}
                            </Text>
                            {links.map(({ title, to }) => (
                                <StyledLinkItem key={title}>
                                    <Gap size='2xl' />
                                    <Link to={to} Component={NavLink}>
                                        <Text weight='light' color='lightSecondary'>
                                            {title}
                                        </Text>
                                    </Link>
                                </StyledLinkItem>
                            ))}
                        </StyledLinksGroup>
                    ))}
                </StyledLinks>
            </StyledFooter>
        </StyledFooterBackground>
        <Copyright />
    </>
);
