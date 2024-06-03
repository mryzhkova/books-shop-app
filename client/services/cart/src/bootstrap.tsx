import { ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';

import { apolloClient } from '@mryzhkova/packages-shared/api';
import { GlobalStyles } from '@mryzhkova/packages-shared/styles/globalStyles';
import { defaultTheme } from '@mryzhkova/packages-shared/styles/theme';

import { router } from './Router';

const root = document.getElementById('root');

const container = createRoot(root as HTMLElement);

container.render(
    <ApolloProvider client={apolloClient}>
        <StyleSheetManager shouldForwardProp={() => true}>
            <ThemeProvider theme={defaultTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </StyleSheetManager>
        <GlobalStyles />
    </ApolloProvider>,
);
