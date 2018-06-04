import gql from 'graphql-tag';

export const SPEAKERS_QUERY = gql`
    {
        allSpeakerses(orderBy: name_ASC) {
            id
            name
            photo {
                url
            }
        }
    }
`;
