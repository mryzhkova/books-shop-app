import 'styled-components';
import { ThemeType } from '@mryzhkova/packages-shared/styles/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
