import { gql, useQuery } from '@apollo/client';

import { type GenerateClientTokenResponse } from '../types';

const GENERATE_CLIENT_TOKEN = gql`
    query GenerateClientToken {
        generateClientToken {
            clientToken
            clientId
        }
    }
`;

export const useGenerateClientToken = () =>
    useQuery<GenerateClientTokenResponse>(GENERATE_CLIENT_TOKEN);
