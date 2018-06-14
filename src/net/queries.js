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

export const SPEAKER_QUERY = gql`
    query Speaker($id: ID) {
        Speakers(id: $id) {
            id
            name
            bio
        }
    }
`;

export const TALKS_QUERY = gql`
    {
        allVideoses(orderBy: updatedAt_DESC, filter: { isPublished: true }) {
            id
            name
            link
            duration
            speaker {
                id
                name
            }
        }
    }
`;
