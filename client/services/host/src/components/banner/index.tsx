import { Gap } from '@mryzhkova/packages-shared/components/gap';

import LeftBannerImg from '@/assets/images/banner-left.svg';
import RightBannerImg from '@/assets/images/banner-right.png';

import { StyledBanner, StyledLeftBanner, StyledRightBanner } from './styled';

export const Banner = () => (
    <>
        <Gap size='4xl' />
        <StyledBanner>
            <StyledLeftBanner>
                <LeftBannerImg />
            </StyledLeftBanner>
            <StyledRightBanner>
                <img src={RightBannerImg} alt='banner' />
            </StyledRightBanner>
        </StyledBanner>
        <Gap size='5xl' />
    </>
);
