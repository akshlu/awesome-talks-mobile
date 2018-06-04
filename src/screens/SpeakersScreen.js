import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { getApolloClient } from '../net/graphqlClient';
import SpeakerList from '../components/SpeakerList';

const SpeakersScreen = () => (
    <ApolloProvider client={getApolloClient()}>
        <Query
            query={gql`
                {
                    allSpeakerses(orderBy: name_ASC) {
                        id
                        name
                        photo {
                            url
                        }
                    }
                }
            `}
        >
            {({ loading, error, data }) => {
                if (!data.allSpeakerses) {
                    return null;
                }
                return <SpeakerList speakersList={data.allSpeakerses} />;
            }}
        </Query>
    </ApolloProvider>
);

export default SpeakersScreen;
