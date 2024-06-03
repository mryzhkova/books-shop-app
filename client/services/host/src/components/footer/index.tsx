import { NavLink } from 'react-router-dom';

import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Link } from '@mryzhkova/packages-shared/components/link';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { footerLinks } from '@/constants';

import { Copyright } from './copyright';
import { FooterContent, FooterBackground, Links, LinksGroup, LinkItem } from './styled';

export const Footer = () => (
    <>
        <FooterBackground>
            <FooterContent>
                <Text weight='light' color='lightSecondary'>
                    Your natural candle made for <br /> your home and for your wellness.
                </Text>
                <Links>
                    {footerLinks.map(({ group, links }) => (
                        <LinksGroup key={group}>
                            <Text weight='light' color='accent'>
                                {group}
                            </Text>
                            {links.map(({ title, to }) => (
                                <LinkItem key={title}>
                                    <Gap size='2xl' />
                                    <Link to={to} Component={NavLink}>
                                        <Text weight='light' color='lightSecondary'>
                                            {title}
                                        </Text>
                                    </Link>
                                </LinkItem>
                            ))}
                        </LinksGroup>
                    ))}
                </Links>
            </FooterContent>
        </FooterBackground>
        <Copyright />
    </>
);
