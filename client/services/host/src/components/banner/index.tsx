import { Gap } from '@mryzhkova/packages-shared/components/gap';

import LeftBannerImg from '@/assets/images/banner-left.svg';
import RightBannerImg from '@/assets/images/banner-right.png';

import { BannerWrapper, LeftBanner, RightBanner } from './styled';

export const Banner = () => (
    <>
        <Gap size='4xl' />
        <BannerWrapper>
            <LeftBanner>
                <LeftBannerImg />
            </LeftBanner>
            <RightBanner>
                <img src={RightBannerImg} alt='banner' />
            </RightBanner>
        </BannerWrapper>
        <Gap size='5xl' />
    </>
);
