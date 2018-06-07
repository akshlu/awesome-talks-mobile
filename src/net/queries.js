import gql from 'graphql-tag';

export const SPEAKERS_QUERY = gql`
    {
        allSpeakerses(orderBy: name_ASC, filter: { isPublished: true }) {
            id
            name
            photo {
                url
            }
        }
    }
`;

export const TALKS_QUERY = gql`
    {
        allVideoses(orderBy: updatedAt_DESC, filter: { isPublished: true }) {
            id
            name
            link
            speaker {
                id
                name
            }
        }
    }
`;
