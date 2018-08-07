import gql from 'graphql-tag';
import config from '../config';

export const SPEAKERS_QUERY = gql`
    query AllSpeakers($skip: Int){
        allSpeakerses(orderBy: name_ASC,
                      filter: { isPublished: true },
                      skip: $skip,
                      first: ${config.pageSize}) {
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
            twitter
            photo {
                url
            }
            _videosesMeta {
                count
            }
            videoses {
                id
                name
                link
                duration
                description
                tags(filter: { isPublished: true }) {
                    id
                    name
                }
            }
        }
    }
`;

export const TALKS_QUERY = gql`
    query AllVideos($skip: Int) {
        allVideoses(orderBy: updatedAt_DESC,
                    filter: { isPublished: true },
                    skip: $skip,
                    first: ${config.pageSize}) {
            id
            name
            link
            duration
            tags(filter: { isPublished: true }) {
                id
                name
            }
        }
    }
`;

export const TALK_QUERY = gql`
    query Video($id: ID) {
        Videos(id: $id) {
            id
            name
            link
            duration
            description
            tags {
                id
                name
            }
            speaker {
                id
                name
                photo {
                    width
                    height
                    url
                }
            }
        }
    }
`;

export const CATEGORIES_QUERY = gql`
    query AllTags($skip: Int) {
        allTagses(orderBy: name_ASC,
                  filter: { isPublished: true },
                  skip: $skip,
                  first: ${config.pageSize}) {
            id
            name
            _videosMeta {
                count
            }
        }
    }
`;

export const CATEGORY_QUERY = gql`
    query Tag($id: ID) {
        Tags(id: $id) {
            videos {
                id
                name
                link
                duration
                description
                tags(filter: { isPublished: true }) {
                    id
                    name
                }
            }
        }
    }
`;
